from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from db.database import get_db
from models.project_problem_mapping import ProjectProblemMapping
from schemas.project_problem_mapping import ProjectProblemMappingCreate, ProjectProblemMappingOut
from typing import List

router = APIRouter(prefix="/projectproblemmapping", tags=["Project Problem Mapping"])   
@router.get("/", response_model=List[ProjectProblemMappingOut])
def get_mappings(
    project_id: str = None,
    problem_id: str = None,
    db: Session = Depends(get_db)):
    query = db.query(ProjectProblemMapping)
    if project_id:
        query = query.filter(ProjectProblemMapping.project_id == project_id)   
    if problem_id:
        query = query.filter(ProjectProblemMapping.problem_id == problem_id)
    return query.all()
  

@router.post("/", response_model=ProjectProblemMappingOut, status_code=status.HTTP_201_CREATED)
def create_mapping(mapping: ProjectProblemMappingCreate, db: Session = Depends(get_db)):
    db_mapping = ProjectProblemMapping(**mapping.dict())
    db.add(db_mapping)
    db.commit()
    db.refresh(db_mapping)
    return db_mapping

@router.delete("/{mapping_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_mapping(mapping_id: int, db: Session = Depends(get_db)): 
    db_mapping = db.query(ProjectProblemMapping).filter(ProjectProblemMapping.id == mapping_id).first()
    if not db_mapping:
        raise HTTPException(status_code=404, detail="Mapping not found")
    db.delete(db_mapping)
    db.commit()
    return
