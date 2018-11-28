import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import CategoryNav from './../Layout/CategoryNav'
import '../css/Main.css';

 class Main extends Component {

  render() {
    console.log("Propsy from component: ", this.props.posts.ads);
  const { posts } = this.props.posts;
  const postList = posts.length ? (
      posts.map((post)=> {
          return(
              <div key={post._id} className="card-wrap">
               <span className="pos">
               <img src={post.metadata.image.url} alt=""/>
               </span>
              <div className="card">
               <Link to={'/' + post.slug}> <h2 className="card-title">{post.title}</h2></Link>
               {post.content.length < 50 ? <p className="card-body" dangerouslySetInnerHTML={{__html:post.content}}></p> : 
               <p className="card-body" dangerouslySetInnerHTML={{__html:post.content.substring(0,50)}}></p> }
               <span>{post.created_at}</span>
                
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
      <div>
      
        <h2>{ this.props.posts.ads.title}</h2>
        <p>{ this.props.posts.ads.content}</p>
        {console.log("Link", this.props.posts.ads.metadata)}
    
    </div>
    </div>
  )
}
}

const mapStateToProps = (state) => {
  console.log("Map", state.posts);
  return{
    
    posts: state.posts,
    ads: state.ads
  }
}
export default connect(mapStateToProps)(Main);