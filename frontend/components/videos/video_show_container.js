import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { fetchVideo } from '../../actions/video_actions';
import VideoShow from './video_show';

const mSTP = (state, ownProps) => {
  const videoId = parseInt(ownProps.match.params.videoId)
  const video = state.entities.videos[videoId];
  const user = video ? state.entities.users[video.uploaderId] : {};
  return {
    video: video,
    user: user
  }
}

const mDTP = dispatch => {
  return {
    fetchVideo: videoId => dispatch(fetchVideo(videoId)),
    openModal: modal => dispatch(openModal(modal))
  }
}

export default connect(mSTP, mDTP)(VideoShow);