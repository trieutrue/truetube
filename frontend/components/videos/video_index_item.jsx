import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const VideoIndexItem = ({ video }) => {
  return (
    <li>
      <video src={video.videoUrl} className="vid-thumbnail" control></video>
      <p>{video.title}</p>
      {/* <Link to={`/channel/${user.id}`}>{user.channelName}</Link> */}
      <p>channel name</p>
      <div className="row">
        <p>123K views</p>
        <p>{video.createdAt}</p>
      </div>
    </li>
  )
}

export default VideoIndexItem;