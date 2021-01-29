import React from 'react';
import * as MD from 'react-icons/md'
import { RiLoader4Fill } from 'react-icons/ri'
import { withRouter } from 'react-router-dom';


class VideoForm extends React.Component {
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
    const file = e.currentTarget.files[0]
    file.size > 100000000 ?  this.setState({ error: "File size too large." }) : this.setState({ error: "" })
    if (file.size > 100000000) return
    const fileReader = new FileReader();
    const title = file.name.split(".")[0]
    fileReader.onloadend = () => {
      this.setState({submissionFile: file, submissionUrl: fileReader.result, title })
    }
    if (file) fileReader.readAsDataURL(file) 
  }

  handleSubmit(e) {
    const { processForm, closeModal, errors } = this.props
    e.preventDefault();
    const videoData = new FormData();
    videoData.append("video[title]", this.state.title)
    videoData.append("video[description]", this.state.description)
    if (this.state.submissionFile) videoData.append("video[submission]", this.state.submissionFile)
    if (this.state.videoUrl) videoData.id = this.state.id


    errors.length ? this.setState({ isLoading: false }) : this.setState({ isLoading: true })
    processForm(videoData)
      .then(() => closeModal())
  }

  render() {
    const { title, description, submissionUrl, submissionFile, videoUrl, isLoading } = this.state;

    const headerText = title ? title : "Upload file"
    const isComplete = title ? false : true;
    const hidden = submissionFile || videoUrl ? false : true
    const loading = isLoading ? <RiLoader4Fill className="spin" /> : <span>SAVE</span>
    const preview = submissionUrl ? ( 
      <div className="video-container column">
        <video controls>
          <source src={submissionUrl}/>
          Sorry, your browser doesn't support embedded videos.
        </video>

        <p>Filename</p>
        <p>{submissionFile.name}</p>
      </div>
    ) : ( null )

    const editPreview = videoUrl ?  (
      <div className="video-container column">
        <video controls>
          <source src={videoUrl}/>
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
    ) : null

    return (
      <>
        <form onSubmit={this.handleSubmit} className="video-form">
          <div className="form-header">
            <h2>{headerText}</h2>
            <MD.MdClose onClick={this.props.closeModal}/>
          </div>
          
          {(this.state.submissionFile || this.state.videoUrl) ? (
            <div className="info-section">

              <div className="info-container column">
                <h2>Details</h2>
                <label className="title-field">Title (required)
                  <input type="text"
                    value = {title}
                    onChange={this.handleInput("title")}
                    placeholder="Add a title that describes your video" />
                </label>

                <label className="description-field">Description
                  <textarea value={description}
                    onChange={this.handleInput("description")}
                    placeholder="Tell viewers about your video">
                  </textarea>
                </label>
              </div>

              {preview}
              {editPreview}

            </div>
          ) : (
            <div className="upload-section" onDrop={this.handleFile}>
              <input type="file" 
                accept="video/*"
                id="actual-btn"
                onChange={this.handleFile} 
                hidden
                />
                <div className="upload-background">
                  <MD.MdFileUpload className="upload-icon"/>
                </div>
                <h5>Select a file to upload</h5>
                <h6>Your videos will be private until you publish them.</h6>
                <h6 className="err" key={Math.random()}>{this.state.error}</h6>
              <label htmlFor="actual-btn" className="blue-btn">SELECT FILE</label>
            </div>
          ) }
          <div hidden={hidden} className="flex-end">
            <button key={Math.random()} hidden={hidden} disabled={isComplete} className="save-btn">{loading}</button>
          </div>
        </form>
      </>
    )

  }
}

export default withRouter(VideoForm)