import React from 'react';
import * as MD from 'react-icons/md'


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
    const { formType, errors } = this.props;
    const { title, description } = this.state;
    const headerText = formType === "upload" ? "Upload file" : title
    return (
      <>
        <div className="form-header">
          <h2>{headerText}</h2>
          <MD.MdClose />
        </div>

        <form onSubmit={this.handleSubmit} className="video-form">
          {this.state.submissionFile ? (
            <>
              <input type="text"
                value = {this.state.title}
                onChange={this.handleInput("title")}
                placeholder="Add a title that describes your video" />

              <textarea value={this.state.description}
                onChange={this.handleInput("description")}
                placeholder="Tell viewers about your video">
              </textarea>
              <button>Next</button>
            </>
          ) : (
            <>
              <input type="file" 
                accept="video/*"
                id="actual-btn"
                onChange={this.handleFile} 
                hidden
                />
                <div className="upload-background">
                  <MD.MdFileUpload className="upload-icon"/>
                </div>
                <h5>Drag and drop video file to upload</h5>
                <h6>Your videos will be private until you publish them.</h6>
              <label for="actual-btn">SELECT FILE</label>
            </>
          ) }
        </form>
      </>
    )

  }
}