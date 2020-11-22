import { connect } from 'react-redux';
import VideoIndex from './video_index';
import { fetchVideos, deleteVideo } from '../../actions/video_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = state => {
  return {
    videos: Object.values(state.entities.videos),
    users: state.entities.users,
    currentUser: state.entities.users[state.session.id]
  }
}

const mDTP = dispatch => {
  return {
    fetchVideos: () => dispatch(fetchVideos()),
    openModal: modal => dispatch(openModal(modal)),
    deleteVideo: videoId => dispatch(deleteVideo(videoId))
  }
}

export default connect(mSTP, mDTP)(VideoIndex)