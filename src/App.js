import React, { Component } from 'react';
const Cosmic = require('cosmicjs');

class App extends Component {

  componentDidMount = () => {
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
      Work!
      </div>
    );
  }
}

export default App;
