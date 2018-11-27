import React from 'react'

export default function Navbar() {

  return (
    <div className="navbar-wrap">
        <div className="left-side">
            <h1 className="logo">Medium</h1>
        </div>
        <div className="right-side">
            <div className="search-wrap">
                <i className="fa fa-search fa-lg" aria-hidden="true"></i>
                <input type="text" className="search-input"/>
             </div>
            <div className="signin">Sign in</div>
            <button className="btn-join">Get started</button>
        </div>
    </div>
  )
}
