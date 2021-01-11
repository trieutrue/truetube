import React from 'react';
import { Link } from 'react-router-dom';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDemoUser = this.handleDemoUser.bind(this)
    this.toggleErrors = this.toggleErrors.bind(this)
  };

  handleInput(type) {
    if (typeof this.state[type] === "undefined") {
      this.state[type] = ""
    }

    return (e) => {
      this.setState({ [type]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
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

  toggleErrors(e) {
    if (this.props.errors) {
      for(let i = 0; i < e.target.children.length; i++) {
        if (e.target.children[i].tagName === "INPUT") {
          e.target.children[i].className = "error"
        }
      }
    }
  }

  render() {
    const { formType, errors } = this.props
    const errorsLi = errors ? errors.map((error, idx) => <li key={idx}>{error}</li>) : null
    const headerText = formType === 'signin' ? 'Sign in' : 'Create your TrueTube Account'
    const btnText = formType === 'signin' ? 'Create account' : 'Sign in instead'
    const formLink = formType === 'signin' ? 'signup' : 'signin'
    // const formLink = formType === 'signin' ? <button onClick={this.handleDemoUser}>Demo User</button> : 'signin'

    const signupFields = formType === 'signin' ? null : (
      <>
        <input
        type="text"
        onChange={this.handleInput('channelName')}
        value={this.state.channelName} 
        placeholder="Channel Name"/>

      <div className="row">
        <input
        type="text"
        onChange={this.handleInput('firstName')}
        value={this.state.firstName} 
        placeholder="First name"/>

        <input
        type="text"
        onChange={this.handleInput('lastName')}
        value={this.state.lastName} 
        placeholder="Last name"/>
      </div>
      </>
    )
    
    return (
      <div className={`${formType}-session-form`}>
        <header>
          <Link to="/" className="home-btn">
            <FontAwesomeIcon icon={faYoutube} className="logo-icon" />
            TrueTube
          </Link>
          <h2>{headerText}</h2>
          <h4>to continue to TrueTube</h4>
        </header>

        <form onSubmit={this.handleSubmit}>
          {signupFields}
          <input
            type="text"
            onChange={this.handleInput('email')}
            value={this.state.email} 
            placeholder="Email"
            />

            <input
              type="password"
              onChange={this.handleInput('password')}
              value={this.state.password} 
              placeholder="Password"/>

          <div className='row'>
            <Link className="btn" to={`/${formLink}`}>{btnText}</Link>
            <button>Next</button>
          </div>
        </form>

        {formType === 'signin' ? <button onClick={this.handleDemoUser}>Sign in as demo user</button> : null}
      </div>
    )
  }
};

export default SessionForm;