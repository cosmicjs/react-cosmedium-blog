import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import '../css/SearchList.css'
 function SearchList(props) {
    
  return (
 <div className="search-list">
       <div className="suggestions"> 
         {
           props.value && props.lists.map((item, index) => {
                 return(
                   <li>
                        <Link key={index} to={'/' + item.slug}>
                    <div className="it">{item.title}</div>
                    </Link> 
                   </li>
                 )
             })
         }
      </div>
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