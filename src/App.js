import React, { Component } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Signin from './components/auth/Signin';
import Main from './components/Main';
import Navbar from './Layout/Navbar';
import CategoryNav from './Layout/CategoryNav';



class App extends Component {

  componentDidMount = () => {
    const Cosmic = require('cosmicjs')
    var api = new Cosmic();
    var bucket = api.bucket({
      slug:'b20d8c20-f0d6-11e8-a47e-3bb5370873e3'
    })
    bucket.getObjects().then(data => {
     console.log(data);
    
    
    }).catch(err => {
      console.log(err)
    })

  }
  render() {
    return (
      <div className="App">
      <Navbar />
      <CategoryNav />
        <BrowserRouter>
          <Switch>
            <Route path={'/'} component={Main} exact />
            <Route path={'/signin' } component={Signin} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
