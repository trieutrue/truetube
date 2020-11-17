import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDemoUser = this.handleDemoUser.bind(this)
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

  render() {
    const { formType, errors } = this.props
    const headerText = formType === 'signin' ? 'Sign in' : 'Sign up'
    const demoUserBtn = formType === 'signin' ? (
    <button onClick={this.handleDemoUser}>Demo User</button>
    ) : null;

    const formLink = formType === 'signin' ? 'signup' : 'signin'
    const errorsLi = errors ? errors.map((error, idx) => <li key={idx}>{error}</li>) : null

    const signupFields = formType === 'signin' ? null : (
      <>
        <label>Channel Name:
            <input
            type="text"
            onChange={this.handleInput('channelName')}
            value={this.state.channelName} />
        </label>
        <label>First Name:
            <input
            type="text"
            onChange={this.handleInput('firstName')}
            value={this.state.firstName} />
        </label>
        <label>Last Name:
            <input
            type="text"
            onChange={this.handleInput('lastName')}
            value={this.state.lastName} />
        </label>
      </>
    )

    return (
      <div className="session-form">
        <h2>{headerText}</h2>
        <h4>to continue to WeTube</h4>

        <ul>
          {errorsLi}
        </ul>

        <form onSubmit={this.handleSubmit}>
          {signupFields}

          <label>Email:
            <input
              type="text"
              onChange={this.handleInput('email')}
              value={this.state.email} />
          </label>
          <label>Password:
            <input
              type="password"
              onChange={this.handleInput('password')}
              value={this.state.password} />
          </label>
          <button>{headerText}</button>
        </form>
        <Link className="btn" to={`/${formLink}`}>{btnText}</Link>

        {demoUserBtn}
      </div>
    )
  }
};

export default SessionForm;