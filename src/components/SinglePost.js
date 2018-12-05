import React from 'react'
import { connect } from 'react-redux';
import '../css/SinglePost.css';
import moment from 'moment';
import { Link } from 'react-router-dom';

 function SinglePost(props) {

  return (
    <div className="page-container">
     <div className="page-wrap">
     {props.post && <h3><Link to={'/category/' + props.post.metadata.category.slug }>{props.post.metadata.category.slug}</Link></h3> }
     {props.post && <h1>{props.post.title}</h1> }
     {props.post && <h4>{props.post.metadata.snipped}</h4> }
     {props.post && <span className="date">{ moment(props.post.created_at).format("MMM Do YY")}</span> }
     </div>
     {props.post && <img className="figure" src={props.post.metadata.image.url} alt=""/>  }
     {props.post && <p className="text-page" dangerouslySetInnerHTML={{__html:props.post.content}}></p> }
     <div className="side-bar">
        <div className="vote-container">
        <i className="fa fa-thumbs-o-up fa-2x" aria-hidden="true"></i> 
     <span className="vote">(22) </span> 
     {/* required paiment plan to add post request to cosmic */}
        </div>
     </div>
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