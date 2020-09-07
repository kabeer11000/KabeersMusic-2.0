import React, {useEffect} from 'react';
import './home.css';
import {Button} from "@material-ui/core";
import keys from "../../api/keys/keys";
import endPoints from "../../api/endpoints/endpoints";
import SongCard from "../SongCard/SongCard.lazy";
import {getSong} from "../../functions/songs";
import {useSnackbar} from 'notistack';
import {initAuth} from "../../functions/auth";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {connect} from "react-redux";
import fetch from "../../functions/fetchWithTimeOut";
import Preloader from "../Preloader/Preloader";
import uniqid from "../../functions/Helper/randomKey";
const HomeComponent = (props) => {
    const {enqueueSnackbar, closeSnackbar} = useSnackbar();
    const [other, setOther] = React.useState(() => {
        if (!navigator.onLine) return (
            <div className={'errorPage'}
                 style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                <img src={'./assets/icons/darkmode_nothingfound.svg'} style={{width: '8rem', height: "auto"}}
                     alt={'Kabeers Music Logo'}/>
                <br/>
                <div className={"text-truncate"}>{'No Internet Connection'}</div>
                <Button onClick={Load}>Retry</Button>
            </div>
        );
    });

    function Load() {
        initAuth().then(token => {
            fetch(endPoints.getFeedFake(keys.youtube), {
                headers: new Headers({
                    'Authorization': `Bearer ${token}`
                })
            }, 5000)
                .then(value => value.ok ? value.json() : null)
                .then(value => {
                    setOther(
                        <React.Fragment>
                            {
                                value.items.map(value1 => (
                                    <div key={uniqid()}>
                                        <Typography variant={'h5'} className={'pl-3 text-left'}>
                                            {value1.title}
                                        </Typography>
                                        <Container maxWidth="xl" className={'px-0 mx-0'}>
                                            <div className={'cardSlider Slider'}>
                                                {value1.songs.items.map((video, index) => <SongCard onPlay={PlaySong}
                                                                                                    list={value1.songs}
                                                                                                    key_={index}
                                                                                                    key={index}
                                                                                                    video={video}
                                                                                                    thumbnail={video.snippet.thumbnails.high.url}/>)}
                                            </div>
                                        </Container>
                                    </div>
                                ))
                            }
                        </React.Fragment>
                    );
                }).catch(e => {
                setOther(errorPage('An error Occured Please Re login', <Button onClick={() => {
                    window.location.href = '/auth/redirect';
                }}>Login</Button>));
            });
        }).catch(e => {
            enqueueSnackbar('Failed to Load Songs');
            setOther(errorPage());
        });
    }

    const errorPage = (message = 'No Internet Connection', button = <Button onClick={Load}>Retry</Button>) => (
        <div className={'errorPage'}
             style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
            <img src={'./assets/icons/darkmode_nothingfound.svg'} style={{width: '8rem', height: "auto"}}
                 alt={'Kabeers Music Logo'}/>
            <br/>
            <div className={"text-truncate"}>{message}</div>
            {button}
        </div>
    );

    function PlaySong(data, index, list) {
        getSong(typeof data.id === 'object' ? data.id.videoId : data.id).then(value => {
            if (value) {
                //Avoid the Promise Error
                props.appState({
                    uri: value,
                    thumbnail: data.snippet.thumbnails.high.url,
                    video: data,
                    list: list,
                    index: index
                });
            }
        }).catch(e => {
            console.log('Cannot Play Song');
            enqueueSnackbar('Cannot Play Song');
        });
    }

    useEffect(() => {
        Load();
    }, []);
    return (
        <div className="home mb-5" style={{minHeight: "70vh"}}>
            <div style={{marginTop: '5rem'}}>
                {props.homeComponents ? props.homeComponents : <div>{other}</div>}
                {other ? null : <Preloader/>}
            </div>
        </div>
    );
};

HomeComponent.propTypes = {};
HomeComponent.defaultProps = {};

const mapStateToProps = state => ({
    homeComponents: state.home
});
export default connect(mapStateToProps)(HomeComponent);
/// OLD
/*
            <ReactPullToRefresh onRefresh={() => {
                setOther(null);
                Load()
            }}>
            </ReactPullToRefresh>
 */
