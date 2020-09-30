import React from "react"
import logo from "./logo.svg"
import ListHome from "./ListHome.js"
import ContactItem from "./ContactItem.js"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import "./App.css"



function App() {
  return (
  <Router>
    <Switch>
      <Route exact path="/">
        <ListHome />
      </Route>
      <Route path="/contact/:id">
        <ContactItem />
      </Route>
    </Switch>
  </Router>
  )
}

export default App
