import React from 'react';
import VideoIndexItem from './video_index_item';

export default class VideoIndex extends React.Component {
  componentDidMount() {
    this.props.fetchVideos()
  }

  render() {
    const indexItems = this.props.videos.map(video => {
      debugger
      return <VideoIndexItem video={video} />
    })
    return (
      <>
        <ul className="video-index">
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}
          {indexItems}

        </ul>
      </>
    )
  }
}
