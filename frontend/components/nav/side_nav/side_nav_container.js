import { connect } from 'react-redux';
import SideNav from './side_nav';
import { closeModal } from '../../../actions/modal_actions';


const mSTP = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id]
  return {
    currentUser: currentUser
  };
};

const mDTP = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mSTP, mDTP)(SideNav)