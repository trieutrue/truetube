import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { 
  faBars, 
  faUserCircle,
  faBell,
  faVideo,
  faEllipsisV,
  faTh
} from '@fortawesome/free-solid-svg-icons';


export default ({ currentUser, logout }) => {
  const loggedInDisplay = currentUser ? (
    <>
      <li>
        <FontAwesomeIcon icon={faBell} className="bell-icon" />
      </li>
      <li id="user-dropdown-btn">
        <FontAwesomeIcon icon={faUserCircle} className="user-icon" />
        <ul classNme="users-drop-menu">
          <h4>{currentUser.channelName}</h4>
          <li><Link to="/">Your channel</Link></li>
          <li onClick={logout}>Sign Out</li>
        </ul>
      </li>
    </>
  ) : (
    <> 
      <li>
        <FontAwesomeIcon icon={faEllipsisV} className="settings-icon"/>
      </li>
      <li id="signin-btn">
        <Link to="/signin" className="signin-btn">
          <FontAwesomeIcon icon={faUserCircle} className="user-icon" />
          <strong>SIGN IN</strong>
        </Link>
      </li>
    </>
  )

  return (
    <nav className='main-nav'>
      <nav className="left-nav">
        <FontAwesomeIcon icon={faBars} className="guide-icon"/>
        <Link to="/" className="home-btn">
          <FontAwesomeIcon icon={faYoutube} className="logo-icon"/>
          WeTube
        </Link>
      </nav>

      <div id="search-bar-form">
        <input type="text" id="search-box" />
        <i>Search Glass</i>
      </div>

      <nav className='right-nav'>
        <ul>
          <li id="video-dropdown-btn">
            <FontAwesomeIcon icon={faVideo} className="video-icon" />
            <ul className="video-drop-menu">
              <li><Link to="/">Upload Video</Link></li> {/* link to upload modal */}
              <li><Link to="/">Go live</Link></li>
            </ul>
          </li>
          <li id="apps-dropdown-btn">
            <FontAwesomeIcon icon={faTh} className="apps-icon" />
          </li>
          {loggedInDisplay}
        </ul>
      </nav>
    </nav>
  );
}


//have a ul? with 