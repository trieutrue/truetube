import { connect } from 'react-redux';
import { fetchVideos } from '../../actions/video_actions';
import { fetchUser } from '../../actions/user_actions';
import ChannelShow from './channel_show';

const mSTP = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id]
  debugger
  return {
    videos: state.entities.videos,
    currentUser: currentUser,
    user: state.entities.users[ownProps.match.params.userId]
  }
}

const mDTP = dispatch => {
  return {
    fetchVideos: () => dispatch(fetchVideos()),
    fetchUser: userId => dispatch(fetchUser(userId))
  }
}

export default connect(mSTP, mDTP)(ChannelShow)