import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";

export default class Home extends React.Component<object, object> {
    render() {
        return (
        <div>
            <Navbar 
                currentPage={"home"}
            />
        </div>
        );
    }

}