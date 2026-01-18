from pydantic import BaseModel, field_validator
from typing import Optional
from datetime import datetime

class ProjectBase(BaseModel):
    name: str
    description: Optional[str] = None
    start_date: Optional[str] = None  # ISO format date string
    end_date: Optional[str] = None    # ISO format date string
    is_active: Optional[int] = 1  # 1 for active, 0 for inactive


    @field_validator("name")
    @classmethod
    def name_not_empty(cls, v):
        if not v or not v.strip():
            raise ValueError("Project name cannot be empty")
        return v

class ProjectCreate(ProjectBase):
    id: str

    @field_validator("id")
    @classmethod
    def id_not_empty(cls, v):
        if not v or not v.strip():
            raise ValueError("Project ID cannot be empty")
        return v

class ProjectUpdate(BaseModel):
    name: Optional[str] = None

class ProjectOut(ProjectBase):
    id: str
    created_at: datetime
    updated_at: datetime

    class Config:
        orm_mode = True