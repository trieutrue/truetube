import React from 'react';
import { Link } from 'react-router-dom'
import { formatVideoShowDate } from '../../../util/date_util'
import * as MD from 'react-icons/md'
import { IoMdShareAlt } from 'react-icons/io'

class VideoNav extends React.Component {
  render() {
    const { video, user } = this.props

    return (
      <>
        <div className="video-nav">
          <h1>{video.title}</h1> 
          <div className="row nav-bar">
              <div className="left-row">
                <p>123,285 views</p>
                <i className="dot">•</i>
                <p>{formatVideoShowDate(video.createdAt)}</p>
              </div>

              <div className="right-row">
                <ul>
                  <div className="likes">
                    <li><MD.MdThumbUp />{video.upvotes}</li>
                    <li><MD.MdThumbDown />{video.downvotes}</li>
                  </div>
                  <li><IoMdShareAlt />SHARE</li>
                  <li><MD.MdPlaylistAdd />SAVE</li>
                  <li><MD.MdMoreHoriz /></li>
                </ul>
              </div>
          </div>
        </div>

        <div className="info-box">
          <div className="row">
            <div className="left-row">
              <Link to={`/channel/${user.id}/featured`}><div className="profile-icon">{user.channelName[0]}</div></Link>
              <div className="column">
                <Link to={`/channel/${user.id}/featured`}><h6>{user.channelName}</h6></Link>
                <p>660K subscribers</p>
              </div>
            </div>

            <button className="subscribe-btn">SUBSCRIBE</button>
          </div>
          <p className="description">{video.description}</p>
        </div>


      </>
    )
  }
}

export default VideoNav;