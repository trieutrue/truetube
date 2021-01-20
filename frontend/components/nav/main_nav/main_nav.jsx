import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { MdVideoCall } from 'react-icons/md'
import { FaAngellist, FaGithubSquare, FaLinkedin, FaUserCircle } from 'react-icons/fa';
import { 
  faBars, 
  faUserCircle,
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
    this.handleSearchInput = this.handleSearchInput.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  loggedInDisplay() {
    const { currentUser } = this.props
    return currentUser ? (
      <>
        <li id="user-dropdown-btn" onClick={handleDropMenu}>
          <FaUserCircle className="profile-icon" />
          {this.userDropMenu()}
        </li>
      </>
    ) : (
        <>
          <li>
            <Link to="/signin" className="signin-btn">
              <FontAwesomeIcon icon={faUserCircle} className="profile-icon" />
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
          <FaUserCircle className="profile-icon" />
          <h4>{currentUser.channelName}</h4>
        </div>

        <li>
          <Link to={`/channel/${currentUser.id}/featured`}>
            <FontAwesomeIcon icon={faPortrait} className="channel-icon" />
            Your channel
          </Link>
        </li>

        <li onClick={logout}>
          <FontAwesomeIcon icon={faSignOutAlt} className="signout-icon" />
          Sign Out
        </li>
      </ul>
    )
  }

  handleSearchInput(e) {
    this.setState({ searchQuery: e.currentTarget.value })
  }

  handleSearch(e) {
    e.preventDefault()
    this.props.history.push(`/results?search_query=${this.state.searchQuery}`)
  }

  render(){
    const {  openModal, location } = this.props;
    if ( location.pathname === "/signin" || location.pathname === "/signup" ) return null;
   
    return (
      <nav className='main-nav'>
        <nav className="left-nav">
          <button id="guide-btn">
            <FontAwesomeIcon icon={faBars} className="guide-icon"/>
          </button>
          <Link to="/" className="home-btn">
            <FontAwesomeIcon icon={faYoutube} className="logo-icon"/>
            TrueTube
          </Link>
        </nav>
  
        <form id="search-bar-form" onSubmit={this.handleSearch}>
          <input type="text" 
            id="search-box" 
            placeholder="Search"
            onChange={this.handleSearchInput}/>
            <button>
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
            </button>
        </form>
  
        <nav className='right-nav'>
          <ul className='right-nav'>
            <li id="video-dropdown-btn" onClick={handleDropMenu}>
              <MdVideoCall className="video-icon" />
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
              <a href="https://github.com/trieutrue/truetube" target="_blank">
                <FaGithubSquare className="apps-icon" />
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/trieutrue/" target="_blank">
                <FaLinkedin className="settings-icon" />
              </a>
            </li>

            <li>
              <a href="https://angel.co/u/trieutran" target="_blank">
                <FaAngellist />
              </a>
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