import { connect } from 'react-redux';
import { fetchVideo } from '../../actions/video_actions';
import VideoShow from './video_show';

const mSTP = (state, ownProps) => {
  const videoId = parseInt(ownProps.match.params.videoId)
  const video = state.entities.videos[videoId] || {};
  const user = state.entities.users[video.uploaderId] || {};
  debugger
  return {
    video: video,
    user: user
  }
}

const mDTP = dispatch => {
  return {
    fetchVideo: videoId => dispatch(fetchVideo(videoId))
  }
}

export default connect(mSTP, mDTP)(VideoShow);