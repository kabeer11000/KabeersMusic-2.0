import React from "react";
import Slider from "@material-ui/core/Slider";
import store from "../../Redux/store/store";
import {setCurrentSongState} from "../../Redux/actions/actions";
import {connect} from "react-redux";
import {pure} from "recompose";

const CustomSlider = (props) => {
	if (!props.componentState.Dialog) return <></>;
	const [scrubbing, setScrubbing] = React.useState(props.audioElement.volume * 100);


	async function handleScrubbing(v) {
		if (isFinite(v)) {
			setScrubbing(v);
			props.audioElement.volume = v / 100;
			// Update Redux State
			const store_state = store.getState().currentSong;
			store.dispatch(setCurrentSongState(
				props.audioElement,
				store_state.videoElement,
				store_state.componentState,
				store_state.reOpenDialog,
				store_state.playList));

		}
	}

	return (
		<Slider
			className={"container -PlayerSlider"}
			defaultValue={props.audioElement.volume * 100}
			value={scrubbing}
			min={0.0}
			max={100}
			onChange={async (v, x) => handleScrubbing(x)}
		/>
	);
};

const mapStateToProps = state => ({
	componentState: state.currentSong.componentState,
	audioElement: state.currentSong.audioElement,
});
export default connect(mapStateToProps)(pure(CustomSlider));
