import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import SearchList from '../components/SearchList';
class Navbar extends Component {
  
render(){
  return (
 <div className="wrap-to-border">
        <div className="navbar-wrap">
        <div className="left-side">
            <h1 className="logo"><Link to="/">Medium</Link></h1>
        </div>
        <div className="right-side">
            <div className="search-wrap">
                <i className="fa fa-search fa-lg" aria-hidden="true" ></i>
            <Input />
               <SearchList />
             </div>
            <Link to="/signin" className="signin">Sign in</Link>
            <button className="btn-join">Get started</button>
        </div>
    </div>
 </div>
  )
}
}

export default(Navbar);