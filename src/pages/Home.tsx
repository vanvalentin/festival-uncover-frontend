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
            </div>
        );
    }

}