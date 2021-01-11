import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { 
  fetchVideoComments,
  fetchChildComments,
  createVideoComment,
  createChildComment,
  updateComment,
  deleteComment
} from '../../actions/comment_actions';

const mSTP = (state, ownProps) => {
  return {
    comments: Object.values(state.entities.comments),
    users: state.entities.users,
    video: state.entities.videos[ownProps.match.params.videoId],
    currentUser: state.entities.users[state.session.id]
  }
}

const mDTP = dispatch => {
  return {
    fetchVideoComments: videoId => dispatch(fetchVideoComments(videoId)),
    fetchChildComments: commentId => dispatch(fetchChildComments(commentId)),
    createVideoComment: (videoId, comment) => dispatch(createVideoComment(videoId, comment)),
    createChildComment: (commentId, comment) => dispatch(createChildComment(commentId, comment)),
    updateComment: comment => dispatch(updateComment(comment)),
    deleteComment: commentId => dispatch(deleteComment(commentId))
  }
}

export default connect(mSTP, mDTP)(CommentIndex)