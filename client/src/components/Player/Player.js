import React, {useEffect} from "react";
import "./Player.css";
import {AppBar, Avatar, CircularProgress, Dialog, IconButton, Slide, Toolbar, Typography} from "@material-ui/core";
import {ArrowBack, Done, GetApp, Loop, Pause, PlayCircleOutline, SkipNext, SkipPrevious} from "@material-ui/icons";
import {deleteDownloadedSong, downloadSong, getSong, isOfflineAvailable, saveToHistory} from "../../functions/songs";
import CustomSlider from "./CustomSlider";
import {setCurrentSongState} from "../../Redux/actions/actions";
import store from "../../Redux/store/store";
import {connect} from "react-redux";
import {useSnackbar} from "notistack";
import ComingNext from "./ComingNext/ComingNext";
import {saveHistoryToServer} from "../../functions/Helper/history";
import {useDialog} from "muibox";
import PropTypes from "prop-types";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const Player = (props) => {
	if (props.hidden) return null;
	const dialog = useDialog();
	const [open, setOpen] = React.useState(store.getState().currentSong.componentState.Dialog);
	const [button, setButton] = React.useState(<IconButton color={"#60B18A"} colorSecondary={"#60B18A"}
														   onClick={pauseAudio}><Pause color={"#fff"}/></IconButton>);
	const [looping, setLooping] = React.useState(<IconButton color={"primary.player.invertButtons.main"}
															 style={{backgroundColor: "primary.player.invertButtons.main"}}
															 onClick={() => {
																 audioElement.loop = true;
																 setLooping(<IconButton
																	 color={"primary.player.invertButtons.invert"}
																	 onClick={() => {
																		 audioElement.loop = false;
																	 }}
																	 style={{backgroundColor: "primary.player.invertButtons.invert"}}><Loop/></IconButton>);
															 }}><Loop/></IconButton>);
	const audioElement = props.audioElement;//deleteDownload
	const [downloadButton, setDownloadButton] = React.useState(<div/>);
	const {enqueueSnackbar, closeSnackbar} = useSnackbar();

	const handleClose = () => {
		addToReduxState([false, true]);
		setOpen(false);
	};

	const ReOpen = () => {
		addToReduxState([true, false]);
		setOpen(true);
	};

	function addToReduxState(AppState) {
		if (!AppState) AppState = [store.getState().currentSong.componentState.Dialog, store.getState().currentSong.componentState.MiniPlayer];
		store.dispatch(setCurrentSongState(audioElement, props.videoElement, {
			Dialog: AppState[0],
			MiniPlayer: AppState[1]
		}, ReOpen, {index: props.playList.index, list: props.playList.list}));
	}

	async function addToHistory() {
		saveToHistory({
			videoId: props.videoElement.id,
			title: props.videoElement.snippet.title,
			channelTitle: props.videoElement.snippet.channelTitle,
			tags: props.videoElement.snippet.tags,
			thumbnail: props.videoElement.snippet.thumbnails.high.url,
			rating: 0
		});
	}

	function playAudio() {
		audioElement.play();
		setButton(<IconButton onClick={pauseAudio}><Pause
			color={"#fff"}/></IconButton>);
	}

	function downloadAudio() {
		if (!navigator.onLine) return enqueueSnackbar("No Connection, Download Failed");
		let videoID = "";
		if (typeof props.videoElement.id === "object") videoID = props.videoElement.id.videoId;
		else if (typeof props.videoElement.id === "string") videoID = props.videoElement.id;

		downloadSong({
			videoId: videoID,
			rating: 0,
			title: props.videoElement.snippet.title,
			channelTitle: props.videoElement.snippet.channelTitle,
			tags: props.videoElement.snippet.tags,
			videoElement: props.videoElement,
			success: () => {
				//enqueueSnackbar('Download Complete');
				setDownloadButton(<IconButton onClick={deleteDownload}><Done/></IconButton>);
			},
			error: () => {
				enqueueSnackbar("Download Failed");
				setDownloadButton(<IconButton onClick={downloadAudio}><GetApp/></IconButton>);
			}
		});
		// enqueueSnackbar('Download Started');
		setDownloadButton(<IconButton onClick={deleteDownload}
									  style={{width: "2rem!important", height: "2rem!important"}}><CircularProgress
			color={"primary.light"}/></IconButton>);
	}

	function pauseAudio() {
		audioElement.pause();
		setButton(<IconButton className={"PlayerPlayPauseBtn"} onClick={playAudio}><PlayCircleOutline
			color={"#fff"}/></IconButton>);
	}

	function addMediaSession(data) {
		if ("mediaSession" in navigator) {
			navigator.mediaSession.metadata = new window.MediaMetadata({
				title: data.title,
				artist: data.artist,
				album: data.album,
				artwork: data.artwork
			});
			navigator.mediaSession.setActionHandler("play", playAudio);
			navigator.mediaSession.setActionHandler("pause", pauseAudio);
		}
	}


	useEffect(() => {
		if (!audioElement.paused) return;
		audioElement.play();
		addMediaSession({
			artist: props.videoElement.snippet.channelTitle,
			title: props.videoElement.snippet.title,
			artwork: [{
				src: props.videoElement.snippet.thumbnails.high.url,
				sizes: "96x96",
				type: "image/png"
			}]
		});
		addToHistory();
		saveHistoryToServer(props.videoElement);
		addToReduxState([true, false]);
		let videoID = "";
		if (typeof props.videoElement.id === "object") videoID = props.videoElement.id.videoId;
		if (typeof props.videoElement.id === "string") videoID = props.videoElement.id;

		isOfflineAvailable(videoID).then((v) => {
			setDownloadButton(v ? <IconButton onClick={deleteDownload}><Done/></IconButton> :
				<IconButton onClick={downloadAudio}><GetApp/></IconButton>);
			console.log(v);
		});
	}, []);

	function SkipSong(data) {
		let videoID = "";
		if (typeof data.video.id === "object") videoID = data.video.id.videoId;
		if (typeof data.video.id === "string") videoID = data.video.id;
		getSong(videoID).then(value => {
			if (value) {
				setOpen(false);
				addToReduxState([false, false]);
				try {
					props.changes({
						uri: value,
						thumbnail: data.video.snippet.thumbnails.high.url,
						video: data.video,
						list: props.playList.list,
						index: data.index
					}).then(() => {
						props = {};
					});
				} catch (e) {
					console.log(e);
				}
			}
		});
	}

	async function deleteDownload() {
		const config = {
			title: (
				<div className={"k-dialog-body-title text-truncate"}>Delete From Downloads</div>) || "Nothing Here!",
			message: (<div className={"k-dialog-body-inner"}>
				<div className={"d-flex justify-content-center mb-3"}>
					<Avatar src={props.videoElement.snippet.thumbnails.high.url} alt={"Song Thumbnail"}/>
				</div>

				Do You want to delete {props.videoElement.snippet.title} from downloads?
				<br/>
			</div>) || "Nothing Here!",
		};
		dialog.confirm(config)
			.then(() => {
				let videoID = "";
				if (typeof props.videoElement.id === "object") videoID = props.videoElement.id.videoId;
				if (typeof props.videoElement.id === "string") videoID = props.videoElement.id;
				deleteDownloadedSong(videoID).then(() => {
					setDownloadButton(<IconButton onClick={downloadAudio}><GetApp/></IconButton>);
					// enqueueSnackbar('Deleted From Downloads');
				});
			})
			.catch(() => {
			});
	}

	return (
		<div className="Player">
			<div className={"container"}>
				<Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
					<AppBar>
						<Toolbar color={"#FFF"} style={{color: "#FFFFFF"}}>
							<IconButton edge="start" onClick={handleClose} aria-label="close">
								<ArrowBack/>
							</IconButton>
							<Typography variant={"h6"} component={"div"} className={"py-1 text-truncate"}>
								{props.videoElement.snippet.title || "Untitled"}
								<Typography variant={"body2"} style={{opacity: "50%"}}>
									{props.videoElement.snippet.channelTitle || "Unavailable"}
								</Typography>
							</Typography>
							<div style={{flex: "1 1 auto"}}/>
							{downloadButton}
						</Toolbar>
						{
							/*
						<div style={{zIndex:'99999'}} hidden={false} className={'fixed-top'}>
							<LinearProgress variant={"buffer"} value={audioElement.currentTime} valueBuffer={audioElement.buffered}/>
						</div>
							*/
						}
					</AppBar>
					<div style={{backgroundColor: "primary.dark", height: "100%", width: "100%"}}>
						<div
							className={"ImageCircle rounded-circle thumbnail"}>
							<img src={props.videoElement.snippet.thumbnails.high.url}
								 className={"image img-fluid rounded-circle border shadow"}
								 style={{
									 width: "10rem",
									 height: "10rem",
									 position: "absolute",
									 top: "42%",
									 left: "50%",
									 transform: "translate(-50%, -50%)"
								 }} alt={"Thumbnail"}/>
						</div>
					</div>
					<AppBar color="primary" style={{
						position: "fixed",
						top: "auto",
						bottom: 0,
						width: "100%",
						backgroundColor: "light"
					}} component={"div"}>
						<CustomSlider/>
						<div className={"container mb-2"} style={{
							width: "70%",
							display: "inline-flex",
							justifyContent: "space-around",
							transform: "translate(0%)"
						}}>
							{looping}
							{props.playList.list.items[props.playList.index - 1] ?
								<IconButton><SkipPrevious onClick={() => {
									const item = props.playList.list.items[props.playList.index - 1];
									SkipSong({video: item, index: props.playList.index - 1});
								}}/></IconButton> : <IconButton disabled={true}><SkipPrevious/></IconButton>}
							<div className={"ExpandedPlayButtonContainer"}>
								{button}
							</div>
							{props.playList.list.items[props.playList.index + 1] ? <IconButton onClick={() => {
								const item = props.playList.list.items[props.playList.index + 1];
								SkipSong({video: item, index: props.playList.index + 1});
							}}><SkipNext/></IconButton> : <IconButton disabled={true}><SkipNext/></IconButton>}

						</div>
						<ComingNext/>
					</AppBar>
				</Dialog>
			</div>
		</div>
	);
};

Player.propTypes = {
	componentState: PropTypes.object,
	audioElement: PropTypes.object,
	videoElement: PropTypes.object,
	playList: PropTypes.object
};
Player.defaultProps = {};

const mapStateToProps = state => ({
	componentState: state.currentSong.componentState,
	audioElement: state.currentSong.audioElement,
	videoElement: state.currentSong.videoElement,
	playList: state.currentSong.playList
});
export default connect(mapStateToProps)(Player);
