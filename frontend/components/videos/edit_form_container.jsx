import { connect } from 'react-redux';
import { updateVideo } from '../../actions/video_actions';
import { closeModal } from '../../actions/modal_actions';
import VideoForm from './video_form';

const mSTP = (state, ownProps) => {
  debugger
  return {
    videoData: state.entities.videos[ownProps.videoId],
    formType: 'edit'
  }
}

const mDTP = dispatch => {
  return {
    processForm: videoData => dispatch(updateVideo(videoData)),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mSTP, mDTP)(VideoForm)