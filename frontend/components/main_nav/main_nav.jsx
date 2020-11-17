import React from 'react';
import { Link } from 'react-router-dom';


export default ({ currentUser, logout }) => {
  const loggedInDisplay = currentUser ? (
    <>
      <img src="" alt="Notification"/>
      <ul id="users-drop-menu">
        <h4>{currentUser.email}</h4>
        <li><Link to="/">Create a channel</Link></li>
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
    <>
      <ul id="video-drop-menu">
        <li><Link to="/">Upload Video</Link></li> {/* link to upload modal */}
        <li><Link to="/">Go live</Link></li>
      </ul>
      {/* <i className="fas fa-th">WeTube Apps</i> need to npm install fontawesome */} 
      {loggedInDisplay}
    </>
  );
}


//have a ul? with 