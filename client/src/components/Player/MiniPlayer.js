import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import {Close, Pause, PlayCircleOutline} from "@material-ui/icons";
import React, {useEffect} from "react";
import store from "../../Redux/store/store";
import {setCurrentSongState} from "../../Redux/actions/actions";
import {connect} from "react-redux";
import CustomMiniPlayerSlider from "./CustomMiniPlayerSlider";


const MiniPlayer = (props) => {
    if (props.hidden) return <></>;
    const
        ComponentStates = props.componentState,
        audioElement = props.audioElement,
        videoElement = props.videoElement;
    const [button, setButton] = React.useState(<IconButton onClick={pauseAudio}><Pause color={'#fff'}/></IconButton>);

    async function handleScrubbing(v) {
        if (isFinite(v)) {
            audioElement.currentTime = v;
            // Update Redux State
            store.dispatch(setCurrentSongState(audioElement, videoElement, {...ComponentStates}));
        }
    }

    function cutCurrentSongState() {
        audioElement.pause();
        store.dispatch(setCurrentSongState(new Audio(''), videoElement, {
            Dialog: false,
            MiniPlayer: false
        }, props.reOpenDialog, props.playList));
    }

    function pauseAudio() {
        audioElement.pause();
        setButton(<IconButton onClick={playAudio}><PlayCircleOutline color={'#fff'}/></IconButton>);

    }

    function playAudio() {
        audioElement.play();
        setButton(<IconButton onClick={pauseAudio}><Pause
            color={'#fff'}/></IconButton>);
    }

    useEffect(() => {
        const Mounted = true;
        if (!Mounted) return null
    });

    if (!ComponentStates.dialog && ComponentStates.MiniPlayer && audioElement !== null || '' || undefined) {
        return (
            <AppBar color="primary" style={{
                position: 'fixed',
                top: "auto",
                bottom: '3.5rem',
                width: '100%',
                backgroundColor: '#FEFEFE',
            }} component={'div'} elevation={1} className={'d-inline-flex border-top'}>
                <div className={'d-inline-flex'}>
                    <div onClick={() => {
                        props.reOpenDialog();
                        // Update Redux State
                        store.dispatch(setCurrentSongState(audioElement, videoElement, {
                            Dialog: true,
                            MiniPlayer: false
                        }, props.reOpenDialog, props.playList));
                        if (props.componentState.Dialog) {
                            store.getState().currentSong.reOpenDialog();
                        }
                    }} className={'d-inline-flex'}>
                        <img src={videoElement.snippet.thumbnails.high.url} style={{width: '4rem', height: '3rem'}}
                             alt={'Song Image'}/>
                        <Typography component={'span'} className={'text-truncate p-2 pt-0` text-dark'}
                                    color={'#000'} style={{width: '10em'}}>{videoElement.snippet.title || 'Untitled'}
                        </Typography>
                    </div>
                    <div className={`float-right ml-auto`}>
                        {button}
                        <IconButton onClick={cutCurrentSongState}><Close/></IconButton>
                    </div>
                </div>
                <CustomMiniPlayerSlider/>
            </AppBar>
        );
    }
    return (<></>)
};

const mapStateToProps = state => ({
    componentState: state.currentSong.componentState,
    audioElement: state.currentSong.audioElement,
    videoElement: state.currentSong.videoElement,
    reOpenDialog: state.currentSong.reOpenDialog,
    playList: state.currentSong.playList
});
export default connect(mapStateToProps)(MiniPlayer);


/*
import AppBar from "@material-ui/core/AppBar";
import React from "react";
import store from "../../Redux/store/store";
import {setCurrentSongState} from "../../Redux/actions/actions";
import CustomSlider from "./CustomSlider";
import IconButton from "@material-ui/core/IconButton";
import {Close} from "@material-ui/icons";
import {connect} from "react-redux";
import Typography from "@material-ui/core/Typography";



const miniPlayer = (props) => {
    if (!props.appState.miniPlayer.hidden && props.audioElement.src !== null || '' || undefined) {
        return (
            <AppBar color="primary" style={{
                position: 'fixed',
                top: "auto",
                bottom: '3.5rem',
                width: '100%',
                backgroundColor: '#FEFEFE',
            }} component={'div'} elevation={1} className={'d-inline-flex border-top'}>
                <div className={'d-inline-flex'}>
                    <div onClick={
                        function () {
                            store.dispatch(
                                setCurrentSongState({
                                    ...store.getState().currentSong,
                                    AppStates: {
                                        ...props.appState,
                                        miniPlayer: {
                                            ...props.appState.miniPlayer,
                                            hidden: true,
                                        },
                                    }
                                })
                            );
                        }
                    }
                         className={'d-inline-flex'}>
                        <img src={props.thumbnail} style={{width: '4rem', height: '3rem'}}/>
                        <Typography component={'span'} className={'text-truncate p-2 pt-0` text-dark'}
                                    color={'#000'} style={{width: '10em'}}>{props.video.snippet.title || 'Untitled'}
                        </Typography>
                    </div>
                    <div className={`float-right ml-auto`}>
                        {props.playPauseButton}
                        <IconButton onClick={props.closeAll}><Close/></IconButton>
                    </div>
                </div>
                <CustomSlider getAudioPosition={() => props.audioPosition} audioElement={props.audioElement}
                              handleScrubbing={props.handleScrubbing} classnames={'p-0 m-0'}/>
            </AppBar>
        );
    }
};
const mapStateToProps = state => ({
    handleScrubbing: state.currentSong.functions.handleScrubbing,
    audioPosition: state.currentSong.audioPosition,
    audioElement: state.currentSong.audioElement,
    miniPlayerState: state.currentSong.AppStates.miniPlayer,
    dialogState: state.currentSong.AppStates.dialog,
    playPauseButton: state.currentSong.playPauseButton,
    closeAll: state.currentSong.closeAll,
    appState: state.currentSong.AppStates
});
export default connect(mapStateToProps)(miniPlayer)
*/
