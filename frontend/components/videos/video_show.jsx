import React from 'react';
import VideoNav from '../nav/video_nav/video_nav'

export default class VideoShow extends React.Component {
  componentDidMount() {
    this.props.fetchVideo(this.props.match.params.videoId)
  }

  render() {
    const { video, user } = this.props;
    return (
      <div className="video-container">
        <video controls className="screen">
          <source src={video.videoUrl} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
        <VideoNav video={video} user={user}/>
      </div>
    )
  }
}