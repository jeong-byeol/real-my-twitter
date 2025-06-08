import React, { useState } from 'react';
import './Tweet.css';

function Tweet({ onTweet }) {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (title.trim() && text.trim()) {
      onTweet({ title, text });
      setTitle('');
      setText('');
    }
  };

  return (
    <div className="telegram-compose-container">
      <div className="telegram-compose-card">
        <div className="telegram-compose-title">새 글 작성</div>
        <input
          className="telegram-input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력하세요"
          maxLength={40}
        />
        <textarea
          className="telegram-textarea"
          rows="5"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="여기에 글을 작성하세요."
          maxLength={280}
        />
        <button
          className="telegram-compose-btn"
          onClick={handleSubmit}
          disabled={!title.trim() || !text.trim()}
        >
          🚀 게시하기
        </button>
      </div>
    </div>
  );
}

export default Tweet;

