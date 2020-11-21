import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

const VideoIndexItem = ({ video, user}) => {
  return (
    <li>
      <Link to={`/videos/${video.id}`} >  
        <video src={video.videoUrl} className="vid-thumbnail" ></video>
        <p>{video.title}</p>
        {/* <Link to={`/channel/${user.id}`}>{user.channelName}</Link> */}
        <p>{user.channelName}</p>
        <div className="row">
          <p>123K views</p>
          <i>•</i>
          <p>{video.createdAt}</p>
        </div>
      </Link>
    </li>
  )
}

export default VideoIndexItem;