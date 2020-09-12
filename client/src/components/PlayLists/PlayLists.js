import React, {useEffect} from "react";
import "./PlayLists.css";
import ListSubheader from "@material-ui/core/ListSubheader";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import {initAuth} from "../../functions/auth";
import endPoints from "../../api/endpoints/endpoints";
import {Button} from "@material-ui/core";

const playlistsIds = {
	LatestSongs: "PLFgquLnL59akA2PflFpeQG9L01VFg90wS",
	RomanticSongs: "PL64G6j8ePNureM8YCKy5nRFyzYf8I2noy",
	EdmSongs: "PLw-VjHDlEOgs658kAHR_LAaILBXb-s6Q5",
	TopBolloywood: "PLcRN7uK9CFpPkvCc-08tWOQo6PAg4u0lA",
	TopPop: "PLDcnymzs18LU4Kexrs91TVdfnplU3I5zs",
	Reggaeton: "PLS_oEMUyvA728OZPmF9WPKjsGtfC75LiN"
};

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		margin: theme.spacing(1),
		padding: theme.spacing(1),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
}));
const PlayListItem = (props) => {
	const classes = useStyles();
	//() => props.onPlay(props.video, props.key_, props.list)
	return (
		<Grid item xs={6} sm={4} onClick={() => {
			props.onClick(props.video, props.index);
		}}>
			<Paper className={classes.paper}>
				<img
					src={"props.video.author.avatar"} alt={"PlayList Icon"}/>
				<Typography className={"text-left text-truncate"}>{props.video.title}</Typography>
			</Paper>
		</Grid>
	);
};
const PlayLists = () => {
	const classes = useStyles();
	const [playLists, setPlayLists] = React.useState(<></>);
	const errorPage = (message = "No Internet Connection", button = <Button onClick={() => {
	}}>Retry</Button>) => (
		<div className={"errorPage"}
			 style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
			<img src={"./assets/icons/darkmode_nothingfound.svg"} style={{width: "8rem", height: "auto"}}
				 alt={"Kabeers Music Logo"}/>
			<br/>
			<div className={"text-truncate"}>{message}</div>
			{button}
		</div>
	);
	const gandMayLo = (i, c) => {
		console.log(i, c);
	};
	useEffect(() => {
		initAuth().then(token => {
			fetch(endPoints.getPlayListById(playlistsIds.LatestSongs), {
				headers: new Headers({
					"Authorization": `Bearer ${token}`
				})
			})
				.then(v => v.json())
				.then(playList => {
					setPlayLists(playList.items.map((video, index) => <PlayListItem onClick={gandMayLo} video={video}
																					index={index}/>));
				}).catch(e => setPlayLists(errorPage()));
		});
	}, []);
	return (
		<div className="PlayLists">
			<ListSubheader component="div">December</ListSubheader>
			<Grid container spacing={0}>
				{
					playLists ? playLists : null
				}
			</Grid>
		</div>
	);
};

PlayLists.propTypes = {};

PlayLists.defaultProps = {};

export default PlayLists;
const formulas = {
	alkane: "CNH2N+2",
	alkene: "CNH2N",
	alkyne: "CNH2N-2"
};
