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
  };

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.processForm(user)
  }

  render() {
    const { formType, errors } = this.props
    const headerText = formType === 'signin' ? 'Sign in' : 'Sign up'
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
            onChange={this.handleInput('password')}
            value={this.state.password} />
        </label>
        <label>Last Name:
            <input
            type="text"
            onChange={this.handleInput('password')}
            value={this.state.password} />
        </label>
      </>
    )
    return (
      <div className="session-form">
        <h2>{headerText}!</h2>

        <ul>
          {errorsLi}
        </ul>

        <form>
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
          <button onClick={this.handleSubmit}>{headerText}</button>
        </form>

        <Link className="btn" to={`/${formType}`}></Link>
      </div>
    )
  }
};

export default SessionForm;