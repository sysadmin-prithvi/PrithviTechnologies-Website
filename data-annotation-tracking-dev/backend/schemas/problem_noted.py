from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class ProblemNotedBase(BaseModel):
    project_id: str
    image_id: str
    problem_id: int
    qc_username: str
    comment: Optional[str] = None

class ProblemNotedCreate(ProblemNotedBase):
    pass

class ProblemNotedOut(ProblemNotedBase):
    id: int
    created_at: datetime
    updated_at: datetime
    class Config:
        orm_mode = True