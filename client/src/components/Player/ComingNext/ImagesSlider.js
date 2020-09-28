import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {pure} from "recompose";
import Grow from "@material-ui/core/Grow";
import {FocusNode} from "@please/lrud";

const CommingNextImagesSlider = (props) => {
	if (!props.componentState.Dialog) return <></>;
	const [scrubbing, setScrubbing] = React.useState(props.audioElement.volume * 100);
	return (
		<div className={`cardSlider text-left Slider ${!props.isTv ? "mb-3" : "py-0 my-0"}`}
			 onload="document.querySelector('.SongNextSliderSelected').scrollIntoView({ behavior: 'smooth', block: 'center'  });"
			 style={{scrollSnapType: "both mandatory"}}>
			{
				props.playList.list.items.map((value, index) => (
					<Grow in={true} key={index}>
						<FocusNode className={"ImageSliderIMG"}>
							<img src={value.snippet.thumbnails.high.url}
								 className={`image mb-0 mx-3 img-fluid rounded shadow ${index === props.playList.index ? "SongNextSliderSelected" : ""}`}
								 onerror={"this.onerror=null;this.src=http://docs-kabeersnetwork-kview-app-sta.rf.gd/Private/uploads/5f6d7b19418f3---images.png"}
								 onClick={() => {
									 props.playSong({video: value, index: index});
								 }}
								 style={{
									 scrollSnapAlign: "center",
									 marginTop: "0",
									 width: index === props.playList.index && props.isTv ? "17rem" : "15rem",
									 height: index === props.playList.index && props.isTv ? "17rem" : "15rem",
									 border: index === props.playList.index ? "white solid 0.1rem" : null
								 }} alt={"Thumbnail"}/>
						</FocusNode>
					</Grow>
				))
			}
		</div>
	);
};

CommingNextImagesSlider.propTypes = {
	componentState: PropTypes.object,
	audioElement: PropTypes.object,
	videoElement: PropTypes.object,
	playList: PropTypes.object,
};
CommingNextImagesSlider.defaultProps = {};

const mapStateToProps = state => ({
	componentState: state.currentSong.componentState,
	audioElement: state.currentSong.audioElement,
	videoElement: state.currentSong.videoElement,
	playList: state.currentSong.playList
});
export default connect(mapStateToProps)(pure(CommingNextImagesSlider));

