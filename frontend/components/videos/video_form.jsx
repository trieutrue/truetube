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
    const file = e.currentTarget.files[0]
    const fileReader = new FileReader();
    const title = file.name.split(".")[0]
    fileReader.onloadend = () => {
      this.setState({submissionFile: file, submissionUrl: fileReader.result, title })
    }
    if (file) fileReader.readAsDataURL(file) 
  }

  handleSubmit(e) {
    const { processForm, closeModal } = this.props
    e.preventDefault();
    const videoData = new FormData();
    videoData.append("video[title]", this.state.title)
    videoData.append("video[description]", this.state.description)
    if (this.state.submissionFile) videoData.append("video[submission]", this.state.submissionFile)
    closeModal()
    processForm(videoData)
  }

  render() {
    const { errors } = this.props;
    const { title, description, submissionUrl, submissionFile } = this.state;
    const headerText = title ? title : "Upload file"
    const isComplete = title ? false : true;
    const hidden = submissionFile ? false : true
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

    return (
      <>
        <form onSubmit={this.handleSubmit} className="video-form">
          <div className="form-header">
            <h2>{headerText}</h2>
            <MD.MdClose onClick={this.props.closeModal}/>
          </div>
          
          {this.state.submissionFile ? (
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

            </div>
          ) : (
            <div className="upload-section">
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
              <label for="actual-btn" class="blue-btn">SELECT FILE</label>
            </div>
          ) }
          <div hidden={hidden} className="flex-end">
            <button hidden={hidden} disabled={isComplete} class="save-btn">SAVE</button>
          </div>
        </form>
      </>
    )

  }
}