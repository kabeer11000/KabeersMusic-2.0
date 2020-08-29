import React from "react";
import Slider from "@material-ui/core/Slider";
import store from "../../Redux/store/store";
import {setCurrentSongState} from "../../Redux/actions/actions";
import {connect} from "react-redux";

const CustomSlider = (props) => {
    const [scrubbing, setScrubbing] = React.useState(0);
    setInterval(() => !props.audioElement.paused ? setScrubbing(props.audioElement.currentTime) : null, 1000);

    async function handleScrubbing(v) {
        if (isFinite(v)) {
            props.audioElement.currentTime = v;
            // Update Redux State
            store.dispatch(setCurrentSongState(
                props.audioElement,
                store.getState().currentSong.videoElement,
                store.getState().currentSong.componentState,
                store.getState().currentSong.reOpenDialog,
                store.getState().currentSong.playList));
        }
    }

    return (<Slider
        className={props.classnames}
        defaultValue={0}
        value={scrubbing}
        min={0.0}
        color={'secondary'}
        max={props.audioElement.duration}
        valueLabelDisplay="auto"
        onChangeCommitted={async (v, x) => handleScrubbing(x)}
    />);
};
const mapStateToProps = state => ({
    componentState: state.currentSong.componentState,
    audioElement: state.currentSong.audioElement,
    videoElement: state.currentSong.videoElement,
});
export default connect(mapStateToProps)(CustomSlider);
