import { connect } from 'react-redux';
import ChannelShow from './channel_show';

const mSTP = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id]
  return {
    videos: state.videos,
    currentUser: currentUser,
  }
}

const mDTP = dispatch => {
  return {

  }
}

export default connect(mSTP, mDTP)(ChannelShow)