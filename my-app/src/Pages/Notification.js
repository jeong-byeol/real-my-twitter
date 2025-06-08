import React from 'react';
import './Notification.css';

function Notification({ notifications }) {
  return (
    <div className="telegram-notification-container">
      <div className="telegram-notification-card">
        <div className="telegram-notification-title">알림</div>
        <div className="telegram-notification-list">
          {notifications.length === 0 ? (
            <div className="telegram-notification-item" style={{textAlign:'center',color:'#aaa'}}>알림이 없습니다.</div>
          ) : (
            notifications.map((note, idx) => (
              <div className="telegram-notification-item" key={idx}>{note}</div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Notification;
