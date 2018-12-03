import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import '../css/SearchList.css'
 function SearchList(props) {
     console.log("Search list" , props.lists);
  return (
   <div className="search-list"> 
    <span className="box"></span>
         {
           props.value && props.lists.map((item, index) => {
                 return(
                    <Link key={index} to={'/' + item.slug}>
                    <div className="it">{item.title}</div>
                    </Link> 
                 )
             })
         }
      </div>
  )
}
const mapStateToProps = (state) => {
    return{
        lists: state.posts.newList,
        value: state.posts.value,
        stat: state.posts.stat
     
    }
}
export default connect(mapStateToProps)(SearchList);