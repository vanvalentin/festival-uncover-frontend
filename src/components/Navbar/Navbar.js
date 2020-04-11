import React from "react"
import NavbarLinks from "./NavbarLinks"
import Logo from "./Logo"

require('../../styles/global.scss');
require('./style/navbar.scss');

const Navbar = () => (
  <section className="navigation">
    <div className="nav-container">
      <Logo />
      <nav>
        <div className="nav-mobile"><a id="nav-toggle" /*onClick={() => navToggleClick()}*/ href="#!"><span></span></a></div>
        <NavbarLinks />
      </nav>
    </div>
  </section>
)

/*function navToggleClick() 
{
    $(this.navList).slideToggle();
    this.navToggle.classList.toggle('active');
}*/

export default Navbar