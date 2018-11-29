import React from 'react'
import { connect } from 'react-redux';

import '../css/SinglePost.css';

 function SinglePost(props) {

  return (
    <div className="page-container">
     <div className="page-wrap">
     {props.post && <h3>{props.post.metadata.category.slug} </h3> }
     {props.post && <h1>{props.post.title}</h1> }
     {props.post && <h4>{props.post.metadata.snipped}</h4> }
     </div>
     {props.post && <img className="figure" src={props.post.metadata.image.url} alt=""/>  }
     {props.post && <p className="text-page" dangerouslySetInnerHTML={{__html:props.post.content}}></p> }
     <div className="side-bar">vote</div>
    </div>
  )
}
const mapStateToProps=(state, ownProps) => {
    let slug = ownProps.match.params.post_slug;
    return{
        post:state.posts.posts.find(item => item.slug === slug )
    }
}
export default connect(mapStateToProps)(SinglePost);