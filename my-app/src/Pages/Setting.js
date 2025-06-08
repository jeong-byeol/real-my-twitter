import React, { useState } from 'react';
import './Setting.css';
import { FaMoon, FaSun } from 'react-icons/fa';

function Setting({ username, onChangeUsername, darkMode, onToggleDarkMode }) {
  const [newName, setNewName] = useState(username);

  const handleNameChange = () => {
    if (newName.trim()) {
      onChangeUsername(newName);
    }
  };

  return (
    <div className="telegram-setting-container">
      <div className="telegram-setting-card">
        <div className="telegram-setting-title">설정</div>
        <div>
          <span className="telegram-setting-label">이름 변경</span>
          <input
            className="telegram-setting-input"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            maxLength={20}
          />
          <button className="telegram-setting-btn" onClick={handleNameChange}>변경</button>
        </div>
        <div>
          
          <button className="telegram-setting-btn" onClick={onToggleDarkMode} style={{padding:'10px 16px',fontSize:'1.2rem',display:'inline-flex',alignItems:'center',justifyContent:'center'}}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Setting;

