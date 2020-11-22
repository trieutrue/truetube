import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { formatVideoIndexDate } from '../../util/date_util'

const VideoIndexItem = ({ video, user, location, currentUser, openModal, deleteVideo }) => {
  let editBtns; 
  if (location.pathname === `/channel/${user.id}/videos` && 
    video.uploaderId === currentUser.id) {
      editBtns = (
      <>
        <button className="update-btn" onClick={() => openModal('edit')}>Update</button>
        <button className="delete-btn" onClick={() => deleteVideo(video.id)}>Delete</button>
      </>
      )
    } else editBtns = null
  


  
  return (
    <li>
      <Link to={`/videos/${video.id}`} >  
        <video className="vid-thumbnail" >
          <source src={video.videoUrl} tpe="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
        <p>{video.title}</p>
        {/* <Link to={`/channel/${user.id}`}>{user.channelName}</Link> */}
        {location.pathname.split("/").includes("channel") ? null : <p>{user.channelName}</p> }
        <div className="row">
          <p>123K views</p>
          <i>•</i>
          <p>{formatVideoIndexDate(video.createdAt, Date.now())}</p>
        </div>
        {editBtns}
      </Link>
    </li>
  )
}

export default VideoIndexItem;