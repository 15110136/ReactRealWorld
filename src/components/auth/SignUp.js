import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/actions/authAction";
import ListErrors from './ListErrors';

class SignUp extends Component {
  state = {
    // email: '',
    // password: '',
    // firstName: '',
    // lastName: '',
    email: '',
    password: '',
    username: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    var newUser = {
      user: {
        email: this.state.email,
        password: this.state.password,
        username: this.state.username
      }
    }
    this.props.signUp(newUser);
  }
  render() {
    const { auth } = this.props;
    
    if (auth.isAuthenticated) return <Redirect to='/' />
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">User name</label>
            <input type="text" id='username' onChange={this.handleChange} />
          </div>

          <div className="input-field center">
            <button className="btn green lighten-1 z-depth-0">Sign Up</button>
            <div className="red-text center">
              <ListErrors errors={this.props.authError}/>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.auth,
    authError: state.auth.authError
  }
}

const mapDisptachToProps = dispatch => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDisptachToProps)(SignUp)