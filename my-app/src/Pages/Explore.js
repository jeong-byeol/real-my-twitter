import React from 'react';
import './Explore.css';

function Explore({ onFollow, followed }) {
  const dummyUsers = ['익명1', '익명2', '익명3'];
  const coinTrends = ['#Bitcoin', '#Ethereum', '#Solana'];

  const handleFollow = (user) => {
    if (!followed.includes(user)) {
      onFollow(user);
    }
  };

  return (
    <div className="telegram-explore-container">
      <div className="telegram-explore-card">
        <div className="telegram-explore-title">코인 트렌드</div>
        <div className="telegram-trend-list">
          {coinTrends.map((trend, idx) => (
            <div className="telegram-trend-item" key={idx}>{trend}</div>
          ))}
        </div>
        <div className="telegram-explore-title" style={{fontSize:'1.15rem'}}>유저 추천</div>
        <div className="telegram-user-list">
          {dummyUsers.map((user, idx) => (
            <div className="telegram-user-item" key={idx}>
              <span>{user}</span>
              <button
                className={`telegram-follow-btn${followed.includes(user) ? ' followed' : ''}`}
                onClick={() => handleFollow(user)}
                disabled={followed.includes(user)}
              >
                {followed.includes(user) ? '팔로잉' : '팔로우'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Explore;

