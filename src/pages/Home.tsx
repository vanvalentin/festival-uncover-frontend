import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";

import coachella from '../assets/img/festivals/coachella_2020.jpg';
import tmlWinter from '../assets/img/festivals/tml-winter-2020.jpg';
import edcVegas from '../assets/img/festivals/edc-vegas-2020.jpg';
import creamfields from '../assets/img/festivals/creamfields-2020.jpg';
import ultraMiami from '../assets/img/festivals/ultra-miami-2020.jpg';
import hellfest from '../assets/img/festivals/hellfest-2020.jpg';

require('../styles/home.scss');


interface IState {
    topFestivalsImgs: {title: string, img: string}[];
}

export default class Home extends React.Component<object, IState> {

    constructor(props: object) {
        super(props);
        const topFestivalsImgs: {title: string, img: string}[] = [];

        topFestivalsImgs.push({title: "Coachella 2020", img: coachella});
        topFestivalsImgs.push({title: "TML Winter 2020", img: tmlWinter});
        topFestivalsImgs.push({title: "EDC Vegas 2020", img: edcVegas});
        topFestivalsImgs.push({title: "Creamfields 2020", img: creamfields});
        topFestivalsImgs.push({title: "Ultra Miami 2020", img: ultraMiami});
        topFestivalsImgs.push({title: "Hellfest 2020", img: hellfest});

        this.state = {topFestivalsImgs};
    }

    componentDidMount(){
    }

    render() {
        return (
            <div className="home">
                <Navbar 
                    currentPage={"home"}
                />
                <div className="festivals-highlight-container">
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
        console.log(this.state.topFestivalsImgs);
        for(let i = 0; i < this.state.topFestivalsImgs.length; ++i){
            const currFestival = this.state.topFestivalsImgs[i];
            console.log(this.state.topFestivalsImgs);
            const bgImg: React.CSSProperties = {
                background: `url(${currFestival.img})` + " center center",
                backgroundSize: "cover"
            };
            console.log(bgImg);

            gridElmts.push(
                <div className={"block-"+ (i+1) +" block-container"}>
                    <div className="img" style={bgImg}>
                        <div className="title">{currFestival.title}</div>
                    </div>
                </div>);
        }

        return gridElmts;
    }

}