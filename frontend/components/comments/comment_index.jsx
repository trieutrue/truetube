import React from 'react';
import CommentIndexItem from './comment_index_item';

export default class CommentIndex extends React.Component {
  constructor(props) {
    super(props); 
    this.state = { body: "" }

    this.handleBody = this.handleBody.bind(this)
    this.handleVideoComment = this.handleVideoComment.bind(this)
  }

  componentDidMount() {
    const {video, fetchVideoComments } = this.props
    fetchVideoComments(video.id)
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
    createVideoComment(video.id, this.state)
  }

  render() {
    const { 
      comments, 
      users, 
      fetchChildComments, 
      createChildComment,
      updateComment,
      deleteComment,
      currentUser 
    } = this.props

    const listItems = comments.map(comment => {
      if (comment.parentCommentId) continue;

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
        />
      )
    })


    return (
      <>
        <h3>3,735 Comments placeholder</h3>
        <form onSubmit={this.handleVideoComment}> {/* onClick={ensure_login} */}
        <div className="row">
          <div className="profile-icon">{}</div>
          <input type="text" 
            value={this.state.body} 
            onChange={this.handleBody}
            // onClick={this.renderBtns}
            placeholder="Add a public comment..."/>
        </div>
          <div className="btn-container">
            <button>CANCEL</button>
            <button className="blue-btn">COMMENT</button>
          </div>
        </form>

        <ul>
          {listItems}
        </ul>
      </>
    );
  }
}