import React from "react"
import randomUsers from "./randomUsers.json"
import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom"

console.log(randomUsers)
function ListHome() {
  return (
    <div className="listContainer">
      {randomUsers.map((user) => (
        <Link to={"/contact/" + user.id}>
        <div key={user.id} className="listItem">
          <img src={user.picture.thumbnail} />
          {user.name.first} {user.name.last}
        </div>
        </Link>
      ))}
    </div>
  )
}

export default ListHome
