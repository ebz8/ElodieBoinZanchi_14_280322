import "./Header.scss"
import logo from "../../assets/img/logotransp.png"

function Header() {
  return (
    <header className="page-header">
      <p className="title">HRnet</p>
      <p className="name">Wealth Health</p>
      <img className="logo" src={logo} alt="Wealth Health Logo" />
    </header>
  )
}

export default Header