import React from 'react';
import './home.css';
import {Container, CssBaseline, Typography} from "@material-ui/core";
import keys from "../../api/keys/keys";
import endPoints from "../../api/endpoints/endpoints";
import SongCard from "../SongCard/SongCard";
import CustomBottomNavigation from "../CustomBottomNavigation/CustomBottomNavigation";
import CustomAppBar from "../CustomAppBar/CustomAppBar";


const HomeComponent = () => {
    const [popular, setPopular] = React.useState(() => {
        fetch(endPoints.mostPopularFake(keys.youtube))
            .then(v => v.json())
            .then(value => {
                setPopular(value.items.map((video, index) => {
                    return (<SongCard key={index} video={video}/>)
                }));
            });
    });
    return (
        <div className="home">
            <CssBaseline/>
            <audio id="wavSource" type="audio/webm" className={'d-none'} controls/>
            <CustomAppBar/>
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
            <CustomBottomNavigation/>
        </div>
    );
};

HomeComponent.propTypes = {};

HomeComponent.defaultProps = {};

export default HomeComponent;
