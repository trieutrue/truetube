import React from 'react';
// import VideoIndexItem from './video_index_item';

export default class VideoIndex extends React.Component {
  componentDidMount() {
    this.props.fetchVideos()
  }

  render() {
    const indexItems = this.props.videos.map(video => (
      <li key={`video${video.id}`}>{video.title}</li>
    ))
    return (
      <>
        <ul className="video-index">
          <li>hello world</li>
          {indexItems}
        </ul>
      </>
    )
  }
}
