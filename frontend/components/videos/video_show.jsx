import React from 'react';
import VideoNav from '../nav/video_nav/video_nav'

export default class VideoShow extends React.Component {
  componentDidMount() {
    this.props.fetchVideo(this.props.match.params.videoId)
  }

  render() {
    const { video, user } = this.props;
    return (
      <>
        <video src={video.videoUrl}></video>
        <VideoNav video={video} user={user}/>
      </>
    )
  }
}