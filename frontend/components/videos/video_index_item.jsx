import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { formatDate } from '../../util/format_util';
import { FaUserCircle } from 'react-icons/fa';

const VideoIndexItem = ({ video, user, location, currentUser, openModal, deleteVideo, match }) => {
  if (!video) return null;
  let editBtns;
  let videoInfoDiv;
  if (location.pathname === `/channel/${user.id}/videos` && 
    currentUser && video.uploaderId === currentUser.id) {
      editBtns = (
      <>
        <button className="update-btn" onClick={() => openModal('edit')}>Update</button>
        <button className="delete-btn" onClick={() => deleteVideo(video.id)}>Delete</button>
      </>
      )
      videoInfoDiv = (
        <div className="video-info">
          <p className="video-title">{video.title}</p>
          <div className="row">
            {/* <p>123K views</p>
            <i className="dot">•</i> */}
            <p>{formatDate(video.createdAt, Date.now())}</p>
          </div>
          <Link to={`/channel/${user.id}/featured`} className="channel row">
            <FaUserCircle className="profile-icon" />
            <p>{user.channelName}</p>
          </Link>
          <p>{video.description}</p>
        </div>
      )
    } else if (match.path === "/results" || 
      match.path === "/channel/:userId/videos" || 
      match.path === "/playlist/liked") {
      videoInfoDiv = (
        <div className="video-info">
          <p className="video-title">{video.title}</p>
          <div className="row">
            {/* <p>123K views</p>
            <i className="dot">•</i> */}
            <p>{formatDate(video.createdAt, Date.now())}</p>
          </div>
          <Link to={`/channel/${user.id}/featured`} className="channel row">
            <FaUserCircle className="profile-icon" />
            <p>{user.channelName}</p>
          </Link>
          <p>{video.description}</p>
        </div>
      )
    } else {
      editBtns = null
      videoInfoDiv = (
        <div className="video-info">
          {/* {location.pathname.split("/").includes("channel") ?
            null :} */}
          <FaUserCircle className="profile-icon"/>
          <div className="info-box">
            <p className="video-title">{video.title}</p>
            {/* <Link to={`/channel/${user.id}`}>{user.channelName}</Link> */}
            {/* {location.pathname.split("/").includes("channel") ? 
              null : } */}
            <p>{user.channelName}</p> 
            <div className="row">
              {/* <p>123K views</p> */}
              {/* <i className="dot">•</i> */}
              <p>{formatDate(video.createdAt, Date.now())}</p>
            </div>
          </div>
        </div>        
      )
    }
  
  const toggleAutoPlay = (e) => {
    const videoThumbNail = e.currentTarget.getElementsByClassName('vid-thumbnail')[0]
    if (e.type === "mouseover") {
      videoThumbNail
    } else if (e.type === "mouseleave") {
      videoThumbNail.currentTime = 0
      videoThumbNail
    }
  }

  
  return (
    <li onMouseOver={toggleAutoPlay} onMouseLeave={toggleAutoPlay}>
      <Link to={`/watch/${video.id}`} >  
        <video muted preload="true" loop key={`video-${video.id}`} className="vid-thumbnail" >
          <source src={video.videoUrl} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
        {videoInfoDiv}
        {editBtns}
      </Link>
    </li>
  )
}

export default VideoIndexItem;