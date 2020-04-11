import React from "react"
import { Link } from "gatsby"

const NavbarLinks = () => {
  return (
        <ul className="nav-list">
            <li>
                <Link exact to={'/'} activeClassName="active-nav" className="nav-link">Home<div className="item-line"></div></Link>
            </li>
            <li>
                <Link to={'/festivals'} activeClassName="active-nav" className="nav-link">Festivals<div className="item-line"></div></Link>
            </li>
            <li>
                <Link to={'/about'}  activeClassName="active-nav" className="nav-link">About<div className="item-line"></div></Link>
            </li>
            <li>
                <Link to={'/contact'} activeClassName="active-nav" className="nav-link">Contact<div className="item-line"></div></Link>
            </li>
        </ul>
  )
}

export default NavbarLinks