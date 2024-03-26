import React from "react"
import { NavLink } from "react-router-dom"


const Header: React.FC = () => {

  return (
    <header className="header">
      <div className="header_text-box">
        <h1 className="heading-primary">
          <span className="heading-primary_main">Todo-List</span>
          <span className="heading-primary_sub">Task Tracker: Keep Track of Your ToDo</span>
        </h1>
      </div>
      <div className="header_text-button">
        <NavLink to="/todolist" className="btn btn-gray btn-animated ">
          Start My Todolist
        </NavLink>
      </div>

    </header>
  )
}

export default Header