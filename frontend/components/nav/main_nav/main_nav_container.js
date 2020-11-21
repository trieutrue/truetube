import { connect } from 'react-redux';
import MainNav from './main_nav';
import { logout } from '../../../actions/session_actions'

const mSTP = (state, ownProps) => {
  debugger
  const currentUser = state.entities.users[state.session.id]
  return {
    currentUser: currentUser
  };
};

const mDTP = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mSTP, mDTP)(MainNav)