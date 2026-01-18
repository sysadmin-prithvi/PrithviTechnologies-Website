'''
username
date
project_id
task
image_count
note
'''

from sqlalchemy import Column, Integer, String, ForeignKey, Date, DateTime, Text
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship

from db.database import Base

class DailyStatus(Base):
    __tablename__ = "daily_status"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, ForeignKey("users.username"), nullable=False)
    date = Column(Date, nullable=False)
    project_id = Column(String, ForeignKey("projects.id"), nullable=False)
    task = Column(String, nullable=False)
    image_count = Column(Integer, nullable=False)
    note = Column(Text)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    # Relationships
    user = relationship("User", back_populates="status_updates") # One user has many daily statuses
    project = relationship("Project", back_populates="status_updates") # One project has many daily statuses
