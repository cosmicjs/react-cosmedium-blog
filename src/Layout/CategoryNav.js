import React from 'react'
import { connect } from 'react-redux';
import {Link } from 'react-router-dom'
function CategoryNav(props) {
  return (
    <div className="category-wrap">
      <ul className="category-list">
        {
          props.categories && props.categories.map((category,key) =>{
            return(
              <Link  key={key} to={'/category/' + category.slug }> <li className="item">{category.title}</li> </Link>
            )
        })
        }
      </ul>
    </div>
  )
}
const mapStateToProps = (state) => {

  return{
    categories : state.posts.categories
  }
}
export default connect(mapStateToProps) (CategoryNav)