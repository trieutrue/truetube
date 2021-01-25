import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import { formatVideoShowDate } from '../../../util/format_util';
import * as MD from 'react-icons/md'
import { IoMdShareAlt } from 'react-icons/io'
import { FaUserCircle } from 'react-icons/fa'

class VideoNav extends React.Component {
  constructor(props) {
    super(props);
    this.handleCreateVote = this.handleCreateVote.bind(this)
    this.handleUpdateVote = this.handleUpdateVote.bind(this)
    this.handleDeleteVote = this.handleDeleteVote.bind(this)
  }

  componentDidMount() {
    const { video, fetchVideoVotes } = this.props
    fetchVideoVotes(video.id)
  }

  componentDidUpdate(prevProps) {
    const { video, fetchVideoVotes, match } = this.props

    if (prevProps.match.url !== match.url) {
      fetchVideoVotes(video.id)
    }
  }

  currentUsersVote() {
    const { currentUser, video, votes } = this.props

    if (!currentUser) return (
      <>
        <button onClick={() => this.props.history.push('/signin')}>
          <li><MD.MdThumbUp />{video.upvoteCount}</li>
        </button>
        <button onClick={() => this.props.history.push('/signin')}>
          <li><MD.MdThumbDown />{video.downvoteCount}</li>
        </button>
      </>        
    )

    let vote;
    currentUser.voteIds.forEach(voteId => {
      if (votes[voteId] && votes[voteId].votableId === video.id) {
        vote = votes[voteId]
      }
    })

    if (!vote) return (
      <>
        <button onClick={this.handleCreateVote("upvote")}>
          <li><MD.MdThumbUp />{video.upvoteCount}</li>
        </button>
        <button onClick={this.handleCreateVote("downvote")}>
          <li><MD.MdThumbDown />{video.downvoteCount}</li>
        </button>
      </>        
    )

    switch (vote.isUpvoted) {
      case true:
        return (
          <>
            <button className="voted" onClick={this.handleDeleteVote(vote.id)}>
              <li><MD.MdThumbUp />{video.upvoteCount}</li>
            </button>
            <button onClick={this.handleUpdateVote(vote, "downvote")}>
              <li><MD.MdThumbDown />{video.downvoteCount}</li>
            </button>
          </>
        )
      case false:
        return (
          <>
            <button onClick={this.handleUpdateVote(vote, "upvote")}>
              <li><MD.MdThumbUp />{video.upvoteCount}</li>
            </button>
            <button  className="voted" onClick={this.handleDeleteVote(vote.id)}>
              <li><MD.MdThumbDown />{video.downvoteCount}</li>
            </button>
          </>
        )
    }
  }

  handleCreateVote(type) {
    const { createVideoVote, video } = this.props
    return e => {
      if (type === "upvote") {
        createVideoVote(video.id, { isUpvoted: true })
      } else if ( type === "downvote") {
        createVideoVote(video.id, { isUpvoted: false })
      } 
    }
  }

  handleUpdateVote(vote, type) {
    const { updateVote } = this.props
    return e => {
      if (type === "upvote") {
        vote.isUpvoted = true
        updateVote(vote)
      } else if (type === "downvote") {
        vote.isUpvoted = false
        updateVote(vote)
      } 
    } 
  }

  handleDeleteVote(voteId) {
    return () => this.props.deleteVote(voteId)
  }

  handleDeleteVideo(videoId) {
    const { deleteVideo, history } = this.props
    return e => {
      e.preventDefault()
      history.push("/")
      deleteVideo(videoId)
    }
  }
 
  renderBtns() {
    const { currentUser, video, openModal } = this.props
    if ( !video || !currentUser || !video.id ) return null
    return currentUser.id === video.uploaderId ? (
      <div className="right-row">
        <button onClick={() => openModal('edit')}>EDIT</button>
        <button onClick={this.handleDeleteVideo(video.id)}>DELETE</button>
      </div>
    ) : null
  }

  render() {
    const { video, user } = this.props

    return (
      <>
        <div className="video-nav">
          <h1>{video.title}</h1> 
          <div className="row nav-bar">
              <div className="left-row">
                {/* <p>123,285 views</p>
                <i className="dot">•</i> */}
                <p>{formatVideoShowDate(video.createdAt)}</p>
              </div>

              <div className="right-row">
                <ul>
                  <form className="likes">
                    {this.currentUsersVote.bind(this)()}
                  </form >
                  {/* <li><IoMdShareAlt />SHARE</li>
                  <li><MD.MdPlaylistAdd />SAVE</li>
                  <li><MD.MdMoreHoriz /></li> */}
                </ul>
              </div>
          </div>
        </div>

        <div className="info-box">
          <div className="row">
            <div className="left-row">
              {/* <Link to={`/channel/${user.id}/featured`}> */}
                <FaUserCircle className="profile-icon" />
              {/* </Link> */}
              <div className="column">
                {/* <Link to={`/channel/${user.id}/featured`}> */}
                  <h6>{user.channelName}</h6>
                {/* </Link> */}
                {/* <p>660K subscribers</p> */}
              </div>
            </div>

            {this.renderBtns()}
          </div>
          <p className="description">{video.description}</p>
        </div>


      </>
    )
  }
}

export default withRouter(VideoNav);