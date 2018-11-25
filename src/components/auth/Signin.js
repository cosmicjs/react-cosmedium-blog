import React, { Component } from 'react'
export default class Signup extends Component {

    componentDidMount = () => {

    const Cosmic = require('cosmicjs')() // double parentheses to init function without token
    Cosmic.authenticate({
    email: 'qqd8jw5zrj6y@10minut.xyz',
    password: 'aaaaaa'
    }).then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })

    }

  render() {
    return (
      <div>
        Sing In
        
      </div>
    )
  }
}
