import React from 'react'
import { connect } from 'react-redux';


 function SinglePost(props) {
     console.log("Router props", props.match.params.post_slug);
     console.log("map state post", props.post);
    
  return (
    <div>
    {props.post && <h3>{props.post.metadata.category.slug} </h3> }
     {props.post && <h1>{props.post.title}</h1> }
     {props.post && <img src={props.post.metadata.image.url} alt=""/> }
     {props.post && <h5>{props.post.metadata.snipped}</h5> }
     {props.post && <p dangerouslySetInnerHTML={{__html:props.post.content}}></p> }
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