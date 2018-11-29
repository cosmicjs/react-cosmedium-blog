import React, { Component } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';


import Signin from './components/auth/Signin';
import Navbar from './Layout/Navbar';
import Main from './components/Main';
import { FetchPostsApi } from './store/actions/PostsAction';
import SinglePost from './components/SinglePost';

class App extends Component {

  componentDidMount = () => {
    this.props.fetchPosts();
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
            <Switch>
              <Route path={'/' } exact component={Main} />
              <Route path={'/:post_slug'} component={SinglePost} />
              <Route path={'/signin' } component={Signin} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
const mapDispatchToProps= (dispatch) => {
  return {
    fetchPosts: () => {
      dispatch(FetchPostsApi());
    }
  }
}
export default connect(null, mapDispatchToProps) (App);
