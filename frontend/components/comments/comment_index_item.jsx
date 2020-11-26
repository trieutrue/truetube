import React from 'react';

export default class CommentIndexItem extends React.Component {
  componentDidMount() {
    const {fetchChildComments, parent } = this.props
    if (parent.replyIds.length) { fetchChildComments(parent.id) }
  }

  render() {
    const { parent, comments, users } = this.props
    return (
      <>
        <li>
          <div className="profile-icon"></div>
          <h5>{users[parent.authorId].channelName}</h5>
          <p>{parent.body}</p>
          <i>Like</i>
          <p>4</p>
          <i>Dislike</i>
          <button>REPLY</button> {/* onClick={renderForm} */}

          {/* if parent has children render a link to view child comments*/}
        </li>
      </>
    )
  } 
}