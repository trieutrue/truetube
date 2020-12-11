import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { TiHome } from 'react-icons/ti'
import { ImFire } from 'react-icons/im'
import { RiVideoLine } from 'react-icons/ri'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import * as MD from 'react-icons/md'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons';


class SideNav extends React.Component {

  subHeader() {
    const { currentUser } = this.props
    return currentUser ? (
      <>
        <li><RiVideoLine />Watch later</li>
        <li><MD.MdThumbUp />Liked videos</li>
      </>
    ) : (
      <>
        <li className="signin-li no-hover" >
          <p className="signin-text">Sign in to like videos, comment, and subscribe.</p>
          <Link to="/signin" className="signin-btn">
            <FontAwesomeIcon icon={faUserCircle} className="user-icon" />
            <strong>SIGN IN</strong>
          </Link>
        </li>
      </>
    )
  }

  render() {
    const { location } = this.props
    // if (location.pathname.split("/").includes("videos"))

    return (
      <nav id="side-nav">
        <nav className="left-nav">
          <button id="guide-btn">
            <FontAwesomeIcon icon={faBars} className="guide-icon"/>
          </button>
          <Link to="/" className="home-btn">
            <FontAwesomeIcon icon={faYoutube} className="logo-icon"/>
            WeTube
          </Link>
        </nav>

        <header className="side-header">
          <ul>
            <Link to="/">
              <li><TiHome />Home</li>
            </Link>
            <li><ImFire />Trending</li>
            <li><MD.MdSubscriptions />Subscriptions</li>
          </ul>

          <ul>
            <li><MD.MdVideoLibrary />Library</li>
            <li><MD.MdHistory />History</li>
            {this.subHeader()}
          </ul>
        </header>

        <footer>
          <ul className="link-footer">
            <a href="https://github.com/trieutrue/wetube" target="_blank">
              <li>
                <FaGithubSquare />Github
              </li>
            </a>
            <a href="https://www.linkedin.com/in/trieu-tran-52339a167/" target="_blank">
              <li>
                <FaLinkedin />LinkedIn
              </li>
            </a>
          </ul>

          <ul className="info-footer no-hover"> 
            <a href="https://github.com/trieutrue/wetube" target="_blank">
              <li>About Press Copyright <br />Contact us Creators <br />Advertise Developers</li>
            </a>

            <a href="https://www.linkedin.com/in/trieu-tran-52339a167/" target="_blank">
              <li>Terms Privacy Policy & Safety <br />How WeTube works <br />Test new features</li>
            </a>
          </ul>
          <h6>© 2020 WeTube</h6>
        </footer>
      </nav>
    )
  }
}


export default withRouter(SideNav);