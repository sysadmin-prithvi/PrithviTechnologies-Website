from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from db.database import get_db
from models.problem_list import ProblemList
from schemas.problem_list import ProblemListCreate, ProblemListOut
from typing import List

router = APIRouter(prefix="/problemmasterlist", tags=["Problem List"])

@router.get("/", response_model=List[ProblemListOut])
def get_problems(db: Session = Depends(get_db)):
    return db.query(ProblemList).all()

@router.post("/", response_model=ProblemListOut, status_code=status.HTTP_201_CREATED)
def create_problem(problem: ProblemListCreate, db: Session = Depends(get_db)):
    db_problem = ProblemList(**problem.dict())
    db.add(db_problem)
    db.commit()
    db.refresh(db_problem)
    return db_problem

@router.put("/{problem_id}", response_model=ProblemListOut)
def update_problem(problem_id: int, problem: ProblemListCreate, db: Session = Depends(get_db)):
    db_problem = db.query(ProblemList).filter(ProblemList.id == problem_id).first()
    if not db_problem:
        raise HTTPException(status_code=404, detail="Problem not found")
    db_problem.name = problem.name
    db_problem.description = problem.description
    db.commit()
    db.refresh(db_problem)
    return db_problem

@router.delete("/{problem_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_problem(problem_id: int, db: Session = Depends(get_db)): 
    db_problem = db.query(ProblemList).filter(ProblemList.id == problem_id).first()
    if not db_problem:
        raise HTTPException(status_code=404, detail="Problem not found")
    db.delete(db_problem)
    db.commit()
    return