import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { 
  fetchVideoComments,
  createVideoComment,
} from '../../actions/comment_actions';

const mSTP = (state, ownProps) => {
  return {
    comments: Object.values(state.entities.comments),
    video: state.entities.videos[ownProps.match.params.videoId],
    currentUser: state.entities.users[state.session.id]
  }
}

const mDTP = dispatch => {
  return {
    fetchVideoComments: videoId => dispatch(fetchVideoComments(videoId)),
    createVideoComment: (videoId, comment) => dispatch(createVideoComment(videoId, comment))
  }
}

export default connect(mSTP, mDTP)(CommentIndex)