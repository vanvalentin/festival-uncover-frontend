import React, { ReactNode } from "react";
import logo from '../assets/img/logo.png';
require('../styles/components/navbar.scss');

interface Props {
    currentPage: string
}

export default class Navbar extends React.Component<Props, object> {
    render() {  
      return (
        <section className="navigation">
        <div className="nav-container">
            <div className="brand">
            <a href="#!"><img src={logo}/></a>
            </div>
            <nav>
            <div className="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
            <ul className="nav-list">
                <li>
                <a href="#!">Home</a>
                <div className="item-line"></div>
                </li>
                <li>
                <a href="#!">Menu 1</a>
                </li>
                <li>
                <a href="#!">About</a>
                </li>
                <li>
                <a href="#!">Contact</a>
                </li>
            </ul>
            </nav>
        </div>
        </section>
      );
    }
  }