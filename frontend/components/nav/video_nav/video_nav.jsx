import React from 'react';
import { formatVideoShowDate } from '../../../util/date_util'

const VideoNav = ({ video, user }) => {

  return (
    <>
      <div className="video-nav">
        <h1>{video.title}</h1> 
        <div className="row">
            <div className="left-row">
              <p>123K views</p>
              <i>•</i>
              <p>{formatVideoShowDate(video.createdAt)}</p>
            </div>

            <div className="right-row">
              <i>Thumbs up</i>
              <i>Thumbs down</i>
              <i>SHARE</i>
              <i>SAVE</i>
              <i>...</i>
            </div>
        </div>
      </div>

      <div className="info-box">
        <div className="row">
          <div className="left-row">
            <div className="user-icon"></div>
            <div className="column">
              <p>{user.channelName}</p>
              <p>660K subscribers</p>
            </div>
          </div>

          <div className="right-row">
            <button className="subscribe-btn">SUBSCRIBE</button>
          </div>

        </div>
      </div>


    </>
  )
}

export default VideoNav;