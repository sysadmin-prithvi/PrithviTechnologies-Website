from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm

from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from typing import List, Optional
from db.database import get_db
from core.auth_handler import get_current_active_user, get_password_hash
from models.user import User
from schemas.user import UserCreate, UserUpdate, UserOut



router = APIRouter(
    prefix="/users",
    tags=["Users"]
)

@router.get("/", response_model=List[UserOut])
def get_users(
    username: Optional[str] = None,
    email: Optional[str] = None,
    role: Optional[str] = None,
    db: Session = Depends(get_db)
):
    query = db.query(User)
    if username:
        query = query.filter(User.username == username)
    if email:
        query = query.filter(User.email == email)
    if role:
        query = query.filter(User.role == role)
    return query.all()

@router.get("/{user_id}", response_model=UserOut)
def get_user(user_id: int, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@router.get("/users/me", response_model=UserOut)
async def read_users_me(current_user: User = Depends(get_current_active_user)):
    return current_user

def admin_required(current_user: User = Depends(get_current_active_user)):
    if current_user.role != "admin":
        raise HTTPException(status_code=403, detail="Admin privileges required")
    return current_user

@router.put("/{user_id}", response_model=UserOut, dependencies=[Depends(get_current_active_user)])
def update_user(user_id: int, update: UserUpdate, db: Session = Depends(get_db), current_user: User = Depends(get_current_active_user)):
    if current_user.role != "admin":
        raise HTTPException(status_code=403, detail="Admin privileges required")
    db_user = db.query(User).filter(User.id == user_id).first()
    if not db_user:
        raise HTTPException(status_code=404, detail="User not found")
    for key, value in update.dict(exclude_unset=True).items():
        if key == "password" and value:
            value = get_password_hash(value)
        setattr(db_user, key, value)
    db.commit()
    db.refresh(db_user)
    return db_user