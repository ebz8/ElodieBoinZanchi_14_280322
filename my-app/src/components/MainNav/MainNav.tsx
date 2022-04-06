import "./MainNav.scss"
import { NavLink } from "react-router-dom"

function MainNav() {
  return (
    <nav className="main-nav">
      <NavLink
        to="/"
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
    </nav>
  )
}

export default MainNav
