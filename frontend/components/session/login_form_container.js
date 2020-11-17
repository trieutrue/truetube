import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mStP = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: 'signin'
  };
};

const mDtP = (dispatch, ownProps) => {
  return {
    processForm: formUser => dispatch(login(formUser))
  };
};

export default connect(mStP, mDtP)(SessionForm);