import React from 'react'
import { connect } from 'react-redux';
import {Link } from 'react-router-dom'
function CategoryNav(props) {
  console.log("Category",props.categories);
  return (
    <div className="category-wrap">
      <ul className="category-list">
        {
          props.categories && props.categories.map((category,key) =>{
            return(
              <Link key={key} to={'/category/' + category.slug }>{category.title}</Link>
            )
        })
        }
      </ul>
    </div>
  )
}
const mapStateToProps = (state) => {
  console.log("Category map", state.posts.categories);
  return{
    categories : state.posts.categories
  }
}
export default connect(mapStateToProps) (CategoryNav)