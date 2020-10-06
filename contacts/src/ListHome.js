import React from "react"
import randomUsers from "./randomUsers.json"
import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom"
import "./ListHome.css"

// console.log(randomUsers)
function ListHome() {
  return (
    <div className="listContainer">
      <h1>Contacts</h1>
      {randomUsers.map((user) => (
        <div key={user.id} className="listItem">
        <Link to={"/contact/" + user.id}>
          <img className="contactThumbnail" src={user.picture.thumbnail} />
        </Link>
        <Link to={"/contact/" + user.id}>
          <span className="name">{user.name.first} {user.name.last}</span>
        </Link>
        </div>
      ))}
    </div>
  )
}

export default ListHome
