import React, { ReactNode } from "react";
import logo from '../assets/img/logo_98x70.png';
import $ from "jquery";

require('../styles/components/navbar.scss');


interface Props {
    currentPage: string
}

export default class Navbar extends React.Component<Props, object> {
  private navList: HTMLElement | undefined;
  private navToggle: HTMLElement | undefined;
  private menuIsHidden: boolean = true;


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
              <a href="#!">Home</a>
              <div style={this.props.currentPage === "home" ? {} : {display:"none"}} className="item-line"></div>
              </li>
              <li>
              <a href="#!">Festivals</a>
              <div style={this.props.currentPage === "festivals" ? {} : {display:"none"}} className="item-line"></div>
              </li>
              <li>
              <a href="#!">About</a>
              <div style={this.props.currentPage === "about" ? {} : {display:"none"}} className="item-line"></div>
              </li>
              <li>
              <a href="#!">Contact</a>
              <div style={this.props.currentPage === "contact" ? {} : {display:"none"}} className="item-line"></div>
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