import React, {useEffect} from "react";
import "./ArtistComponent.css";
import {initAuth} from "../../functions/auth";
import endPoints from "../../api/endpoints/endpoints";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Preloader from "../Preloader/Preloader";
import {getSong} from "../../functions/songs";
import {AppBar, IconButton, Toolbar} from "@material-ui/core";
import {ArrowBack} from "@material-ui/icons";
import {useHistory} from "react-router-dom";
import Grow from "@material-ui/core/Grow";
import withRouter from "react-router-dom/es/withRouter";
import {pure} from "recompose";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around",
		overflow: "hidden",
		backgroundColor: theme.palette.background.paper,
	},
	gridList: {
		width: 500,
		height: 450,
	},
	icon: {
		color: "rgba(255, 255, 255, 0.54)",
	},
	paper: {
		padding: 0,
		margin: theme.spacing(1),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
}));
const ArtistSongItem = (props) => {
	const classes = useStyles();
	//  style={{backgroundImage: `url(${props.video.snippet.thumbnails.high.url})`, backgroundSize: 'contain', backgroundRepeat:'no-repeat'}}
	return (
		<Grid item xs={6} sm={4} md={3} xl={3} onClick={() => {
			props.onClick(props.video, props.index);
		}}>
			<Grow in={true}>
				<Paper elevation={3} className={classes.paper}>
					<img
						loading={"lazy"}
						src={props.video.snippet.thumbnails.high.url} alt={"PlayList Icon"} className={`h-100 w-100`}/>
					<div className={"p-2 "}>
						<Typography className={"text-left text-truncate"}>{props.video.snippet.title}</Typography>
					</div>
				</Paper>
			</Grow>
		</Grid>
	);
};
const ArtistComponent = (props) => {
	const classes = useStyles();
	let history = useHistory();
	const [artistObject, setArtistObject] = React.useState({});
	//const [enqueueSnackbar, closeSnackbar] = useSnackbar();
	const abortController = new AbortController();
	const [loadLimit, setLoadLimit] = React.useState(0);

	function useQuery() {
		return new URLSearchParams(window.location.search);
	}

	function PlaySong(data, index) {
		props.misc.showBackdrop();
		getSong(typeof data.id === "object" ? data.id.videoId : data.id).then(value => {
			if (!value) return;
			//Avoid the Promise Error
			props.appState({
				uri: value,
				thumbnail: data.snippet.thumbnails.high.url,
				video: data,
				list: artistObject,
				index: index
			});
		}).catch(e => /*enqueueSnackbar("Cannot Play Song")*/e);
	}

	const getPlaylistFromAPI = async (e, t) => await fetch(endPoints.getPlayListById(e), {
		headers: new Headers({Authorization: `Bearer ${t}`}),
		signal: abortController.signal
	});

	const Load = () => {
		initAuth().then(token => fetch(endPoints.getArtistInfo(useQuery().get("id")), {
			headers: new Headers({Authorization: `Bearer ${token}`}),
			signal: abortController.signal
		})
			.then(o => o.ok ? o.json() : null)
			.then(e => setArtistObject(e))
			.catch(o => (o)));
	};
	const goBack = () => {
		history.goBack();
	};
	useEffect(() => {
		Load();
		return () => {
			abortController.abort();
		};
	}, []);
	return (
		<div className={`ArtistComponent ${classes.root}`}>
			<AppBar color={"transparent"} elevation={0} style={{position: "relative"}}>
				<Toolbar color={"#BBBBBB"} style={{color: "#BBBBBB"}}>
					<IconButton onClick={goBack} edge="start" aria-label="close">
						<ArrowBack/>
					</IconButton>
					<div style={{flex: "1 1 auto"}}/>
				</Toolbar>
			</AppBar>
			{
				artistObject.items ? (
					<React.Fragment>
						<div className={"text-left w-100 mx-3"}>
							<div className={"p-3"} style={{display: "inline-flex"}}>
								<Avatar src={artistObject.author.avatar} style={{width: "5rem", height: "5rem"}}/>
								<div className={"text-center"}
									 style={{display: "inline-flex", marginTop: "5%", justifyContent: "space-evenly"}}>
									<Typography variant={"overline"} className={"text-truncate mx-2"} gutterBottom>
										{artistObject.total_items} Songs
									</Typography>
									<Typography variant={"overline"} className={"text-truncate mx-2"} gutterBottom>
										{artistObject.views} Views
									</Typography>
								</div>
							</div>
							<br/>
							<Typography variant={"overline"} className={"pl-3"}>{artistObject.author.name}</Typography>
							<Divider className={"my-2"}/>
						</div>
						<Grid container spacing={0.5}>
							{
								artistObject.items.map((song, index) => (
									<ArtistSongItem video={song} index={index} key={index}
													onClick={PlaySong}/>
								))
							}
						</Grid>
					</React.Fragment>
				) : <Preloader/>
			}
		</div>
	);
};

ArtistComponent.propTypes = {};

ArtistComponent.defaultProps = {};

export default withRouter(pure(ArtistComponent));
{
	/*
							<Button onClick={()=>{
							//const newList = concat(artistObject.items, artistObject.items.slice(loadLimit, loadLimit+5));
							const newList = artistObject.items.slice(loadLimit, loadLimit + 5);
							//setLoadLimit(loadLimit+5);
							setArtistObject(prevState => ({...prevState, items: artistObject.items + newList}))
						}}> Load More</Button>
	 */
}
