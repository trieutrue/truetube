import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import UploadFormContainer from '../videos/upload_form_container'
import SideNavContainer from '../nav/side_nav/side_nav_container';

const Modal = ({ modal, closeModal, loggedIn, location }) => {
  if (!modal) {
    return null;
  }

  switch (modal) {
    case 'upload':
      return loggedIn ? (
        <div className="modal-background" onClick={closeModal}>
          <div className="modal-child" onClick={e => e.stopPropagation()}>
            <UploadFormContainer />
          </div>
        </div>
        ) : (
        <Redirect to="/signin" />
      )
    case 'sidenav':
      // debugger
      return location.pathname.split("/").includes("videos") ? (
          <div className="modal-background" onClick={closeModal}>
            <div className="side-nav-modal-child" onClick={e => e.stopPropagation()}>
              <SideNavContainer />
            </div>
          </div>
        ) : (
          null
        )
    default:
      return null;
  }
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal,
    loggedIn: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
