import React from 'react';
import VideoNav from '../nav/video_nav/video_nav'
import CommentIndexContainer from '../comments/comment_index_container'

export default class VideoShow extends React.Component {
  componentDidMount() {
    this.props.fetchVideo(this.props.match.params.videoId)
    const guide = document.getElementById("guide-btn")

    this.callback = (e) => {
      e.stopPropagation();
      this.props.openModal('sidenav')
    }

    guide.addEventListener("click", this.callback)
  }

  componentWillUnmount() {
    const guide = document.getElementById("guide-btn")

    if (!this.callback) guide.removeEventListener("click", this.callback)
  }

  render() {
    const { video, user, match } = this.props;
    if (!video) return null;
    return (
      <>
        <div className="video-container">
          <video controls className="screen">
            <source src={video.videoUrl} type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
          </video>
          <VideoNav video={video} user={user}/>
          <CommentIndexContainer match={match}/>
        </div>

      </>

    )
  }
}