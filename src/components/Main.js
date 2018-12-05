import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import CategoryNav from './../Layout/CategoryNav'
import '../css/Main.css';
import Category from './Category';
import Loader from '../Layout/Loader';
import Button from './Button';
import LazyLoad from 'react-lazy-load';
 class Main extends Component {

  componentDidMount = () => {
   const catBar = document.querySelector('.category-wrap');
   const container = document.querySelector('.content-wrap');
   document.addEventListener('scroll', () => {
    //  console.log("inner height", window.innerHeight, document.body.clientHeight,window.pageYOffset);
     if(window.pageYOffset > 90 ) {
      
      container.classList.add('padding-sticky');
      catBar.classList.add('sticky');
     }
     else{
      container.classList.remove('padding-sticky');
      catBar.classList.remove('sticky');
      
     }
   
   });
  }

  render() {
  const { posts } = this.props;
  const postList = posts.length ? (
      posts.map((post)=> {
          return(
              <div key={post._id} className="card-wrap">
               <span className="pos">
               <LazyLoad  offsetVertical={1000} >
               <img src={post.metadata.image.url} alt=""/>
               </LazyLoad>
               </span>
              <div className="card">
               <Link to={'/' + post.slug}> <h2 className="card-title">{post.title}</h2></Link>
          {post.metadata.snipped &&  post.metadata.snipped.length < 80 ?  <p className="card-body" dangerouslySetInnerHTML={{__html:post.metadata.snipped}}></p> :
           <p className="card-body" dangerouslySetInnerHTML={{__html: post.metadata.snipped && post.metadata.snipped.slice(0,80)}}></p> 
        }
               <span className="date">{post.created_at}</span>
                
              </div>
            </div>
          )
      })

  ) 
  : 
  (
      // <div className="text-center"> No posts yet </div>
     <Loader />
  )
  return (
    <div>
      <CategoryNav />
      <div className="content-wrap">
        {postList}
      </div>
      <hr/>
      {
      this.props ?
      <div className="page">
        <div className="page-overlay">
          <h1>{ this.props.page.title}</h1>
          <p dangerouslySetInnerHTML={{__html:this.props.page.content}} ></p>
          <Button title={"See more"} />
        </div>
        <LazyLoad offsetVertical={300} >
          <img className="ads-image" src={this.props.page.metadata? this.props.page.metadata.image.url : "#" } alt="img"/>
        </LazyLoad>
        </div>
        :
        <p>No page</p>
        }
        <div>
       { posts && <h2 className="category-title">FILM</h2>}
          <hr/>
          <Category />
        </div>
      
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  
  return{
    posts: state.posts.posts.slice(0,5),
    page: state.posts.ads,
  }
}
export default connect(mapStateToProps)(Main);