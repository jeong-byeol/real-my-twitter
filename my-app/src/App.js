import React, {useState} from 'react'; //React 훅으로 인해 컴포넌트 내부에서 상태값을 관리 가능
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './Sidebar'; 

import Explore from './Pages/Explore';
import Home from './Pages/Home';
import Notification from './Pages/Notification';
import Setting from './Pages/Setting';
import Tweet from './Pages/Tweet';

function App() {
  const [username, setUsername] = useState("익명 유저"); //4. 상태업데이트 한 새로운 값을 username에 저장
  const [tweets, setTweets] = useState([]); 
  const [notifications, setNotifications] = useState([]);
  const [following, setFollowing] = useState([]); 
  const [darkMode, setDarkMode] = useState(false); 


  const handleTweet = (text) => { 
    setTweets([text, ...tweets]);
    setNotifications([`새 트윗이 작성되었습니다.`, ...notifications]);
  };

  const handleFollow = (user) => {
    if (!following.includes(user)) {
      setFollowing([...following, user]);
      setNotifications([`${user}님을 팔로우했습니다.`, ...notifications]);
    }
  };

  const handleUsernameChange = (newName) => { //2.중간 전달 함수handleUsernameChange를 통해 Setting에서 newName을 받아옴.
    setUsername(newName); // 3. 여기서 상태 업데이트
  };

  const toggleDarkMode = () => { 
    setDarkMode(!darkMode);
  };
//
  return (
    <Router>
      <div className={`App ${darkMode ? 'dark' : ''}`}> 
        <main>
          <Sidebar /> 
          <section className='features'>
            <Routes>  {/* Home, Notification은 값을 받기만하는 반면에, Explore,Tweet,Setting은 값을 전달해줌 */}
              <Route path="/" element={<Home username={username} following={following} tweets={tweets} />} /> {/*5.username={username} 이 코드를 통해 Home컨포넌트의 username는 상태 업데이트 된다. */}
              <Route path="/explore" element={<Explore onFollow={handleFollow} followed={following} />} />
              <Route path="/tweet" element={<Tweet onTweet={handleTweet} />} />
              <Route path="/notification" element={<Notification notifications={notifications} />} />
              <Route path="/setting"
                element={
                  <Setting
                    username={username}
                    onChangeUsername={handleUsernameChange} //1. Setting에서 onChangeUsername을 호출했으므로 함수handleUsernameChange를 Setting에 전달
                    darkMode={darkMode}
                    onToggleDarkMode={toggleDarkMode}
                  />
                }
              />
            </Routes>
          </section>
        </main>
      </div>
    </Router>
  );
}

export default App;
