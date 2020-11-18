import React from 'react';
import { Link } from 'react-router-dom';


export default ({ currentUser, logout }) => {
  const loggedInDisplay = currentUser ? (
    <>
      Notification
      <ul id="users-drop-menu">
        <h4>{currentUser.channelName}</h4>
        <li><Link to="/">Your channel</Link></li>
        <li onClick={logout}>Sign Out</li>
      </ul>
    </>
  ) : (
    <>
      <img src="" alt="Settings" />
      <Link className="sign-in-btn" to="/signin">Sign In</Link>
    </>
  )

  return (
    <nav className='main-nav'>
      <div className="left-display">
        <i>Hamburger Icon</i>
        <h1>WeTube</h1>
      </div>
      <div id="search-bar-form">
        <input type="text" id="search-box" />
        <i>Search Glass</i>
      </div>
      <div className='right-display'>
        <ul id="video-drop-menu">
          <li><Link to="/">Upload Video</Link></li> {/* link to upload modal */}
          <li><Link to="/">Go live</Link></li>
        </ul>
        {/* <i className="fas fa-th">WeTube Apps</i> need to npm install fontawesome */} 
        {loggedInDisplay}
      </div>
    </nav>
  );
}


//have a ul? with 