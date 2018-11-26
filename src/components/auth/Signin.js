import React, { Component } from 'react'
export default class Signup extends Component {

    state = {
      email: null,
      password: null
    }
    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value // get data from input 
      });
    }
    handleSubmit = (e) => {
      e.preventDefault();
      const Cosmic = require('cosmicjs')() // double parentheses to init function without token
      Cosmic.authenticate({
      email: this.state.email,
      password: this.state.password
      }).then(data => {
        console.log(data.token);
        localStorage.setItem("Token", data.token); // save token to localstorage
      })
      .catch(err => {
        console.log(err)
      })
    }
  render() {
    return (
      <div style={loginWrap}> 
        <h1>Login</h1>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" onChange={this.handleChange}/>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" onChange={this.handleChange}/>
          <button onClick={this.handleSubmit}>Login</button>
        </form>
      </div>
    )
  }
}
const loginWrap = {
  color: 'blue',
  backgroundColor:'red'
};



// email: 'qqd8jw5zrj6y@10minut.xyz',
// pass: 'a'