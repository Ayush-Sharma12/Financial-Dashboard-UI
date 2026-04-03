import React from 'react';
import { useFinance } from '../context/FinanceContext.jsx';

export const Header = () => {
  const { userRole, toggleRole, darkMode, toggleDarkMode } = useFinance();

  return (
    <div className="header">
      <div className="header-left">
        <h1>Finance Dashboard</h1>
      </div>

      <div className="header-right">
        <div className="header-controls">
          <div className="role-selector">
            <span className={`role-badge ${userRole}`}>
              {userRole.toUpperCase()}
            </span>
            <button className="toggle-btn" onClick={toggleRole}>
              Switch Role
            </button>
          </div>

          <button
            className="dark-mode-toggle"
            onClick={toggleDarkMode}
            title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? 'Light' : 'Dark'}
          </button>
        </div>
      </div>
    </div>
  );
};
