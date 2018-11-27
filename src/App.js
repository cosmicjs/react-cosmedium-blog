import React, { Component } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
// import { connect } from 'react-redux';


import Signin from './components/auth/Signin';
import Navbar from './Layout/Navbar';
import CategoryNav from './Layout/CategoryNav';
import Main from './components/Main';



class App extends Component {

  componentDidMount = () => {
    const Cosmic = require('cosmicjs')
    var api = new Cosmic();
    var bucket = api.bucket({
      slug:'ec055990-f24c-11e8-9231-9b47e8f95b7e'
    })
    bucket.getObjects().then(data => {
     console.log(data);
    
    
    }).catch(err => {
      console.log(err)
    })

  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
       
            <Switch>
              <Route path={'/' } exact component={Main} />
              <Route path={'/signin' } component={Signin} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}


export default (App);
