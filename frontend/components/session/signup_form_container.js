import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: 'signup'
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: formUser => dispatch(signup(formUser))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);