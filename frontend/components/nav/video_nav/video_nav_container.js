import { connect } from 'react-redux';
import VideoNav from './video_nav';
import { 
  fetchVideoVotes,
  createVideoVote,
  updateVote,
  deleteVote
} from '../../../actions/vote_actions';
import { openModal } from '../../../actions/modal_actions';

const mSTP = state => ({
  currentUser: state.entities.users[state.session.id],
  votes: state.entities.votes
})

const mDTP = dispatch => {
  return {
    fetchVideoVotes: videoId => dispatch(fetchVideoVotes(videoId)),
    createVideoVote: (videoId, vote) => dispatch(createVideoVote(videoId, vote)),
    updateVote: vote => dispatch(updateVote(vote)),
    deleteVote: voteId => dispatch(deleteVote(voteId)),
    openModal: modal => dispatch(openModal(modal))
  }
}

export default connect(mSTP, mDTP)(VideoNav)