import React, { Component } from 'react'
import '../../css/Signin.css';
// import { withRouter } from "react-router-dom";
// import { Redirect } from 'react-router-dom'
class Signin extends Component {

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
        localStorage.setItem("Token", data.token);
        // this.props.history.push("/");
         // save token to localstorage

      })
      .catch(err => {
        console.log(err)
      })
     
    }
  render() {
    return (
      <div className="signin-container"> 
        <h1 className="">Login</h1>
        <form className="login-form">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" onChange={this.handleChange}/>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" onChange={this.handleChange}/>
          <button className="btn" onClick={this.handleSubmit}><div className="overlay"></div>Login</button>
         
        </form>
      </div>
    )
  }
}

// export default withRouter(Signin);
export default Signin;


// email: 'qqd8jw5zrj6y@10minut.xyz',
// pass: 'a'