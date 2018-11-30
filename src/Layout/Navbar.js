import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar() {

  return (
 <div className="wrap-to-border">
        <div className="navbar-wrap">
        <div className="left-side">
            <h1 className="logo"><Link to="/">Medium</Link></h1>
        </div>
        <div className="right-side">
            <div className="search-wrap">
                <i className="fa fa-search fa-lg" aria-hidden="true"></i>
                <input type="text" className="search-input" placeholder=" Search site" />
             </div>
            <Link to="/signin" className="signin">Sign in</Link>
            <button className="btn-join">Get started</button>
        </div>
    </div>
 </div>
  )
}
