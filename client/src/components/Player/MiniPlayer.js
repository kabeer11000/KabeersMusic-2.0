import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import {Close} from "@material-ui/icons";
import CustomSlider from "./CustomSlider";
import React from "react";
import {Button} from "@material-ui/core";
import store from "../../Redux/store/store";
import {setCurrentSongState} from "../../Redux/actions/actions";
import {connect} from "react-redux";


const MiniPlayer = (props) => {
    const
        ComponentStates = props.componentState,
        audioElement = props.audioElement,
        videoElement = props.videoElement;

    async function handleScrubbing(v) {
        if (isFinite(v)) {
            audioElement.currentTime = v;
            // Update Redux State
            store.dispatch(setCurrentSongState(audioElement, videoElement, {...ComponentStates}));
        }
    }

    function cutCurrentSongState() {
        audioElement.pause();
        store.dispatch(setCurrentSongState(new Audio(''), {}, {
            Dialog: false,
            MiniPlayer: false
        }, props.reOpenDialog, props.playList));
    }

    if (!ComponentStates.dialog && ComponentStates.MiniPlayer && audioElement.src !== null || '' || undefined) {
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
                        //store.getState().currentSong.reOpenDialog();
                        // Update Redux State
                        store.dispatch(setCurrentSongState(audioElement, videoElement, {
                            Dialog: true,
                            MiniPlayer: false
                        }, props.reOpenDialog, props.playList));

                    }} className={'d-inline-flex'}>
                        <img src={videoElement.snippet.thumbnails.standard.url} style={{width: '4rem', height: '3rem'}}
                             alt={'Song Image'}/>
                        <Typography component={'span'} className={'text-truncate p-2 pt-0` text-dark'}
                                    color={'#000'} style={{width: '10em'}}>{videoElement.snippet.title || 'Untitled'}
                        </Typography>
                    </div>
                    <div className={`float-right ml-auto`}>
                        <Button>PlayPauseButton</Button>
                        <IconButton onClick={cutCurrentSongState}><Close/></IconButton>
                    </div>
                </div>
                <CustomSlider audioElement={audioElement}
                              handleScrubbing={handleScrubbing} classnames={'p-0 m-0'}/>
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
