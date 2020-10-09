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
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";

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
						src={props.video.snippet.thumbnails.high.url} alt={"PlayList Icon"} className={"h-100 w-100"}/>
					<div className={"p-2 "}>
						<Typography className={"text-left text-truncate"}>{props.video.snippet.title}</Typography>
					</div>
				</Paper>
			</Grow>
		</Grid>
	);
};
const ArtistSongListItem = (props) => (
	<ListItem alignItems="flex-start" onClick={() => {
		props.onClick(props.video, props.index);
	}} button>
		<ListItemAvatar>
			<Avatar alt={props.video.snippet.title} src={props.video.snippet.thumbnails.high.url}/>
		</ListItemAvatar>
		<ListItemText
			primary={props.video.snippet.title}
			secondary={
				<React.Fragment>
					<Typography
						component="span"
						variant="body2"
						style={{display: "inline"}}
						color="textPrimary"
					>
					</Typography>
					{props.video.snippet.channelTitle}
				</React.Fragment>
			}
		/>
	</ListItem>
);
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
	const trigger = useScrollTrigger();
	return (
		<div className={`ArtistComponent ${classes.root}`}>
			{artistObject.items ? <Slide direction={"down"} in={!trigger}>
				<AppBar style={{position: "fixed"}} className={!trigger ? "d-none" : ""}>
					<Toolbar>
						<IconButton onClick={goBack} edge="start" aria-label="close">
							<ArrowBack/>
						</IconButton>
						<Typography variant={"h6"} color={"#FFF"}>
							{artistObject.author.name}
						</Typography>
						<div style={{flex: "1 1 auto"}}/>
						<Avatar src={artistObject.author.avatar}/>
					</Toolbar>
				</AppBar>
			</Slide> : <AppBar color={"transparent"} elevation={0}>
				<Toolbar color={"#BBBBBB"} style={{color: "#BBBBBB"}}>
					<IconButton onClick={goBack} edge="start" aria-label="close">
						<ArrowBack/>
					</IconButton>
					<div style={{flex: "1 1 auto"}}/>
				</Toolbar>
			</AppBar>}

			{
				/*
					<AppBar position={"sticky"}>
						<div style={{height:"30vh", width: "100vw", position: "fixed", backgroundImage: "url(https://yt3.ggpht.com/a/AATXAJz7PXt8iYi7r9OMooklphLiaEDTUYHeCr701DzRWw=s100-c-k-c0xffffffff-no-rj-mo)", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}></div>
					</AppBar>
				*/
				artistObject.items ? (
					<React.Fragment>
						<div className={"text-left w-100 mx-3 pt-5 backgroundImage"} style={{
							backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${artistObject.author.avatar})`,
							backgroundRepeat: "no-repeat",
							backgroundSize: "cover"
						}}>
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
							<Typography variant={"overline"}
										className={"pl-3 mb-3"}>{artistObject.author.name}</Typography>
						</div>
						<List>
							{
								artistObject.items.map((song, index) => (
									<React.Fragment>
										<ArtistSongListItem video={song} index={index} key={index}
															onClick={PlaySong}/>
										<Divider variant="inset" component="li"/>
									</React.Fragment>
								))
							}
						</List>
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
