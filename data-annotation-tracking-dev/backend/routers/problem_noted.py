from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from db.database import get_db
from models.problem_noted import ProblemNoted
from schemas.problem_noted import ProblemNotedCreate, ProblemNotedOut
from typing import List

router = APIRouter(prefix="/problems", tags=["Problem Noted"])

@router.get("/", response_model=List[ProblemNotedOut])
def get_qc_problems(project_id: str = None, image_id: str = None, db: Session = Depends(get_db)):
    query = db.query(ProblemNoted)
    if project_id:
        query = query.filter(ProblemNoted.project_id == project_id)
    if image_id:
        query = query.filter(ProblemNoted.image_id == image_id)
    return query.all()

@router.post("/", response_model=ProblemNotedOut, status_code=status.HTTP_201_CREATED)
def create_qc_problem(qc_problem: ProblemNotedCreate, db: Session = Depends(get_db)):
    db_qc_problem = ProblemNoted(**qc_problem.dict())
    db.add(db_qc_problem)
    db.commit()
    db.refresh(db_qc_problem)
    return db_qc_problem