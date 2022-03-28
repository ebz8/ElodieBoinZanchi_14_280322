import "./Header.scss"
import logo from "../../assets/img/logotransp.png"

import MainNav from "../MainNav/MainNav"

function Header() {
  return (
    <header>
      <div className="header-titles">
        <p className="title">HRnet</p>
        <p className="name">Wealth Health</p>
        <img className="logo" src={logo} alt="Wealth Health Logo" />
      </div>
      <MainNav />
    </header>
  )
}

export default Header