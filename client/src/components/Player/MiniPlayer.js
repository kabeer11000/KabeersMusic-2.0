import {AppBar, Grow, IconButton, Typography} from "@material-ui/core";
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
        // TODO Because you lisened to travis scott
        // Record artist name to database for that user
        // Search Yt for artist name
        // Show Because You Listened to travis scott

        const Mounted = true;
        if (!Mounted) return null;
        document.addEventListener('swiped-up', function (e) {
            props.reOpenDialog();
            // Update Redux State
            store.dispatch(setCurrentSongState(audioElement, videoElement, {
                Dialog: true,
                MiniPlayer: false
            }, props.reOpenDialog, props.playList));
            if (props.componentState.Dialog) {
                store.getState().currentSong.reOpenDialog();
            }
        });
    });

    if (!ComponentStates.dialog && ComponentStates.MiniPlayer && audioElement !== null || '' || undefined) {
        return (
            <Grow in={true}>
                <AppBar color={'slideDown primary.miniPlayer.main'} style={{
                    position: 'fixed',
                    top: "auto",
                    bottom: '3.5rem',
                    width: '100%',
                }} component={'div'} elevation={1} className={'d-inline-flex KabeersMiniPlayerContainer'}>
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
                        <img src={videoElement.snippet.thumbnails.high.url} style={{
                            width: '4rem',
                            height: '3rem',
                            maxWidth: '5rem!important',
                            maxHeight: '4rem!important'
                        }}
                             alt={'Song Image'} className={'KabeersMiniPlayerImage'}/>
                        <Typography component={'span'} className={'text-truncate p-2 KabeersMiniPlayerText'}
                                    color={'#000'} style={{
                            width: '10em',
                            color: 'primary.miniPlayer.text'
                        }}>{videoElement.snippet.title || 'Untitled'}
                        </Typography>
                        </div>
                        <div className={`float-right ml-auto`}>
                            {button}
                            <IconButton onClick={cutCurrentSongState}><Close/></IconButton>
                        </div>
                    </div>
                    <CustomMiniPlayerSlider/>
                </AppBar>
            </Grow>
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
