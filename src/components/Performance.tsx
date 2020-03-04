import React, { ReactNode } from "react";
import { google } from 'googleapis';

require('../styles/components/performance.scss');

interface IProps {
    spotifyToken?: string;
    youtubeApiKey?: string;
    artist: string;
    startTime?: Date;
    endTime?: Date;
    scene?: string;
    genres?: string[];
    tags?: string;
    img?: string;
}

interface IState {
    loaded: boolean
    error: "none" | "couldNotFindArtist"
}

export default class Performance extends React.Component<IProps, IState> {
    private topTracksNames: string[] = [];


    constructor(props: IProps) {
        super(props);

        this.state = {
            loaded: false,
            error: "none"
        }
    }

    async componentDidMount(){
        const escapedArtistName: string = this.props.artist.replace(/\s/g, '%20');

        const respArtists = await fetch("https://api.spotify.com/v1/search?q="+escapedArtistName+"&type=artist", {
            headers: {
                Authorization: 'Bearer ' + this.props.spotifyToken
            },
            method: "GET"
        }).then((r) => r.json());

        if(respArtists.artists.items.length <= 0){
            this.setState({
                error: 'couldNotFindArtist'
            });

            return;
        }

        const respTracks = await fetch("https://api.spotify.com/v1/artists/"+respArtists.artists.items[0].id+"/top-tracks?country=US", {
            headers: {
                Authorization: 'Bearer ' + this.props.spotifyToken
            },
            method: "GET"
        }).then((r) => r.json());

        for(let i = 0; i < 3 && i < respTracks.tracks.length; ++i){
            this.topTracksNames.push(respTracks.tracks[i].name);
        }

        this.setState({
            loaded: true
        })
    }

    render() {
        if(!this.props.spotifyToken){
            return <div className="performance">Spotify Token not found.</div>
        }

        if(!this.state.loaded){
            return <div className="performance">Loading...</div>
        }

        return (
            <div className="performance">
                <h2>{this.props.artist}</h2>
                <div>
                    {this.createTopTracksPlayers()}
                </div>
            </div>
        );
    }

    private createTopTracksPlayers(): JSX.Element[] {
        const result: JSX.Element[] = []; 
        for(let track of this.topTracksNames){
            this.getYoutubeVideo(this.props.artist, track);
            result.push(<div>{track}</div>);
        }

        return result;
    }

    private async getYoutubeVideo(artistName: string, trackName: string){
        const escapedSearch: string = artistName.replace(/\s/g, '%20') + "%20" + trackName.replace(/\s/g, '%20');

        const resp = await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="+escapedSearch+"&key="+this.props.youtubeApiKey, {
            headers: {
                Accept: "application/json",
            }
        }).then((r) => r.json());

        console.log(resp);
    }
}