import React from 'react';
import { Link } from 'react-router-dom'
import { formatVideoShowDate } from '../../../util/date_util'
import * as MD from 'react-icons/md'
import { IoMdShareAlt } from 'react-icons/io'

class VideoNav extends React.Component {
  constructor(props) {
    super(props);
    this.handleCreateVote = this.handleCreateVote.bind(this)
    this.handleUpdateVote = this.handleUpdateVote.bind(this)
    this.handleDeleteVote = this.handleDeleteVote.bind(this)
  }
  currentUsersVote() {
    const { currentUser, video } = this.props
    if (currentUser.upvotedVideoIds.includes(video.id)) {
      return (
        <>
          <button className="voted" onClick={this.handleDeleteVote}>
            <li><MD.MdThumbUp />{video.upvotes}</li>
          </button>
          <button onClick={this.handleUpdateVote("downvote")}>
            <li><MD.MdThumbDown />{video.downvotes}</li>
          </button>
        </>
      ) 
    } else if (currentUser.downvotedVideoIds.includes(video.id)) {
      return (
        <>
          <button onClick={this.handleUpdateVote("upvote")}>
            <li><MD.MdThumbUp />{video.upvotes}</li>
          </button>
          <button  className="voted" onClick={this.handleDeleteVote}>
            <li><MD.MdThumbDown />{video.downvotes}</li>
          </button>
        </>
      )
    } else {
      return (
        <>
          <button onClick={this.handleCreateVote("upvote")}>
            <li><MD.MdThumbUp />{video.upvotes}</li>
          </button>
          <button onClick={this.handleCreateVote("downvote")}>
            <li><MD.MdThumbDown />{video.downvotes}</li>
          </button>
        </>        
      )
    }
  }

  handleCreateVote(type) {
    const { createVideoVote } = this.props
    return e => {
      createVideoVote
      debugger
    }
  }

  handleUpdateVote(type) {
    const { updateVote } = this.props
    return e => {
      updateVote
      debugger
    }
  }

  handleDeleteVote(e) {
    const { deleteVote } = this.props
    debugger
  }

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
                    {this.currentUsersVote.bind(this)()}
                  </div >
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