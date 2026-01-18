from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class ProjectProblemMappingBase(BaseModel):
    project_id: str
    problem_id: int

class ProjectProblemMappingCreate(ProjectProblemMappingBase):
    pass

class ProjectProblemMappingOut(ProjectProblemMappingBase):
    id: int
    created_at: datetime
    updated_at: datetime
    class Config:
        orm_mode = True