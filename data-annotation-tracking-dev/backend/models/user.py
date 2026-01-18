'''
username
password
role
email
is_active
'''
from sqlalchemy import Column, String, Boolean, Integer, DateTime
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship

from db.database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True, nullable=False)
    password = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=True)
    role = Column(String, nullable=False)  # e.g., admin, annotator, checker
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    # Relationship: One user has many status updates
    status_updates = relationship("DailyStatus", back_populates="user")

