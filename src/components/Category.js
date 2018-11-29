import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

 function Category(props) {
    
  return (
    <div>
       {
          props.postCategory &&  props.postCategory.map((item, index) => {
            return(
              <h2 key={index}>{item.title}</h2> )
          })
          }
    </div>
  )
}
const mapStateToProps=(state, ownProps) => {
    if(ownProps.match) {
        var slug = ownProps.match.params.category_slug;
    } else{
        var main_slug = 'film'
    }
    
    return{
        postCategory:state.posts.posts.filter(cat => {
            if(slug) return cat.metadata.category.slug ===  slug 
            else return cat.metadata.category.slug ===  main_slug       
        })
    }
}
export default connect(mapStateToProps)(Category);