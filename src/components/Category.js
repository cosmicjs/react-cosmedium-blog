import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../css/Category.css';

 function Category(props) {
    
  return (
    <div>
       {
          props.postCategory &&  props.postCategory.map((item, index) => {
            return(
            <div key={index} className="main-category-wrap">
            {item && <img className="category-image" src={item.metadata.image.url} alt={item.slug}/> }
           <div className="category-text-wrap">
           <Link to={'/' + item.slug}> <h2>{item.title}</h2></Link> 
           { item.length < 300 ? 
           <p dangerouslySetInnerHTML={{__html:item.content}}></p> :
           <p dangerouslySetInnerHTML={{__html:item.content.substring(0, 300)}}></p> 
           }
           </div>
            </div>
            )

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