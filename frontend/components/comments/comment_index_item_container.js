import { connect } from 'react-redux';
import CommentIndexItem from './comment_index_item';
import { 
  fetchChildComments,
  createChildComment,
  updateComment,
  deleteComment
} from '../../actions/comment_actions';

const mSTP = state => {
  return {
    users: state.entities.users,
    currentUser: state.entities.users[state.session.id]
  }
}

const mDTP = dispatch => {
  return {
    fetchChildComments: commentId => dispatch(fetchChildComments(commentId)),
    createChildComment: (commentId, comment) => dispatch(createChildComment(commentId, comment)),
    updateComment: comment => dispatch(updateComment(comment)),
    deleteComment: commentId => dispatch(deleteComment(commentId))
  }
}

export default connect(mSTP, mDTP)(CommentIndexItem)