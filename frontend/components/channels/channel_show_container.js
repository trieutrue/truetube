import { connect } from 'react-redux';
import ChannelShow from './channel_show';

const mSTP = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id]
  return {
    videos: state.entities.videos,
    currentUser: currentUser,
    user: state.entities.users[ownProps.match.params.userId]
  }
}

const mDTP = dispatch => {
  return {

  }
}

export default connect(mSTP, mDTP)(ChannelShow)