import React from 'react'
import { Link } from 'react-router-dom';
export default function Button(props) {
  return (
    <Link to={'/site'} ><button className="btn-join">{props.title}</button></Link>
  )
}
