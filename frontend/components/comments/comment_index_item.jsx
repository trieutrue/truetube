import React from 'react';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import * as MD from 'react-icons/md';

export default class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.parent, hidden: true }

    this.handleEdit = this.handleEdit.bind(this)
    this.handleBody = this.handleBody.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.optionsDropMenu = this.optionsDropMenu.bind(this)
  }

  componentDidMount() {
    const {fetchChildComments, parent } = this.props
    if (parent.replyIds.length) { fetchChildComments(parent.id) }
  }

  
  handleDropMenu(e) {
    e.stopPropagation();
    e.preventDefault();
    const dropMenu = e.currentTarget.lastElementChild
    if (dropMenu.style.display === "none") {
      dropMenu.style.display = "block"
    } else {
      dropMenu.style.display = "none"
    }
    return document.addEventListener("click", (event) => {
      dropMenu.style.display = "none"
    });
  }

  handleEdit(e) {
    this.prevState = this.state
    if (this.state.hidden) {
      this.setState({ hidden: false })
    } else {
      this.setState({ hidden: true })
    }
  }
  
  handleBody(e) {
    this.setState({ body: e.currentTarget.value })
  }

  handleCancel(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ hidden: true, body: this.prevState.body })
  }
  
  handleDelete(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.deleteComment(this.state.id)
  }
  
  handleUpdate(e) {
    e.preventDefault();
    e.stopPropagation();
    const { updateComment } = this.props
    updateComment(this.state)
  }

  optionsDropMenu() {
    const { parent, currentUser } = this.props
    return currentUser && currentUser.id === parent.authorId ? (
      <ul className="comment-dropdown">
        <li onClick={this.handleEdit}>EDIT</li>
        <li onClick={this.handleDelete}>DELETE</li>
      </ul>
    ) : (
      <ul className="comment-dropdown">
        <li>REPORT</li>
      </ul>
    )
      
  }

  render() {
    const { parent, comments, users, currentUser } = this.props
    // let displayed = false;
    // if ( currentUser ) {
    //   displayed = parent.authorId !== currentUser.id
    // }
    const edited = parent.createdAt !== parent.updatedAt ? <span>(edited)</span> : null
    return (
      <>
        <li>
          <div className="profile-icon"></div>
          <div className="column">
            <h5 className="channel-name">{users[parent.authorId].channelName} {edited}</h5>
            <div className="row">
              {/* <p>{parent.body}</p> */}
              <form onSubmit={this.handleUpdate}>
                <textarea type="text"
                  disabled={this.state.hidden}
                  value={this.state.body}
                  onChange={this.handleBody}
                  className="comment-body">
                </textarea>

                <button onClick={this.handleCancel} hidden={this.state.hidden}>CANCEL</button>
                <button className="blue-btn" hidden={this.state.hidden} onClick={this.handleEdit}>SAVE</button>
              </form>
              <button onClick={this.handleDropMenu} className="comment-options">
                <HiOutlineDotsVertical />
                {this.optionsDropMenu()}
              </button>
            </div>

            <div className="row">
              <MD.MdThumbUp />
              <p>4</p>
              <MD.MdThumbDown />
              <button>REPLY</button> {/* onClick={renderForm} */}
            </div>
          </div>

          {/* if parent has children render a link to view child comments*/}
        </li>
      </>
    )
  } 
}