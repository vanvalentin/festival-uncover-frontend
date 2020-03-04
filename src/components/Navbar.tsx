import React, { ReactNode } from "react";
import {NavLink} from 'react-router-dom';
import logo from '../assets/img/logo_98x70.png';
import $ from "jquery";
import Home from "../pages/Home";
import Festivals from "../pages/Festivals";
import Contact from "../pages/Contact";
import About from "../pages/About";

require('../styles/components/navbar.scss');


interface IState {
  currentPage?: string
}

export default class Navbar extends React.Component<object, IState> {
  private navList: HTMLElement | undefined;
  private navToggle: HTMLElement | undefined;
  private menuIsHidden: boolean = true;

  constructor(props: object) {
    super(props);

    this.state = {
      currentPage: "home"
    }
  }


  render() {  
    return (
      <section className="navigation">
      <div className="nav-container">
        <div className="brand">
          <a href="#!"><img src={logo}/></a>
        </div>
        <nav>
          <div className="nav-mobile"><a id="nav-toggle" ref={(e) => this.navToggle = e as HTMLElement} onClick={this.navToggleClick.bind(this)} href="#!"><span></span></a></div>
          <ul className="nav-list" ref={(e) => this.navList = e as HTMLElement}>
              <li>
                <NavLink to={'/'} className="nav-link" onClick={(e) => this.setActiveNavPage("home")}>Home</NavLink>
                <div style={this.state.currentPage === "home" ? {} : {display:"none"}} className="item-line"></div>
              </li>
              <li>
                <NavLink to={'/festivals'} className="nav-link" onClick={(e) => this.setActiveNavPage("festivals")}>Festivals</NavLink>
                <div style={this.state.currentPage === "festivals" ? {} : {display:"none"}} className="item-line"></div>
              </li>
              <li>
                <NavLink to={'/about'} className="nav-link" onClick={(e) => this.setActiveNavPage("about")}>About</NavLink>
                <div style={this.state.currentPage === "about" ? {} : {display:"none"}} className="item-line"></div>
              </li>
              <li>
                <NavLink to={'/contact'} className="nav-link" onClick={(e) => this.setActiveNavPage("contact")}>Contact</NavLink>
                <div style={this.state.currentPage === "contact" ? {} : {display:"none"}} className="item-line"></div>
              </li>
          </ul>
        </nav>
      </div>
      </section>
    );
  }

  private setActiveNavPage(pageId: string){
    this.setState({
      currentPage: pageId
    })
  }

  private navToggleClick(): void {
    if(!this.navList || !this.navToggle){
      return;
    }
    
    $(this.navList).slideToggle();
    this.navToggle.classList.toggle('active');
  }
}