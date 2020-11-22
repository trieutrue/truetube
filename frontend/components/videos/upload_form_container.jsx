import React from 'react';
import { connect } from 'react-redux';
import { uploadVideo } from '../../actions/video_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import VideoForm from './video_form';

const mSTP = state => {
  return {
    videoData: {
      title: "",
      description: "",
      submissionFile: null,
      submissionUrl: null
    },
    errors: state.errors.video,
    formType: 'upload'
  }
}

const mDTP = dispatch => {
  return {
    processForm: videoData => dispatch(uploadVideo(videoData)),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mSTP, mDTP)(VideoForm)

