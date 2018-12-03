import React, { Component } from 'react'
import { connect } from 'react-redux'
 class Input extends Component {
  render() {
    return (
        <input type="text"  placeholder="Search.. " className="search-input" value={this.props.input} onChange={this.props.handleInput}/>
    )
  }
}
const mapStateToProps = (state) => {
    return{
        input: state.input
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        handleInput: (e) => {
            dispatch({type:'SEARCH_INPUT', input:e.target.value})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Input);