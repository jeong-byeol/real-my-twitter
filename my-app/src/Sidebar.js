import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaHashtag, FaFeatherAlt, FaBell, FaCog } from 'react-icons/fa';

const Sidebar = ({ hasNewNotification }) => {
  return (
    <section className="bottom-navbar">
      <Link to="/" className="sidebar-link"><FaHome className="icon" /></Link>
      <Link to="/explore" className="sidebar-link"><FaHashtag className="icon" /></Link>
      <Link to="/tweet" className="sidebar-link"><FaFeatherAlt className="icon" /></Link>
      <Link to="/notification" className="sidebar-link notification-link">
        <FaBell className="icon" />
        {hasNewNotification && <span className="notification-dot" />}
      </Link>
      <Link to="/setting" className="sidebar-link"><FaCog className="icon" /></Link>
    </section>
  );
};

export default Sidebar;
