import "./MainNav.scss"
import { NavLink } from "react-router-dom"

function MainNav() {
  return (
    <div className="main-nav">
      <NavLink
        to="/create-employee"
        className={({ isActive }) => {
          return isActive ? "--actif" : ""
        }}
      >
        Create Employee
      </NavLink>
      <NavLink
        to="/employees"
        className={({ isActive }) => {
          return isActive ? "--actif" : ""
        }}
      >
        Current Employees
      </NavLink>
    </div>
  )
}

export default MainNav
