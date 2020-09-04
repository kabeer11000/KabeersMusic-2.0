import React from 'react';
import './home.css';
import {Button, CssBaseline} from "@material-ui/core";
import keys from "../../api/keys/keys";
import endPoints from "../../api/endpoints/endpoints";
import SongCard from "../SongCard/SongCard.lazy";
import {getSong} from "../../functions/songs";
import {useSnackbar} from 'notistack';
import {initAuth} from "../../functions/auth";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {connect} from "react-redux";

let ListArray = [];

/*

    if (popular && other) {
        store.dispatch(setHomeScreen(<div>{popular}{other}</div>));
    }
 */
const HomeComponent = (props) => {
    const {enqueueSnackbar, closeSnackbar} = useSnackbar();
    const [other, setOther] = React.useState(() => {
        if (!navigator.onLine) return errorPage();
        initAuth().then(token => {
            fetch(endPoints.getFeedFake(keys.youtube), {
                headers: new Headers({
                    'Authorization': `Bearer ${token}`
                })
            })
                .then(value => value.json())
                .then(value => {

                    // ListArray = value.items.songs.items;
                    setOther(
                        <React.Fragment>
                            {
                                value.items.map(value1 => (
                                    <div>
                                        <Typography variant={'h5'} className={'pl-3 text-left'}>
                                            {value1.title}
                                        </Typography>
                                        <Container maxWidth="xl" className={'px-0 mx-0'}>
                                            <div className={'cardSlider Slider'}>
                                                {value1.songs.items.map((video, index) => {
                                                    return (<SongCard onPlay={PlaySong} list={value1.songs} key_={index}
                                                                      key={index} video={video}
                                                                      thumbnail={video.snippet.thumbnails.high.url}/>);
                                                })}
                                            </div>
                                        </Container>
                                    </div>
                                ))
                            }
                        </React.Fragment>
                    );
                }).catch(e => {
                enqueueSnackbar('Failed to Load Songs');
                // setOther(errorPage('An error Occured Please Re login'));
                window.location.href = '/auth/redirect';
            });
        })
    });

    function handleReloadButton() {
    }

    const errorPage = (message = 'No Internet Connection') => (
        <div className={'errorPage'}
             style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
            <img src={'./assets/icons/darkmode_nothingfound.svg'} style={{width: '8rem', height: "auto"}}
                 alt={'Kabeers Music Logo'}/>
            <br/>
            <div>{message}</div>
            <Button onClick={handleReloadButton}>Retry</Button>
        </div>
    );

    function PlaySong(data, index, list) {
        let videoID = '';
        if (typeof data.id === 'object') videoID = data.id.videoId;
        if (typeof data.id === 'string') videoID = data.id;
        getSong(videoID).then(value => {
            if (value) {
                //Avoid the Promise Error
                setTimeout(function () {
                    props.appState({
                        uri: value,
                        thumbnail: data.snippet.thumbnails.high.url,
                        video: data,
                        list: list,
                        index: index
                    });
                }, 100);
            }
            /* setAudioElemet(<div/>); setAudioElemet(<Player audio={new Audio(value)} thumbnail={data.snippet.thumbnails.maxres.url} video={data}/> */
        }).catch(e => {
            console.log('Cannot Play Song');
            enqueueSnackbar('Cannot Play Song');
        });
    }

    return (
        <div className="home mb-5">
            <CssBaseline/>
            <div style={{marginTop: '5rem'}}>
                {props.homeComponents ? props.homeComponents : <div>{other}</div>}
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
