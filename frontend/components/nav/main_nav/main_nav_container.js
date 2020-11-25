import { connect } from 'react-redux';
import MainNav from './main_nav';
import { logout } from '../../../actions/session_actions'
import { openModal } from '../../../actions/modal_actions';

const mSTP = state => {
  const currentUser = state.entities.users[state.session.id]
  return {
    currentUser: currentUser
  };
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(MainNav)