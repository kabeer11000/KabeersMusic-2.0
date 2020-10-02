import React, {useEffect} from "react";
import Slider from "@material-ui/core/Slider";
import store from "../../Redux/store/store";
import {setCurrentSongState} from "../../Redux/actions/actions";
import {connect} from "react-redux";
import {pure} from "recompose";

const CustomMiniPlayerSlider = (props) => {
	if (!props.componentState.MiniPlayer) {
		return <></>;
	}
	const [scrubbing, setScrubbing] = React.useState(props.audioElement.currentTime);
	useEffect(() => {
		if (props.componentState.MiniPlayer) {
			setInterval(() => !props.audioElement.paused && props.componentState.MiniPlayer ? setScrubbing(props.audioElement.currentTime) : null, 1000);
		}
	}, []);

	async function handleScrubbing(v) {
		if (isFinite(v)) {
			setScrubbing(v);
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
		className={"p-0 m-0"}
		defaultValue={0}
		value={scrubbing}
		min={0.0}
		color={"primary"}
		max={props.audioElement.duration}
		onChange={async (v, x) => handleScrubbing(x)}
	/>);
};
const mapStateToProps = state => ({
	componentState: state.currentSong.componentState,
	audioElement: state.currentSong.audioElement,
});
export default connect(mapStateToProps)(pure(CustomMiniPlayerSlider));
