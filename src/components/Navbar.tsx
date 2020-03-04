import React, { ReactNode } from "react";
import {NavLink, Link} from 'react-router-dom';
import logo from '../assets/img/logo_98x70.png';
import $ from "jquery";
import Home from "../pages/Home";
import Festivals from "../pages/Festivals";
import Contact from "../pages/Contact";
import About from "../pages/About";

require('../styles/components/navbar.scss');



export default class Navbar extends React.Component<object, object> {
  private navList: HTMLElement | undefined;
  private navToggle: HTMLElement | undefined;
  private menuIsHidden: boolean = true;

  constructor(props: object) {
    super(props);

  }


  render() {  
    return (
      <section className="navigation">
      <div className="nav-container">
        <div className="brand">
          <Link to={'/'}><img src={logo}/></Link>
        </div>
        <nav>
          <div className="nav-mobile"><a id="nav-toggle" ref={(e) => this.navToggle = e as HTMLElement} onClick={this.navToggleClick.bind(this)} href="#!"><span></span></a></div>
          <ul className="nav-list" ref={(e) => this.navList = e as HTMLElement}>
              <li>
                <NavLink exact to={'/'} activeClassName="active-nav" className="nav-link">Home<div className="item-line"></div></NavLink>
              </li>
              <li>
                <NavLink to={'/festivals'} activeClassName="active-nav" className="nav-link">Festivals<div className="item-line"></div></NavLink>
                <div className="item-line"></div>
              </li>
              <li>
                <NavLink to={'/about'}  activeClassName="active-nav" className="nav-link">About<div className="item-line"></div></NavLink>
                <div className="item-line"></div>
              </li>
              <li>
                <NavLink to={'/contact'} activeClassName="active-nav" className="nav-link">Contact<div className="item-line"></div></NavLink>
                <div className="item-line"></div>
              </li>
          </ul>
        </nav>
      </div>
      </section>
    );
  }

  private navToggleClick(): void {
    if(!this.navList || !this.navToggle){
      return;
    }
    
    $(this.navList).slideToggle();
    this.navToggle.classList.toggle('active');
  }
}