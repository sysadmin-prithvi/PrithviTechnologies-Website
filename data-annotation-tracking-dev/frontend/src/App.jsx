import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DailyStatusPage from "./pages/DailyStatusPage";
import "./App.css";
import UsersViewPage from "./pages/UserViewPage";
import DailyStatusViewPage from "./pages/DailyStatusViewPage";
import ProjectViewPage from "./pages/ProjectViewPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <div className="app-bg">
        
        <div className="app-container">
          {loggedIn && (
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          )}
          <Routes>
            <Route
              path="/login"
              element={<LoginPage onLogin={() => setLoggedIn(true)} />}
            />
            <Route
              path="/daily-status"
              element={<DailyStatusPage />}
            />
            <Route
              path="/users"
              element={<UsersViewPage />}
            />
            <Route 
            path="/dailystatus" 
            element={<DailyStatusViewPage />} 
            />
            <Route
              path="/projects"
              element={<ProjectViewPage />}
            />
            <Route
              path="*"
              element={<LoginPage onLogin={() => setLoggedIn(true)} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

/**
 * <Routes>
            <Route
              path="/login"
              element={
                loggedIn ? (
                  <Navigate to="/daily-status" />
                ) : (
                  <LoginPage onLogin={() => setLoggedIn(true)} />
                )
              }
            />
            <Route
              path="/daily-status"
              element={
                loggedIn ? (
                  <DailyStatusPage />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="*"
              element={
                loggedIn ? (
                  <Navigate to="/daily-status" />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
          </Routes>
 */