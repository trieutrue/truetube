import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { TiHome } from 'react-icons/ti'
import { ImFire } from 'react-icons/im'
import { RiVideoLine } from 'react-icons/ri'
import { AiFillLike } from 'react-icons/ai'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import * as MD from 'react-icons/md'


class SideNav extends React.Component {

  subHeader() {
    const { currentUser } = this.props
    return currentUser ? (
      <>
        <li><RiVideoLine /></li>
        <li><AiFillLike /></li>
      </>
    ) : (
      <>
        <li>
          <p>Sign in to like videos, comment, and subscribe.</p>
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
    if (location.pathname.split("/").includes("videos")) return null

    return (
      <nav id="side-nav">
        <header className="side-header">
          <ul>
            <li><TiHome /></li>
            <li><ImFire /></li>
            <li><MD.MdSubscriptions /></li>
          </ul>
        </header>

        <header className="side-sub-header">
          <ul>
            <li><MD.MdVideoLibrary /></li>
            <li><MD.MdHistory /></li>
            {this.subHeader()}
          </ul>
        </header>

        <footer>
          <ul className="link-footer">
            <li><FaGithubSquare /></li>
            <li><FaLinkedin /></li>
          </ul>

          <ul className="info-foot"> 
            <li>
              <ul>
                <li>About </li>
                <li>Press</li>
                <li>Copyright</li>
                <li>Contact us</li>
                <li>Creators</li>
                <li>Advertise</li>
                <li>Developers</li>
              </ul>
              <ul>
                <li>Terms</li>
                <li>Privacy</li>
                <li>Policy & Safety</li>
                <li>How WeTube works</li>
                <li>Test new features</li>
              </ul>
            </li>
            <li>© 2020 WeTube</li>
          </ul>
        </footer>
      </nav>
    )
  }
}


export default withRouter(SideNav);