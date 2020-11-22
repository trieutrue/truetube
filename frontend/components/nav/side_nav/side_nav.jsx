import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { TiHome } from 'react-icons/ti'
import { ImFire } from 'react-icons/im'
import { RiVideoLine } from 'react-icons/ri'
import { AiFillLike } from 'react-icons/ai'
import * as MD from 'react-icons/md'


class SideNav extends React.Component {

  subHeader() {
    const { currentUser } = this.props
    return currentUser ? (
      <>
        <RiVideoLine />
        <AiFillLike />
      </>
    ) : (
      <>
        <li>
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
          <TiHome />
          <ImFire />
          <MD.MdSubscriptions />
        </header>

        <header className="side-body">
          <MD.MdVideoLibrary />
          <MD.MdHistory />
          {this.subHeader()}
        </header>

        <footer>

        </footer>
      </nav>
    )
  }
}


export default withRouter(SideNav);