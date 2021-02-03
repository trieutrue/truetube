import { connect } from 'react-redux';
import CommentIndexItem from './comment_index_item';
import { 
  fetchChildComments,
  createChildComment,
  updateComment,
  deleteComment
} from '../../actions/comment_actions';

import { 
  fetchCommentVotes, 
  createCommentVote, 
  updateVote, 
  deleteVote 
} from '../../actions/vote_actions';

const mSTP = state => {
  return {
    users: state.entities.users,
    currentUser: state.entities.users[state.session.id],
    votes: state.entities.votes
  }
}

const mDTP = dispatch => {
  return {
    fetchChildComments: commentId => dispatch(fetchChildComments(commentId)),
    createChildComment: (commentId, comment) => dispatch(createChildComment(commentId, comment)),
    updateComment: comment => dispatch(updateComment(comment)),
    deleteComment: commentId => dispatch(deleteComment(commentId)),
    fetchCommentVotes: commentId => dispatch(fetchCommentVotes(commentId)),
    createCommentVote: (commentId, vote) => dispatch(createCommentVote(commentId, vote)),
    updateVote: vote => dispatch(updateVote(vote)),
    deleteVote: voteId => dispatch(deleteVote(voteId))
  }
}

export default connect(mSTP, mDTP)(CommentIndexItem)