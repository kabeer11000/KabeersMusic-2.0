import React from 'react';
import './home.css';
import {Container, CssBaseline, Typography} from "@material-ui/core";
import keys from "../../api/keys/keys";
import endPoints from "../../api/endpoints/endpoints";
import SongCard from "../SongCard/SongCard";
import {getSong} from "../../functions/songs";

let ListArray = [];
const HomeComponent = (props) => {
    const [popular, setPopular] = React.useState(() => {
        fetch(endPoints.mostPopularFake(keys.youtube))
            .then(v => v.json())
            .then(value => {
                ListArray = value;
                setPopular(value.items.map((video, index) => {
                    return (<SongCard onPlay={PlaySong} key_={index} key={index} video={video}/>)
                }));
            });
    });

    function PlaySong(data, index) {
        getSong(keys.youtube, data.id).then(value => {
            if (value) {
                //Avoid the Promise Error
                setTimeout(function () {
                    return props.appState({
                        uri: value,
                        thumbnail: data.snippet.thumbnails.maxres.url,
                        video: data,
                        list: ListArray,
                        index: index
                    });
                }, 100);
            }
            /* setAudioElemet(<div/>); setAudioElemet(<Player audio={new Audio(value)} thumbnail={data.snippet.thumbnails.maxres.url} video={data}/> */
        });
    }

    return (
        <div className="home">
            <CssBaseline/>
            <div style={{marginTop: '5rem'}}>
                <Typography variant={'h5'} className={'pl-3 text-left'}>
                    Trending Now
                </Typography>
                <Container maxWidth="xl" className={'px-0 mx-0'}>
                    <div className={'cardSlider Slider'}>
                        {popular}
                    </div>
                </Container>
            </div>
        </div>
    );
};

HomeComponent.propTypes = {};

HomeComponent.defaultProps = {};

export default HomeComponent;
