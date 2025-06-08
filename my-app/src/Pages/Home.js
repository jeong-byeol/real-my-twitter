import React from 'react';
import './Home.css';

function Home({ username, following, tweets }) {
  return (
    <div className="telegram-home-container">
      <div className="telegram-home-card">
        <div className="telegram-home-title">마이페이지</div>
        <div className="telegram-profile-info">👤 이름 {username}</div>
        <div className="telegram-profile-info">👥 팔로잉 수 {following.length}</div>
        <div className="telegram-home-title" style={{fontSize:'1.15rem',marginTop:'10px'}}>글 목록</div>
        <div className="telegram-tweet-list">
          {tweets.length === 0 ? (
            <div className="telegram-tweet-item" style={{textAlign:'center',color:'#aaa'}}>작성된 글이 없습니다.</div>
          ) : (
            tweets.map((tweet, index) => (
              <div className="telegram-tweet-item" key={index}>
                <div className="telegram-tweet-title">{tweet.title}</div>
                <div className="telegram-tweet-text">{tweet.text}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
