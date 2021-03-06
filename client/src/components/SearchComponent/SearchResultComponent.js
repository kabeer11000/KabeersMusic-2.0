import React, {useEffect} from "react";
import "./SearchComponent.css";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import {ArrowBack} from "@material-ui/icons";
import InputBase from "@material-ui/core/InputBase";
import {SearchYoutube} from "../../functions/suggestSearch";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Link, useHistory} from "react-router-dom";
import {connect} from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import {getSong, getSongFromStorage, SuggestOfflineSongs} from "../../functions/songs";
import {Button, Slide} from "@material-ui/core";
import SkeletonList from "../SkeletonList/SkeletonList";
import {pure} from "recompose";
import Divider from "@material-ui/core/Divider";


const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: "1rem",
		padding: "2px 4px",
		display: "flex",
		alignItems: "center",
		width: "100%",
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
	},
	iconButton: {
		padding: 10,
	},
	divider: {
		height: 28,
		margin: 4,
	},
}));
const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="left" ref={ref} {...props} />;
});

const SearchResultComponent = (props) => {
	let history = useHistory();
	const [open, setOpen] = React.useState(true);
	const [resultsArray, setResultsArray] = React.useState([]);
	const [listItems, setListItems] = React.useState(<SkeletonList length={5}/>);
	const classes = useStyles();
	const abortController = new AbortController();
	const errorPage = (message = "No Internet Connection", button = <Button component={Link}
																			to={"/search"}>Retry</Button>) => (
		<div className={"errorPage text-center"}
			 style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
			<img src={"/./assets/icons/darkmode_nothingfound.svg"} style={{width: "8rem", height: "auto"}}
				 alt={"Kabeers Music Logo"}/>
			<br/>
			<div className={"text-truncate"}>{message}</div>
			{button}
		</div>
	);

	function PlaySong(video, metaData) {
		getSong(video.id).then(value => {
			if (value) {
				//Avoid the Promise Error
				setTimeout(function () {
					props.appState({
						uri: value,
						thumbnail: video.snippet.thumbnails.high.url,
						video: video,
						list: metaData.list,
						index: metaData.index
					});
				}, 100);
			}
		});
	}

	function PlayOfflineSong(data, index) {
		let videoID = "";
		if (typeof data.videoElement.id === "object") videoID = data.videoElement.id.videoId;
		if (typeof data.videoElement.id === "string") videoID = data.videoElement.id;
		getSongFromStorage(videoID).then(value => {
			if (value) {
				//Avoid the Promise Error
				data.videoElement.snippet.thumbnails.high.url = URL.createObjectURL(value.thumbnail);
				props.appState({
					uri: URL.createObjectURL(value.blob),
					thumbnail: URL.createObjectURL(value.thumbnail),
					video: data.videoElement,
					list: {items: [data.videoElement]},
					index: index
				}, false);
			}
		});
	}


	useEffect(() => {
		if (!props.query) return history.push("/search");
		if (navigator.onLine) {
			SearchYoutube(props.query, abortController)
				.catch(setListItems(null))
				.then(setListItems);
		} else {
			SuggestOfflineSongs(props.query)
				.then(resultsArray => {
					if (!resultsArray) return;
					setListItems(() => resultsArray.length ? resultsArray.map((value, index) => {
						value = value.item;
						if (!value) return errorPage("Nothing Matched your Search!");
						return (
							<ListItem button key={index} onClick={() => {
								PlayOfflineSong(value, index);
							}}>
								<ListItemIcon>
									<Avatar alt={value.title} src={URL.createObjectURL(value.thumbnail)}/>
								</ListItemIcon>
								<ListItemText primary={`${decodeURIComponent(value.title)}`}
											  secondary={`${value.channelTitle}`}/>
							</ListItem>
						);
					}) : null);
				}).catch(e => {
				setListItems(errorPage());
			});
		}
		return () => {
			abortController.abort();
		};
	}, []);
	return (
		<div className="SearchResultComponent">
			<Dialog fullScreen open={open} onClose={() => {
			}}>
				<AppBar className={"fixed-top"}>
					<Toolbar component={Link} to={`/search?q=${props.query}`} style={{textDecoration: "none"}}>
						{window.history ? <IconButton onClick={() => {
							setOpen(false);
						}} component={Link} style={{textDecoration: "none"}} to={"/home"} color="primary.light"
													  visibility={false}>
							<ArrowBack/>
						</IconButton> : <></>}
						<InputBase
							autoCapitalize={true}
							autoComplete={true}
							value={props.query}
							className={`${classes.input} text-light`}
							placeholder="Search Kabeers Music"
							inputProps={{"aria-label": "Search Kabeers Music"}}
						/>
					</Toolbar>
				</AppBar>
				<div className={"container px-3"} style={{marginTop: "4rem"}}>
					<div className={"row"}>
						{listItems && listItems.items ? (
							<React.Fragment>
								{listItems.accounts.length ? (
									<React.Fragment>
										{listItems.accounts.map((value, index) => (
											<ListItem component={Link} button key={index}
													  to={`/artist?id=${value.url.split("/").slice(-1)[0]}`}>
												<ListItemIcon>
													<Avatar alt={value.title} src={value.image}/>
												</ListItemIcon>
												<ListItemText primary={`${value.title}`}
															  secondary={value.subCountLabel ? `${value.subCountLabel} Listeners` : "No Listeners"}/>
											</ListItem>
										))}
										<Divider/>
									</React.Fragment>
								) : null}
								{listItems.items.length ? (
									<React.Fragment>
										{listItems.items.map((value, index) => (
											<ListItem button key={index} onClick={() => PlaySong(value, {
												list: listItems, index: index
											})}>
												<ListItemIcon>
													<Avatar alt={value.snippet.title}
															src={value.snippet.thumbnails.default.url}/>
												</ListItemIcon>
												<ListItemText primary={`${value.snippet.title}`}
															  secondary={`${value.snippet.channelTitle}`}/>
											</ListItem>
										))}
									</React.Fragment>
								) : null}
							</React.Fragment>
						) : <SkeletonList length={10}/>}
					</div>
				</div>
			</Dialog>
		</div>
	);
};

SearchResultComponent.propTypes = {};

SearchResultComponent.defaultProps = {};

const mapStateToProps = state => ({
	query: state.q,
});
export default connect(mapStateToProps)(pure(SearchResultComponent));
