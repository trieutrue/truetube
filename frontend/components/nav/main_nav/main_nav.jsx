import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { 
  faBars, 
  faUserCircle,
  faBell,
  faVideo,
  faEllipsisV,
  faTh,
  faSearch,
  faPortrait,
  faSignOutAlt,
  faFileVideo,
  faRss
} from '@fortawesome/free-solid-svg-icons';



const handleDropMenu = e => {
  e.stopPropagation();
  e.preventDefault();
  const dropMenu = e.currentTarget.lastElementChild
  if (dropMenu.style.display === "none") {
    dropMenu.style.display = "block"
  } else {
    dropMenu.style.display = "none"
  }
  return document.addEventListener("click", (event) => {
    dropMenu.style.display = "none"
  });
}

class MainNav extends React.Component {
  constructor(props) {
    super(props);

    this.loggedInDisplay = this.loggedInDisplay.bind(this)
    this.videoDropMenu = this.videoDropMenu.bind(this)
  }

  loggedInDisplay() {
    const { currentUser } = this.props
    // debugger
    return currentUser ? (
      <>
        <li>
          <FontAwesomeIcon icon={faBell} className="bell-icon" />
        </li>

        <li id="user-dropdown-btn" onClick={handleDropMenu}>
          <FontAwesomeIcon icon={faUserCircle} className="user-icon" />
          {this.userDropMenu()}
        </li>
      </>
    ) : (
        <>
          <li>
            <FontAwesomeIcon icon={faEllipsisV} className="settings-icon" />
          </li>
          <li>
            <Link to="/signin" className="signin-btn">
              <FontAwesomeIcon icon={faUserCircle} className="user-icon" />
              <strong>SIGN IN</strong>
            </Link>
          </li>
        </>
      )
  }
  videoDropMenu() {
    const { openModal } = this.props
    return (
      <ul className="video-drop-menu">
        <li onClick={() => openModal('upload')}>
          <FontAwesomeIcon icon={faFileVideo} className="upload-icon" />
          <Link to="/">Upload video</Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faRss} className="live-icon" />
          <Link to="/">Go live</Link>
        </li>
      </ul>
    )
  }

  userDropMenu() {
    const { currentUser, logout } = this.props
    return (
      <ul className="users-drop-menu" onClick={e => e.stopPropagation()}>
        <div className="header">
          <FontAwesomeIcon icon={faUserCircle} className="user-icon" />
          <h4>{currentUser.channelName}</h4>
        </div>

        <li>
          <FontAwesomeIcon icon={faPortrait} className="channel-icon" />
          <Link to="/">Your channel</Link>
        </li>

        <li onClick={logout}>
          <FontAwesomeIcon icon={faSignOutAlt} className="signout-icon" />
          Sign Out
        </li>
      </ul>
    )
  }

  render(){
    const {  openModal, location } = this.props;
    if ( location.pathname === "/signin" || location.pathname === "/signup" ) return null;
    // debugger
   
    return (
      <nav className='main-nav'>
        <nav className="left-nav">
          <button id="guide-btn">
            <FontAwesomeIcon icon={faBars} className="guide-icon"/>
          </button>
          <Link to="/" className="home-btn">
            <FontAwesomeIcon icon={faYoutube} className="logo-icon"/>
            WeTube
          </Link>
        </nav>
  
        <div id="search-bar-form">
          <input type="text" 
            id="search-box" 
            placeholder="Search"/>
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
  
        <nav className='right-nav'>
          <ul>
            <li id="video-dropdown-btn" onClick={handleDropMenu}>
              <FontAwesomeIcon icon={faVideo} className="video-icon" />
              {/* {this.videoDropMenu()} */}
              <ul className="video-drop-menu">
                <li onClick={() => openModal('upload')}>
                  <FontAwesomeIcon icon={faFileVideo} className="upload-icon" />
                  <Link to="/">Upload video</Link>
                </li>
                <li>
                  <FontAwesomeIcon icon={faRss} className="live-icon" />
                  <Link to="/">Go live</Link>
                </li>
              </ul>
            </li>
    
              <li id="apps-dropdown-btn">
              <FontAwesomeIcon icon={faTh} className="apps-icon" />
              </li>
    
              {this.loggedInDisplay()}
          </ul>
        </nav>
      </nav>
    );
  }
}  



export default withRouter(MainNav)

//have a ul? with 