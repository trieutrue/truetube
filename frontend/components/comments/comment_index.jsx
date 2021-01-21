import React from 'react';
import { withRouter } from 'react-router-dom';
import CommentIndexItem from './comment_index_item';
import { FaUserCircle } from 'react-icons/fa'

class CommentIndex extends React.Component {
  constructor(props) {
    super(props); 
    this.state = { body: "" }

    this.handleBody = this.handleBody.bind(this)
    this.handleVideoComment = this.handleVideoComment.bind(this)
    this.verifyLogin = this.verifyLogin.bind(this)
  }

  componentDidMount() {
    const { video, fetchVideoComments } = this.props
    fetchVideoComments(video.id)
  }

  componentDidUpdate(prevProps) {
    const { video, fetchVideoComments, match } = this.props
    if (prevProps.match.url !== match.url) {
      fetchVideoComments(video.id)
    }
  }

  renderBtns(e) {
    e.stopPropragation();
    return (
      <div className="btn-container">
        <button>CANCEL</button>
        <button className="blue-btn">COMMENT</button>
      </div>
    )
  }

  handleBody(e) {
    this.setState({ body: e.currentTarget.value})
  }

  handleVideoComment(e) {
    e.preventDefault();
    const { video, createVideoComment } = this.props
    this.setState({ body: "" })
    createVideoComment(video.id, this.state)
  }

  verifyLogin() {
    const { currentUser, history } = this.props
    return currentUser ? null : history.push('/signin')
  }

  render() {
    const { 
      comments, 
      users, 
      fetchChildComments, 
      createChildComment,
      updateComment,
      deleteComment,
      currentUser,
      video 
    } = this.props 

    const listItems = [...comments].reverse()
      .filter(comment => comment.videoId === video.id)
      .map(comment => {
        return (
          <CommentIndexItem 
            parent={comment}
            comments={comments} 
            users={users} 
            fetchChildComments={fetchChildComments}
            createChildComment={createChildComment}
            updateComment={updateComment}
            deleteComment={deleteComment}
            currentUser={currentUser}
            key={`comment${comment.id}`}
          />
        )
    })

    const disabled = this.state.body ? false : true
    return (
      <div key={`video-comments-${video.id}`} className="comments-container">
        <h3>{listItems.length} Comments</h3>
        <form onSubmit={this.handleVideoComment} onClick={this.verifyLogin}>
        <div className="row body-input">
          <FaUserCircle className="profile-icon" />
          <input type="text" 
            value={this.state.body} 
            onChange={this.handleBody}
            // onClick={this.renderBtns}
            placeholder="Add a public comment..."/>
        </div>
          <div className="btn-container"> 
            {/* <button>CANCEL</button>  refactor to have a click handler*/ }
            <button className="blue-btn" disabled={disabled}>COMMENT</button>
          </div>
        </form>

        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
}

export default withRouter(CommentIndex);