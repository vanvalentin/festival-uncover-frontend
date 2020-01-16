import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";
require('../styles/home.scss');

export default class Home extends React.Component<object, object> {
    render() {
        return (
            <div className="home">
                <Navbar 
                    currentPage={"home"}
                />
                <div className="festivals-highlight-container">
                    <div className="block-a">COACHELLA<br/>2020</div>
                    <div className="block-b"></div>
                    <div className="block-c"></div>
                    <div className="block-d"></div>
                    <div className="block-e"></div>
                    <div className="block-f"></div>
                </div>
            </div>
        );
    }

}