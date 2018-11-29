import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import CategoryNav from './../Layout/CategoryNav'
import '../css/Main.css';
import Category from './Category';
 class Main extends Component {
  render() {
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
               <span className="date">{post.created_at}</span>
                
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
      {
      this.props.posts.ads ?
      <div className="page">
        <h2>{ this.props.posts.ads.title}</h2>
        <p dangerouslySetInnerHTML={{__html:this.props.posts.ads.content}} ></p>
        {/* <img src={this.props.posts.ads.metadata ? this.props.posts.ads.metadata.image.url : "#" } alt="img"/> */}
       {
        console.log("Link", this.props.posts.ads.metadata)
       }
        </div>
        :
        <p>No posts</p>
        }
        <div>
          <h1>Film</h1>
          {/* {
            this.props.postCategory.map((item, index) => {
            return(
              <h2 key={index}>{item.title}</h2> )
          
          })
          } */}
          <Category />
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return{
    posts: state.posts,
    ads: state.ads,
  //   postCategory:state.posts.posts.filter(cat => {
  //     return cat.metadata.category.slug ===  'film'      
  // })
  }
}
export default connect(mapStateToProps)(Main);