from fastapi import APIRouter, Depends, HTTPException, status, Query
from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from typing import List, Optional
from db.database import get_db
from models.daily_status import DailyStatus
from models.user import User
from models.projects import Project
from schemas.daily_status import DailyStatusCreate, DailyStatusUpdate, DailyStatusOut

router = APIRouter(
    prefix="/daily_status",
    tags=["Daily Status"]
)


# Get all daily status entries or filter by username, date, project_id
@router.get("/", response_model=List[DailyStatusOut])
def get_all_daily_status(
    username: Optional[str] = None,
    date: Optional[str] = None,
    project_id: Optional[str] = None,
    db: Session = Depends(get_db)
):
    query = db.query(DailyStatus)
    if username:
        query = query.filter(DailyStatus.username == username)
    if date:
        query = query.filter(DailyStatus.date == date)
    if project_id:
        query = query.filter(DailyStatus.project_id == project_id)
    return query.all()

# Get a single daily status entry by ID
@router.get("/{status_id}", response_model=DailyStatusOut)
def get_daily_status(status_id: int, db: Session = Depends(get_db)):
    status_entry = db.query(DailyStatus).filter(DailyStatus.id == status_id).first()
    if not status_entry:
        raise HTTPException(status_code=404, detail="Daily status not found")
    return status_entry
'''
# Create a new daily status entry
@router.post("/create", response_model=DailyStatusOut, status_code=status.HTTP_201_CREATED)
def create_daily_status(entry: DailyStatusCreate, db: Session = Depends(get_db)):
    db_entry = DailyStatus(**entry.model_dump())
    db.add(db_entry)
    db.commit()
    db.refresh(db_entry)
    return db_entry
'''

@router.post("/create", response_model=DailyStatusOut, status_code=status.HTTP_201_CREATED)
def create_daily_status(entry: DailyStatusCreate, db: Session = Depends(get_db)):
    # Validate user exists
    #user = db.query(User).filter(User.username == entry.username).first()
    #if not user:
    #    raise HTTPException(
    #        status_code=400,
    #        detail=f"User '{entry.username}' does not exist."
    #    )
    # Validate project exists
    #project = db.query(Project).filter(Project.id == entry.project_id).first()
    #if not project:
    #    raise HTTPException(
    #        status_code=400,
    #        detail=f"Project '{entry.project_id}' does not exist."
    #    )
    try:
        db_entry = DailyStatus(**entry.model_dump())
        db.add(db_entry)
        db.commit()
        db.refresh(db_entry)
        return db_entry
    except IntegrityError as e:
        db.rollback()
        # Parse the error for foreign key violation
    #    if 'foreign key constraint' in str(e.orig).lower():
    #        raise HTTPException(
    #            status_code=400,
    #            detail="Foreign key constraint failed. Please check user and project references."
    #        )
        raise HTTPException(
            status_code=400,
            detail=f"Database error: {str(e.orig)}"
        )

# Update a daily status entry
@router.put("/{status_id}", response_model=DailyStatusOut)
def update_daily_status(status_id: int, update: DailyStatusUpdate, db: Session = Depends(get_db)):
    db_entry = db.query(DailyStatus).filter(DailyStatus.id == status_id).first()
    if not db_entry:
        raise HTTPException(status_code=404, detail="Daily status not found")
    for key, value in update.dict(exclude_unset=True).items():
        setattr(db_entry, key, value)
    db.commit()
    db.refresh(db_entry)
    return db_entry

# Delete a daily status entry
@router.delete("/{status_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_daily_status(status_id: int, db: Session = Depends(get_db)):
    db_entry = db.query(DailyStatus).filter(DailyStatus.id == status_id).first()
    if not db_entry:
        raise HTTPException(status_code=404, detail="Daily status not found")
    db.delete(db_entry)
    db.commit()
    return
