import { connect } from 'react-redux';
import { fetchVideo } from '../../actions/video_actions';
import VideoShow from './video_show';

const mSTP = (state, ownProps) => {
  return {
    video: state.videos[ownProps.match.params.reportId]
  }
}

const mDTP = dispatch => {
  return {
    fetchVideo: videoId => dispatch(fetchVideo(videoId))
  }
}

export default connect(mSTP, mDTP)(VideoShow);