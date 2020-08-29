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
                                    ...state,
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
                {/* Return Audio Position */}
                <CustomSlider getAudioPosition={() => props.audioPosition} audioElement={props.audioElement}
                              handleScrubbing={props.handleScrubbing} classnames={'p-0 m-0'}/>
            </AppBar>
        );
    }
};
const mapStateToProps = state => ({
    handleScrubbing: state.functions.handleScrubbing,
    audioPosition: state.audioPosition,
    audioElement: state.audioElement,
    miniPlayerState: state.AppStates.miniPlayer,
    dialogState: state.AppStates.dialog,
    playPauseButton: state.playPauseButton,
    closeAll: state.closeAll,
    appState: state.AppStates
});
export default connect(mapStateToProps)(miniPlayer)
