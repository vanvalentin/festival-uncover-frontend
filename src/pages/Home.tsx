import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";

import coachella from '../assets/img/festivals/coachella_2020.jpg';
import tmlWinter from '../assets/img/festivals/tml-winter-2020.jpg';
import edcVegas from '../assets/img/festivals/edc-vegas-2020.jpg';
import creamfields from '../assets/img/festivals/creamfields-2020.jpg';
import ultraMiami from '../assets/img/festivals/ultra-miami-2020.jpg';
import hellfest from '../assets/img/festivals/hellfest-2020.jpg';
import { Link } from "react-router-dom";

require('../styles/home.scss');


interface IState {
    topFestivalsImgs: {id: number, title: string, img: string}[];
}

export default class Home extends React.Component<object, IState> {

    constructor(props: object) {
        super(props);
        const topFestivalsImgs: {id: number, title: string, img: string}[] = [];

        topFestivalsImgs.push({id: 1, title: "Coachella 2020", img: coachella});
        topFestivalsImgs.push({id: 2, title: "TML Winter 2020", img: tmlWinter});
        topFestivalsImgs.push({id: 3, title: "EDC Vegas 2020", img: edcVegas});
        topFestivalsImgs.push({id: 4, title: "Creamfields 2020", img: creamfields});
        topFestivalsImgs.push({id: 5, title: "Ultra Miami 2020", img: ultraMiami});
        topFestivalsImgs.push({id: 6, title: "Hellfest 2020", img: hellfest});

        this.state = {topFestivalsImgs};
    }

    componentDidMount(){
    }

    render() {
        return (
            <div className="home">
                <div className="homepage-container">
                    <div className="intro">
                        <div className="text"><span>Browse, listen and discover new artists from the lineup of your favorite festival.</span></div>
                        <div className="separator-line"></div>
                    </div>
                    <h2>Most popular festivals</h2>
                    {this.createTopFestivalGrid()}
                </div>
            </div>
        );
    }

    createTopFestivalGrid(): JSX.Element[] {
        if(!this.state.topFestivalsImgs){
            return [];
        }

        const gridElmts: JSX.Element[] = [];
        for(let i = 0; i < this.state.topFestivalsImgs.length; ++i){
            const currFestival = this.state.topFestivalsImgs[i];

            const bgImg: React.CSSProperties = {
                background: `url(${currFestival.img})` + " center center",
                backgroundSize: "cover"
            };

            gridElmts.push(
                <Link to={'/festival/'+currFestival.id} className={"block-"+ (i+1) +" block-container"}>
                    <div className="img" style={bgImg}>
                        <div className="title-container">
                            <div className="title">{currFestival.title}</div>
                        </div>
                    </div>
                </Link>);
        }

        return gridElmts;
    }

}