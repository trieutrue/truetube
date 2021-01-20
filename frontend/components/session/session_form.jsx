import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AiFillExclamationCircle } from 'react-icons/ai'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      count: 0
    };

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDemoUser = this.handleDemoUser.bind(this)
    this.toggleErrors = this.toggleErrors.bind(this)
    this.signupFields = this.signupFields.bind(this)
  };

  componentDidUpdate(prevProps) {
    if (prevProps.errors.length !== this.props.errors.length) {
      this.toggleErrors()
    }
  }

  handleInput(type) {
    if (typeof this.state[type] === "undefined") {
      this.state[type] = ""
    }

    return (e) => {
      e.preventDefault()
      e.currentTarget.className = ""
      this.setState({ [type]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ count: this.state.count + 1 })
    const user = Object.assign({}, this.state)
    this.props.processForm(user)
  }

  handleDemoUser(e) {
    e.preventDefault();
    const user = {
      'email': "demouser@gmail.com",
      "password": "password"
    }

    this.props.processForm(user)
  }

  toggleErrors(field) {
    const { errors, match } = this.props;
    for (let i = 0; i < errors.length; i++) {
      const error = errors[i];
      const errorType = error.split(" ")[0].toLowerCase()
      if (errorType === field) {
        return (
          <label key={`${errorType}-${this.state.count}`} htmlFor={field}>
            <AiFillExclamationCircle /> {error}
          </label>
        )
      } else if (!field && errorType === "there") {
        return (
          <p key={this.state.count} className="error-message">{error}</p>
        )
      }
    }
  }

  signupFields() {
    const { formType } = this.props

    return formType === 'signin' ? null : (
      <>
        <input
        id="channel"
        type="text"
        onChange={this.handleInput('channelName')}
        value={this.state.channelName} 
        placeholder="Channel Name"/>
        {this.toggleErrors("channel")}

        <div className="row">
          <div className="column">
            <input
            id="first"
            type="text"
            onChange={this.handleInput('firstName')}
            value={this.state.firstName} 
            placeholder="First name"/>
            {this.toggleErrors("first")}
          </div>
          
          <div className="column">
            <input
            id="last"
            type="text"
            onChange={this.handleInput('lastName')}
            value={this.state.lastName} 
            placeholder="Last name"/>
            {this.toggleErrors("last")}
          </div>
        </div>

        <div className="row">
        </div>
      </>
    )
  }

  render() {
    const { formType } = this.props
    const footerClassName = formType === 'signin' ? 'signin-footer' : 'signup-footer'
    const headerText = formType === 'signin' ? 'Sign in' : 'Create your TrueTube Account'
    const btnText = formType === 'signin' ? 'Create account' : 'Sign in instead'
    const formLink = formType === 'signin' ? 'signup' : 'signin'
    
    return (
      <div className="session-container">
        <div className={`${formType}-session-form`}>
          <header>
            <Link to="/" onClick={this.props.clearErrors} className="home-btn">
              <FontAwesomeIcon icon={faYoutube} className="logo-icon" />
              TrueTube
            </Link>
            <h2>{headerText}</h2>
            <h4>to continue to TrueTube</h4>
          </header>

          {this.toggleErrors()}

          <form onSubmit={this.handleSubmit}>
            {this.signupFields()}
            <input
              id="email"
              type="text"
              onChange={this.handleInput('email')}
              value={this.state.email} 
              placeholder="Email"/>
            {this.toggleErrors("email")}

              <input
                id="password"
                type="password"
                onChange={this.handleInput('password')}
                value={this.state.password} 
                placeholder="Password"/>
              {this.toggleErrors("password")}

            <div className='row'>
              <Link className="btn" to={`/${formLink}`} onClick={this.props.clearErrors}>{btnText}</Link>
              <button>Next</button>
            </div>
          </form>

          {formType === 'signin' ? <button onClick={this.handleDemoUser}>Sign in as demo user</button> : null}
        </div>

        <footer className={footerClassName}>
          <a href="https://github.com/trieutrue" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/trieutrue/" target="_blank">LinkedIn</a>
          <a href="https://angel.co/u/trieutran" target="_blank">AngelList</a>
        </footer>
      </div>
    )
  }
};

export default withRouter(SessionForm);