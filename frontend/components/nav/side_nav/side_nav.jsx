import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { TiHome } from 'react-icons/ti'
import { ImFire } from 'react-icons/im'
import { RiVideoLine } from 'react-icons/ri'
import { FaAngellist, FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import * as MD from 'react-icons/md'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons';


class SideNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = { collapsed: false }
  }

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
            <FontAwesomeIcon icon={faUserCircle} className="profile-icon" />
            <strong>SIGN IN</strong>
          </Link>
        </li>
      </>
    )
  }

  handleGuideBtn(e) {
    const { location } = this.props
    if (location.pathname.split('/').includes('watch')) {
      this.props.closeModal()
    } else {
      const videoIndex = document.getElementById("video-index")
      debugger
      !this.state.collapsed ? videoIndex.className = "collapsed" : videoIndex.className = ""
      this.state.collapsed ? this.setState({ collapsed: false }) : this.setState({ collapsed: true })
    }
  }

  renderInfoFooter() {
    return this.state.collapsed ? null : (
      <>
        <ul className="info-footer no-hover"> 
          <a href="https://angel.co/u/trieutran" target="_blank">
            <li>About Press Copyright <br />Contact us Creators <br />Advertise Developers</li>
          </a>

          <a href="https://www.linkedin.com/in/trieutrue/" target="_blank">
            <li>Terms Privacy Policy & Safety <br />How TrueTube works <br />Test new features</li>
          </a>
        </ul>

        <a href="https://github.com/trieutrue/truetube" target="_blank">
          <h6>© 2021 TrueTube</h6>
        </a>
      </>
    )
  }

  render() {
    const navClass = this.state.collapsed ? "collapsed" : "";
    const likedTitle = this.state.collapsed ? "Liked" : "Liked videos"
    return (
      <nav className={navClass} id="side-nav">
        <nav className="left-nav">
          <button id="guide-btn" onClick={this.handleGuideBtn.bind(this)}>
            <FontAwesomeIcon icon={faBars} className="guide-icon"/>
          </button>
          <Link to="/" className="home-btn">
            <FontAwesomeIcon icon={faYoutube} className="logo-icon"/>
            TrueTube
          </Link>
        </nav>

        <header className="side-header">
          <ul>
            <Link to="/">
              <li><TiHome />Home</li>
            </Link>
            <li><MD.MdThumbUp />{likedTitle}</li> 
            {/* update filters */}
            {/* <li><ImFire />Trending</li> */}
            {/* <li><MD.MdSubscriptions />Subscriptions</li> */}
          </ul>

          {/* <ul>
            <li><MD.MdVideoLibrary />Library</li>
            <li><MD.MdHistory />History</li>
            {this.subHeader()}
          </ul> */}
        </header>

        <footer>
          <ul className="link-footer">
            <a href="https://github.com/trieutrue/TrueTube" target="_blank">
              <li>
                <FaGithubSquare />GitHub
              </li>
            </a>
            <a href="https://www.linkedin.com/in/trieutrue/" target="_blank">
              <li>
                <FaLinkedin />LinkedIn
              </li>
            </a>
            <a href="https://angel.co/u/trieutran" target="_blank">
              <li>
                <FaAngellist />AngelList
              </li>
            </a>
          </ul>

          {this.renderInfoFooter()}
        </footer>
      </nav>
    )
  }
}


export default withRouter(SideNav);