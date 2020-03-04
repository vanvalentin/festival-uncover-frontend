import React, { ReactNode } from "react";
import { RouteComponentProps } from "react-router-dom";
import Performance from "../components/Performance";

require('../styles/festival.scss');

interface IFestivalParams {
    festivalId: number
}

interface IState {
    dataLoaded: boolean,
    festivalData: any,
    spotifyToken?: string
}

export default class Festival extends React.Component<RouteComponentProps<{}>, IState> {

    private client_id = '5a9205baa12e473ba0387efbfe155917'; // Spotify client id
    private client_secret = '0443800e49d04623a7f2fd54d753c467'; // Spotify secret

    constructor(props: RouteComponentProps<{}>){
        super(props);
        this.state = {
            dataLoaded: false,
            festivalData: undefined,
            spotifyToken: undefined
        }
    }

    public async componentDidMount(){
        const params = this.props.match.params as IFestivalParams;
        let festivalData: any = {};

        const json = await fetch('festival_data.json')
            .then((r) => r.json());

        for(const d of json.data){
            if(Number(d.id) === Number(params.festivalId)){
                festivalData = d;
                break;
            }
        }

        const token = await fetch("https://accounts.spotify.com/api/token", {
            body: "grant_type=client_credentials",
            headers: {
                Authorization: 'Basic ' + (new Buffer(this.client_id + ':' + this.client_secret).toString('base64')),
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST"
        }).then((r) => r.json());

        this.setState({
            dataLoaded: true,
            festivalData,
            spotifyToken: token.access_token
        })
    }

    render() {
        if(!this.state.dataLoaded){
            return (
                <div className="festival">
                    Loading...
                </div>
            );
        }
        
        return (
            <div className="festival">
                <div className="festival-container">
                    <h1>{this.state.festivalData.name}</h1>
                    <div className="performances">
                        {this.createPerformances()}
                    </div>
                </div>
            </div>
        );
    }

    private createPerformances(): JSX.Element[] {
        const result: JSX.Element[] = []; 
        for(const data of this.state.festivalData.performances){
            result.push(
                <Performance
                    spotifyToken={this.state.spotifyToken}
                    youtubeApiKey={"AIzaSyAbvhDzwcKvQKFB2kxIATGQpdzDpG7WCtQ"}
                    artist={data.artist}
                    scene={data.scene}
                    startTime={data.startTime}
                    endTime={data.endTime}
                    genres={data.genres}
                    tags={data.tags}
                />
            );
        }

        return result;
    }
}