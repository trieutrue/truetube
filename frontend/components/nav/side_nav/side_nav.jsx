import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const SideNav = ({ location }) => {
  debugger
  if (location.pathname.split("/").includes("videos")) return null
  return (
    <nav id="side-nav">
      <p>Side Nav</p>
    </nav>
  )
}

export default withRouter(SideNav);