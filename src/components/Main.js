import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import CategoryNav from './../Layout/CategoryNav';

import '../css/Main.css';
 class Main extends Component {
  render() {
    console.log(this.props.posts.posts);
  const { posts } = this.props.posts;
  const postList = posts.length ? (
      posts.map((post)=> {
          return(
              <div key={post.id} className="card-wrap">
              <div className="card">
               <Link to={'/' + post.id}> <h2 className="card-title">{post.title}</h2></Link>
               {post.body.length < 50 ? <p className="card-body">{post.body}</p> : 
               <p className="card-body">{post.body.substring(0,50)}</p> }
                
              </div>
            </div>
          )
      })

  ) 
  : 
  (
      <div className="text-center"> No posts yet </div>
  )

  return (
    <div>
      <CategoryNav />
      <div className="content-wrap">
      
      {postList}
    </div>
    </div>
  )
}
}

const mapStateToProps = (state) => {
  return{
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Main);