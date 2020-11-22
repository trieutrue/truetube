import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { formatVideoIndexDate } from '../../util/date_util'

const VideoIndexItem = ({ video, user, location }) => {
  const editBtns = (location.pathname === `/channel/${user.id}/videos` && video.uploaderId === currentUser.id) ? (
    <>
      <button className="update-btn"></button>
      <button className="delete-btn"></button>
    </>
  ) : (
    null
  )


  
  return (
    <li>
      <Link to={`/videos/${video.id}`} >  
        <video src={video.videoUrl} className="vid-thumbnail" ></video>
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