import React, {useEffect} from "react";
import "./Player.css";
import {AppBar, Avatar, CircularProgress, Drawer, IconButton, Slide, Toolbar, Typography} from "@material-ui/core";
import {
	AccountCircle,
	ArrowBack,
	Cast,
	Done,
	Forward10,
	GetApp,
	Loop,
	Pause,
	PlayCircleOutline,
	Repeat,
	RepeatOne,
	SkipNext,
	SkipPrevious,
	Toc,
	VolumeDown,
	VolumeUp,
} from "@material-ui/icons";
import Replay10Icon from "@material-ui/icons/Replay10";
import {deleteDownloadedSong, downloadSong, getSong, isOfflineAvailable, saveToHistory} from "../../functions/songs";
import CustomSlider from "./CustomSlider";
import {setAutoPlay, setCurrentSongState} from "../../Redux/actions/actions";
import store from "../../Redux/store/store";
import {connect} from "react-redux";
import {useSnackbar} from "notistack";
import ComingNext from "./ComingNext/ComingNext";
import {useDialog} from "muibox";
import PropTypes from "prop-types";
import addMediaSession from "../../functions/Helper/addMediaSession";
import CustomVolumeSlider from "./CustomVolumeSlider";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grow from "@material-ui/core/Grow";
import {saveHistoryToServer} from "../../functions/Helper/history";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {useHistory} from "react-router-dom";
import {pure} from "recompose";
import {castEnabled, castSnackbar, getCastDevices, sendCast} from "../../functions/Cast/Cast";
import CastDialog from "./CastDialog";
import Button from "@material-ui/core/Button";
import ImagesSlider from "./ComingNext/ImagesSlider";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});
const downloadStateIndex = {
	notDownloaded: 0,
	downloading: 1,
	downloaded: 2
};
const Player = (props) => {

	if (props.hidden || !props.videoElement) return null;
	let history = useHistory();
	const dialog = useDialog();
	const [open, setOpen] = React.useState(store.getState().currentSong.componentState.Dialog);
	const [button, setButton] = React.useState(<IconButton color={"#60B18A"} colorSecondary={"#60B18A"}
														   onClick={pauseAudio}><Pause/></IconButton>);
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
	const audioElement = props.audioElement; //deleteDownload
	const [downloadButton, setDownloadButton] = React.useState(<div/>);
	const {enqueueSnackbar, closeSnackbar} = useSnackbar();
	const [PlayList, setPlayList] = React.useState(false);
	const [AutoPlayButton, SetAutoPlayButton] = React.useState(props.autoPlay);
	const abortController = new AbortController();
	const castDevices = getCastDevices();


	const [castDialogOpen, setCastDialogOpen] = React.useState(false);
	const [castSelectedDevice, setCastSelectedDevice] = React.useState(castDevices[0]);

	const handleCastDialogClickOpen = () => {
		setCastDialogOpen(true);
	};

	const handleCastDialogClose = (v) => {
		if (!v) return setCastDialogOpen(false);
		setCastDialogOpen(false);
		setCastSelectedDevice(v);
		sendCast(props.videoElement, v);
		pauseAudio();
		handleClose();
		const action = key => (
			<React.Fragment>
				<Button onClick={() => {
					alert(`I belong to snackbar with key ${key}`);
				}}>
					'Alert'
				</Button>
				<Button onClick={() => {
					closeSnackbar(key);
				}}>
					'Dismiss'
				</Button>
			</React.Fragment>
		);
		castSnackbar.setSnackbarKey(enqueueSnackbar(`Playing ${props.videoElement.snippet.title} on ${v}`, {
			persist: true,
			//			action,
		}));
	};


	const handleClose = () => {
		addToReduxState([false, true]);
		setOpen(false);
	};
	const handleOpen = () => {
		addToReduxState([true, false]);
		setOpen(true);
	};

	const ReOpen = () => {
		addToReduxState([true, false]);
		setOpen(true);
	};

	const AutoPlay = (AutoPlayButton) => {
		if (AutoPlayButton) audioElement.onended = () => {
			if (props.playList.list.items[props.playList.index + 1]) {
				const item = props.playList.list.items[props.playList.index + 1];
				SkipSong({video: item, index: props.playList.index + 1});
			}
		};
		else audioElement.onended = () => {
		};
		addToReduxState([true, false]);
	};

	function addToReduxState(AppState) {
		if (!AppState) AppState = [store.getState().currentSong.componentState.Dialog, store.getState().currentSong.componentState.MiniPlayer];
		store.dispatch(setCurrentSongState(audioElement, props.videoElement, {
			Dialog: AppState[0],
			MiniPlayer: AppState[1]
		}, ReOpen, {index: props.playList.index, list: props.playList.list}));
		store.dispatch(setAutoPlay(!AutoPlayButton));
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


	function downloadAudio() {
		if (!navigator.onLine) return enqueueSnackbar("No Connection, Download Failed");
		downloadSong({
			videoId: "object" == typeof props.videoElement.id ? props.videoElement.id.videoId : "string" == typeof props.videoElement.id && (props.videoElement.id),
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
				setDownloadButton(<Grow in={true}><IconButton onClick={downloadAudio}><GetApp/></IconButton></Grow>);
			}
		}, abortController);
		// enqueueSnackbar('Download Started');
		setDownloadButton(<Grow in={true}><IconButton onClick={deleteDownload}><CircularProgress
			color={"primary.light"} size={25}/></IconButton></Grow>);
	}

	function playAudio() {
		audioElement.play();
		setButton(<IconButton onClick={pauseAudio}><Pause/></IconButton>);
	}

	function pauseAudio() {
		audioElement.pause();
		setButton(<IconButton className={"PlayerPlayPauseBtn"} onClick={playAudio}><PlayCircleOutline/></IconButton>);
	}


	useEffect(() => {
		addToHistory()
			.then(navigator.onLine ? saveHistoryToServer(props.videoElement) : null) // Play With Expired Token While offline
			.then(addToReduxState([true, false]))
			.then(() => {
				audioElement.play();
				addMediaSession({
					artist: props.videoElement.snippet.channelTitle,
					title: props.videoElement.snippet.title,
					artwork: [{
						src: props.videoElement.snippet.thumbnails.high.url,
						sizes: "96x96",
						type: "image/png"
					}]
				}, {playAudio: playAudio, pauseAudio: pauseAudio}, audioElement);
			});
		let videoID = "";
		"object" === typeof props.videoElement.id && (videoID = props.videoElement.id.videoId);
		"string" === typeof props.videoElement.id && (videoID = props.videoElement.id);

		isOfflineAvailable(videoID).then((v) => {
			setDownloadButton(v ? <IconButton onClick={deleteDownload}><Done/></IconButton> :
				<IconButton onClick={downloadAudio}><GetApp/></IconButton>);
		});
		AutoPlay(!AutoPlayButton);
		return () => {
			abortController.abort();
		};
	}, []);

	function SkipSong(data) {
		let videoID = "";
		if (typeof data.video.id === "object") videoID = data.video.id.videoId;
		if (typeof data.video.id === "string") videoID = data.video.id;
		getSong(videoID).then(value => {
			if (!value) return;
			setOpen(false);
			addToReduxState([false, false]);
			try {
				props.changes({
					uri: value,
					thumbnail: data.video.snippet.thumbnails.high.url,
					video: data.video,
					list: props.playList.list,
					index: data.index
				}, props.offline).then(() => {
					props = {};
				});
			} catch (e) {
				console.log(e);
				enqueueSnackbar("Failed To Load Song");
			}
		}).catch(e => enqueueSnackbar("Failed To Load Song"));
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

	const CastHelper = async () => {
		handleCastDialogClickOpen();
	};

	useEffect(() => {
		return () => {
			abortController.abort();
		};
	}, []);
	return (
		<div className="Player">
			<CastDialog onClose={handleCastDialogClose} open={castDialogOpen} selectedValue={castSelectedDevice}
						emails={castDevices}/>
			<SwipeableDrawer
				onClose={handleClose}
				anchor={"bottom"}
				variant={"temporary"}
				ModalProps={{
					keepMounted: true,
				}}
				swipeAreaWidth={20}
				disableBackdropTransition
				open={open}
				disableSwipeToOpen={!props.componentState.MiniPlayer && !open}
				onOpen={handleOpen}>
				<AppBar color={"transparent"} elevation={0} style={{position: "relative"}}>
					<Toolbar color={"#BBBBBB"} style={{color: "#BBBBBB"}}>
						<IconButton edge="start" onClick={handleClose} aria-label="close">
							<ArrowBack/>
						</IconButton>
						<div style={{flex: "1 1 auto"}}/>
						<FormControlLabel
							control={
								<Switch checked={!AutoPlayButton} onChange={() => {
									SetAutoPlayButton(!AutoPlayButton);
									AutoPlay(AutoPlayButton);
								}} name="Autoplay"/>
							}
							labelPlacement="start"
							label="Autoplay"
						/>
					</Toolbar>
					{
						/*
						max-height:100vh!important
					<div style={{zIndex:'99999'}} hidden={false} className={'fixed-top'}>
						<LinearProgress variant={"buffer"} value={audioElement.currentTime} valueBuffer={audioElement.buffered}/>
					</div>
						*/
					}
				</AppBar>
				<div style={{backgroundColor: "primary.dark", height: "90vh", width: "100%", minHeight: "90vh"}}>
					<div
						className={" -ImageCircle thumbnail- text-center my-0 py-0"} style={{
						marginTop: "0rem"
					}}>
						<ImagesSlider playSong={SkipSong} nowLoading={props.progress_hidden}/>
						<Typography variant={"h6"} component={"div"} className={"mx-4 py-0 text-truncate text-left"}>
							{props.videoElement.snippet.title || "Untitled"}
							<Typography variant={"body2"} style={{opacity: "50%"}}>
								{props.videoElement.snippet.channelTitle || "Unavailable"}
							</Typography>
						</Typography>
						<div className={"mx-4"}><CustomSlider/></div>
						<div className={"container mb-0 smallOnDesktop"} style={{
							width: "100%",
							display: "inline-flex",
							justifyContent: "space-around",
							transform: "translate(0%)"
						}}>
							{props.playList.list.items[props.playList.index - 1] ?
								<IconButton onClick={() =>
									SkipSong({
										video: props.playList.list.items[props.playList.index - 1],
										index: props.playList.index - 1
									})}><SkipPrevious/></IconButton> :
								<IconButton disabled={true}><SkipPrevious/></IconButton>}
							<IconButton onClick={() => audioElement.currentTime -= 10}>
								<Replay10Icon/>
							</IconButton>
							<div className={"-ExpandedPlayButtonContainer"}>
								{button}
							</div>
							<IconButton onClick={() => audioElement.currentTime += 10}>
								<Forward10/>
							</IconButton>
							{props.playList.list.items[props.playList.index + 1] ? <IconButton onClick={() => {
								SkipSong({
									video: props.playList.list.items[props.playList.index + 1],
									index: props.playList.index + 1
								});
							}}><SkipNext/></IconButton> : <IconButton disabled={true}><SkipNext/></IconButton>}
						</div>
						<br/>
						<div className={"px-4 w-100 smallOnDesktop d-inline-flex"}>
							<CssBaseline/>
							<IconButton><VolumeDown fontSize={"small"}/></IconButton>
							<CustomVolumeSlider/>
							<IconButton><VolumeUp fontSize={"small"}/></IconButton>
						</div>
						<br/>
						<div className={"px-4 w-100 d-inline-flex smallOnDesktop"}
							 style={{justifyContent: "space-around"}}>
							{navigator.onLine && castEnabled && castDevices.length ? (
								<IconButton onClick={CastHelper}>{<Cast/>}</IconButton>) : null}
							{audioElement.loop ? (<IconButton onClick={() => {
								setLooping(false);
								audioElement.loop = false;
							}}><RepeatOne/></IconButton>) : (<IconButton onClick={() => {
								setLooping(true);
								audioElement.loop = true;
							}}><Repeat/></IconButton>)}
							{downloadButton ? downloadButton : <IconButton><CircularProgress size={25}/></IconButton>}
							{ /*
								Object.values(downloadStateIndex).includes(downloadButtonState) ? (
									downloadButtonState
								) : null
								*/
							}
							<IconButton onClick={() => {
								setPlayList(true);
							}}><Toc/></IconButton>
							<IconButton
								onClick={() => navigator.onLine ? (history.push(`/artist?id=${props.videoElement.channelId}`), handleClose()) : (enqueueSnackbar("No Connection"))}><AccountCircle/>
							</IconButton>
						</div>
						<Drawer
							anchor={"bottom"}
							open={PlayList}
							onClose={() => {
								setPlayList(false);
							}}
							onOpen={() => {
								setPlayList(true);
							}}
						>
							<ComingNext playSong={SkipSong}/>
						</Drawer>
					</div>
				</div>
			</SwipeableDrawer>
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
	playList: state.currentSong.playList,
	autoPlayMode: state.currentSong.autoPlay
});
export default connect(mapStateToProps)(pure(Player));
