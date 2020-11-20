import { connect } from 'react-redux';
import SideNav from './side_nav';


const mSTP = state => {
  const currentUser = state.entities.users[state.session.id]
  return {
    currentUser: currentUser
  };
};

export default connect(mSTP)(SideNav)