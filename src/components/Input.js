import React, { Component } from 'react'

class Input extends Component {

search = (e) =>{
    console.log("Work", e.target.value);
}

  render() {
    return (
     
         <input type="text" className="search-input" placeholder=" Search site" onChange={this.search}/>
     
    )
  }
}
export default Input;