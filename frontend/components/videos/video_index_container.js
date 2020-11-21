import { connect } from 'react-redux';
import VideoIndex from './video_index';
import { fetchVideos } from '../../actions/video_actions';

const mSTP = state => {
  return {
    videos: Object.values(state.entities.videos),
    users: state.entities.users
  }
}

const mDTP = dispatch => {
  return {
    fetchVideos: () => dispatch(fetchVideos())
  }
}

export default connect(mSTP, mDTP)(VideoIndex)