from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Text
from sqlalchemy.sql import func
from db.database import Base

class ProblemNoted(Base):
    __tablename__ = "problem_noted"
    id = Column(Integer, primary_key=True, index=True)
    project_id = Column(String, ForeignKey("projects.id"), nullable=False)
    image_id = Column(String, nullable=False)
    problem_id = Column(Integer, ForeignKey("project_problem_mapping.id"), nullable=False)
    qc_username = Column(String, ForeignKey("users.username"), nullable=False)
    comment = Column(Text, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())