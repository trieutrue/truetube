import React from 'react';

export default class VideoShow extends React.Component {
  componentDidMount() {
    this.props.fetchVideo(this.props.match.params.videoId)
  }

  render() {
    const { title, description, uploaderId, createdAt, videoUrl } = this.props.video;
    return (
      <>
        <video src={videoUrl}>
          

        </video>
      </>
    )
  }
}