import { connect } from 'react-redux';
import { fetchVideos } from '../../actions/video_actions';
import ChannelShow from './channel_show';

const mSTP = (state, ownProps) => {
  debugger
  const currentUser = state.entities.users[state.session.id]
  return {
    videos: state.entities.videos,
    currentUser: currentUser,
    user: state.entities.users[ownProps.match.params.userId]
  }
}

const mDTP = dispatch => {
  return {
    fetchVideos: () => dispatch(fetchVideos())
  }
}

export default connect(mSTP, mDTP)(ChannelShow)