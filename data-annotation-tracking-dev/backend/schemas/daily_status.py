from pydantic import BaseModel, field_validator
from typing import Optional
from datetime import date, datetime

class DailyStatusBase(BaseModel):
    username: str
    date: date
    project_id: str
    task: str
    image_count: int
    note: Optional[str] = None

    @field_validator("task")
    @classmethod
    def task_not_empty(cls, v):
        if not v or not v.strip():
            raise ValueError("Task cannot be empty")
        return v

class DailyStatusCreate(DailyStatusBase):
    pass

class DailyStatusUpdate(BaseModel):
    task: Optional[str] = None
    image_count: Optional[int] = None
    note: Optional[str] = None

class DailyStatusOut(DailyStatusBase):
    id: int
    created_at: datetime
    updated_at: datetime
    

    class Config:
        orm_mode = True