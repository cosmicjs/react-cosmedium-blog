import React, { Component } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';


import Signin from './components/auth/Signin';
import Navbar from './Layout/Navbar';
import Main from './components/Main';
import { FetchPostsApi } from './store/actions/PostsAction';
import SinglePost from './components/SinglePost';
import Category from './components/Category';
import Categories from './components/Categories';
// import AddUser from './components/auth/AddUser';

class App extends Component {

  componentDidMount = () => {
    this.props.fetchPosts();
 
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
            <div className="app-wrap">
            <Switch>
              <Route path={'/' } exact component={Main} />
              <Route path={'/signin'} exact component={Signin} />
              <Route path={'/category'} exact component={Categories} />
              {/* <Route path={'/add-user'} exact component={AddUser} /> */}
              <Route path={'/category/:category_slug'} exact component={Category} />
              <Route path={'/:post_slug'} exact component={SinglePost} />
             
            </Switch>
            </div>
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
