import {AppBar, Grow, IconButton, makeStyles, Typography} from "@material-ui/core";
import {Close, Pause, PlayCircleOutline} from "@material-ui/icons";
import React, {useEffect} from "react";
import store from "../../Redux/store/store";
import {setCurrentSongState} from "../../Redux/actions/actions";
import {connect} from "react-redux";
import CustomMiniPlayerSlider from "./CustomMiniPlayerSlider";
import {pure} from "recompose";
import {storageIndex} from "../../functions/Helper/storageIndex";
import {sendPauseCast} from "../../functions/Cast/Cast";
import Card from "@material-ui/core/Card";
import {FocusNode} from "@please/lrud";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
	TVPlayButton: {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)"
	}
}));
const styles = {
	TVPlayButton: {
		position: "absolute",
		top: "35%",
		left: "50%",
		transform: "translate(-50%, -50%)"
	}
};
const MiniPlayer = (props) => {
	if (props.hidden) return <></>;
	const
		ComponentStates = props.componentState,
		audioElement = props.audioElement,
		videoElement = props.videoElement;
	const classes = useStyles();
	const [button, setButton] = React.useState(props.isTv ? (
		<IconButton style={{...styles.TVPlayButton}} onClick={pauseAudio}><Pause color={"#fff"}/></IconButton>) : (
		<IconButton onClick={pauseAudio}><Pause color={"#fff"}/></IconButton>));
	const [open, setOpen] = React.useState(store.getState().currentSong.componentState.miniPlayer);

	async function handleScrubbing(v) {
		if (isFinite(v)) {
			audioElement.currentTime = v;
			// Update Redux State
			store.dispatch(setCurrentSongState(audioElement, videoElement, {...ComponentStates}));
		}
	}

	function cutCurrentSongState() {
		audioElement.pause();
		store.dispatch(setCurrentSongState(new Audio(""), videoElement, {
			Dialog: false,
			MiniPlayer: false
		}, props.reOpenDialog, props.playList));
		audioElement.src = "#";
		if (localStorage.getItem(storageIndex.currentlyCasting)) sendPauseCast(localStorage.getItem(storageIndex.castingTo));
	}

	function pauseAudio() {
		audioElement.pause();
		setButton(props.isTv ? (<IconButton style={{...styles.TVPlayButton}} onClick={playAudio}><PlayCircleOutline
			color={"#fff"}/></IconButton>) : (
			<IconButton onClick={playAudio}><PlayCircleOutline color={"#fff"}/></IconButton>));

	}

	function playAudio() {
		audioElement.play();
		setButton(props.isTv ? (<IconButton style={{...styles.TVPlayButton}} onClick={pauseAudio}><Pause
			color={"#fff"}/></IconButton>) : (<IconButton onClick={pauseAudio}><Pause
			color={"#fff"}/></IconButton>));
	}

	useEffect(() => {
		// TODO Because you lisened to travis scott
		// Record artist name to database for that user
		// Search Yt for artist name
		// Show Because You Listened to travis scott

		/*
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
		 */
	});

	if (!ComponentStates.dialog && ComponentStates.MiniPlayer && audioElement !== null || "" || undefined) {
		return props.isTv ? (
			<AppBar color={"slideDown primary.miniPlayer.main"} style={{
				position: "fixed",
				top: "auto",
				bottom: "0",
				width: "18vw",
				height: "40vh"
			}} component={"div"} elevation={1} className={"d-inline-flex KabeersMiniPlayerContainer"}>
				<Grow in={true}>
					<Card className={"SongCard"} style={{width: "100%", height: "100%", borderRadius: 0}}
						  variant={"elevation"}
						  elevation={3}>
						<FocusNode>
							<CardActionArea>
								<React.Fragment>
									<IconButton style={{position: "absolute", right: "0.25rem", top: "0.25rem"}}
												onClick={cutCurrentSongState}><Close/></IconButton>
									{button}
									<CardMedia
										component={"img"}
										alt="Contemplative Reptile"
										image={props.thumbnail || videoElement.snippet.thumbnails.high.url}
										title={videoElement.snippet.title}
										loading={"lazy"}
										style={{height: "26vh", width: "100%"}}
									/>
									<div style={{width: "100%", position: "absolute"}}><CustomMiniPlayerSlider/></div>
								</React.Fragment>
								<CardContent onClick={() => {
									props.reOpenDialog();
									// Update Redux State
									store.dispatch(setCurrentSongState(audioElement, videoElement, {
										Dialog: true,
										MiniPlayer: false
									}, props.reOpenDialog, props.playList));
									if (props.componentState.Dialog) store.getState().currentSong.reOpenDialog();
								}} className={"text-left"}>
									<Typography gutterBottom variant="h6" component="p" className={"text-truncate"}>
										{videoElement.snippet.title.slice(0, 70) + " ..."}
									</Typography>
									<Typography variant="body2" color="textSecondary" style={{textDecoration: "none"}}
												component={Link} to={`/artist?id=${videoElement.snippet.channelId}`}
												className={"text-truncate"}>
										{videoElement.snippet.description ? videoElement.snippet.description.slice(0, 70) + " ..." : ""}
										<span className={"text-muted"}>
									{videoElement.snippet.channelTitle}
								</span>
									</Typography>
									{/*192.168.10.3*/}
								</CardContent>
							</CardActionArea>
						</FocusNode>
					</Card>
				</Grow>
			</AppBar>
		) : (
			<AppBar color={"slideDown primary.miniPlayer.main"} style={{
				position: "fixed",
				top: "auto",
				bottom: "3.5rem",
				width: "100%",
			}} component={"div"} elevation={1} className={"d-inline-flex KabeersMiniPlayerContainer"}>
				<div className={"d-inline-flex"}>
					<div onClick={() => {
						props.reOpenDialog();
						// Update Redux State
						store.dispatch(setCurrentSongState(audioElement, videoElement, {
							Dialog: true,
							MiniPlayer: false
						}, props.reOpenDialog, props.playList));
						if (props.componentState.Dialog) store.getState().currentSong.reOpenDialog();
					}} className={"d-inline-flex"}>
						<img
							onError="this.onerror=null;this.src='http://docs-kabeersnetwork-kview-app-sta.rf.gd/Private/uploads/5f58af5918860unnamed.jpg';"
							src={videoElement.snippet.thumbnails.high.url} style={{
							width: "4rem",
							height: "3rem",
							maxWidth: "5rem!important",
							maxHeight: "4rem!important"
						}}
							alt={"Song Image"} className={"KabeersMiniPlayerImage"}/>
						<Typography component={"span"} className={"text-truncate p-2 KabeersMiniPlayerText"}
									color={"#000"} style={{
							width: "10em",
							color: "primary.miniPlayer.text"
						}}>{videoElement.snippet.title || "Untitled"}
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
	return (<React.Fragment/>);
};

const mapStateToProps = state => ({
	componentState: state.currentSong.componentState,
	audioElement: state.currentSong.audioElement,
	videoElement: state.currentSong.videoElement,
	reOpenDialog: state.currentSong.reOpenDialog,
	playList: state.currentSong.playList
});
export default connect(mapStateToProps)(pure(MiniPlayer));
