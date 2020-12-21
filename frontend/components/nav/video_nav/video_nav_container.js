import { connect } from 'react-redux';
import VideoNav from './video_nav';
import { 
  createVideoVote,
  updateVote,
  deleteVote
} from '../../../actions/video_actions';

const mSTP = state => ({
  currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => {
  return {
    createVideoVote: (videoId, vote) => dispatch(createVideoVote(videoId, vote)),
    updateVote: vote => dispatch(updateVote(vote)),
    deleteVote: voteId => dispatch(deleteVote(voteId))
  }
}

export default connect(mSTP, mDTP)(VideoNav)