import { connect } from 'react-redux';
import VideoNav from './video_nav';
import { 
  fetchVideoVotes,
  createVideoVote,
  updateVote,
  deleteVote
} from '../../../actions/vote_actions';

const mSTP = state => ({
  currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => {
  return {
    fetchVideoVotes: videoId => dispatch(fetchVideoVotes(videoId)),
    createVideoVote: (videoId, vote) => dispatch(createVideoVote(videoId, vote)),
    updateVote: vote => dispatch(updateVote(vote)),
    deleteVote: voteId => dispatch(deleteVote(voteId))
  }
}

export default connect(mSTP, mDTP)(VideoNav)