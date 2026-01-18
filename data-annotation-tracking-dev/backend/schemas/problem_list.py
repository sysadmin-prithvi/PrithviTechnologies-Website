from pydantic import BaseModel
from typing import Optional
from datetime import datetime


class ProblemListBase(BaseModel):
    name: str
    description: Optional[str] = None

class ProblemListCreate(ProblemListBase):
    pass

class ProblemListOut(ProblemListBase):
    id: int
    created_at: datetime
    updated_at: datetime
    class Config:
        orm_mode = True