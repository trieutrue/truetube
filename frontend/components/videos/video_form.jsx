import React from 'react';
import { render } from 'react-dom';

export default class VideoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.videoData

    this.handleFile = this.handleFile.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  handleFile(e) {
    this.setState({ submissionFile: e.currentTarget.files[0] })
  }

  handleSubmit(e) {
    e.preventDefault();
    const videoData = new FormData();
    videoData.append("video[title]", this.state.title)
    videoData.append("video[description]", this.state.description)
    videoData.append("video[submission]", this.state.submissionFile)
    this.props.processForm(videoData)
  }

  render() {
    const { formType, errors } = this.props

    return (
      <>
        <h2>{formType}</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="file" 
            onChange={this.handleFile} />
          <input type="text"
            value={this.state.title}
            onChange={this.handleInput("title")}
            placeholder="Add a title that describes your video" />
          <textarea value={this.state.description}
            onChange={this.handleInput("description")}
            placeholder="Tell viewers about your video">
          </textarea>
          <button>{formType}</button>
        </form>
      </>
    )

  }
}