import React from "react";
import "./SearchComponentTV.css";
import {pure} from "recompose";
import store from "../../Redux/store/store";
import {SearchYoutube, SuggestSearch} from "../../functions/suggestSearch";
import {getSong, getSongFromStorage, SuggestOfflineSongs} from "../../functions/songs";
import {setQueryParams} from "../../Redux/actions/actions";
import {useHistory} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {SearchOutlined} from "@material-ui/icons";
import ListItemText from "@material-ui/core/ListItemText";
import {makeStyles} from "@material-ui/core/styles";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Container from "@material-ui/core/Container";
import SongCard from "../SongCard/SongCard.lazy";
import {FocusNode} from "@please/lrud";
import {storageIndex} from "../../functions/Helper/storageIndex";
import Slide from "@material-ui/core/Slide";
import Grow from "@material-ui/core/Grow";

const useStyles = makeStyles((theme) => ({
	root: {
		padding: "2px 4px",
		display: "flex",
		alignItems: "center",
		width: 400,
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
var route = "/users/:uid/pictures";
var routeMatcher = new RegExp(route.replace(/:[^\s/]+/g, "([\\w-]+)"));
var url = "/users/1024/pictures";

console.log(url.match(routeMatcher));

const SearchComponentTV = (props) => {
	let history = useHistory();
	const [open, setOpen] = React.useState({
		listItems: true,
		queryValue: store.getState().q || getParameterByName("q", window.location.href) || ""
	});

	function getParameterByName(name, url) {
		if (!url) url = window.location.href;
		name = name.replace(/[\[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return "";
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	}
	const [queryArray, setQueryArray] = React.useState([]);
	const abortController = new AbortController();
	const [songsResult, setSongsResult] = React.useState(undefined);
	const [listItems, setListItems] = React.useState(
		<Grow in={true}>
			<div className={"errorPage text-center"}
				 style={{
					 position: "absolute",
					 top: "50%",
					 left: "22.5%",
					 transform: "translate(-50%, -50%)"
				 }}>
				<img src={"./assets/icons/darkmode_nothingfound.svg"} style={{width: "8rem", height: "auto"}}
					 alt={"Kabeers Music Logo"}/>
				<br/>
				<div>{navigator.onLine ? "Results will appear as you type" : "Searching In Downloads"}</div>
			</div>
		</Grow>);
	const classes = useStyles();
	const ListItems = async () => {
		if (!queryArray) return;
		setListItems(() => queryArray.map((value, index) => {
			if (!value) return;
			return (
				<ListItem button key={index} onClick={() => Search(value.suggestion.attributes.data)}>
					<ListItemIcon>
						<SearchOutlined/>
					</ListItemIcon>
					<ListItemText primary={`${value.suggestion.attributes.data}`}/>
				</ListItem>
			);
		}));
	};
	const SearchYoutubeHelper = async (e) => {
		SearchYoutube(e, abortController)
			.then(resultsArray => {
				if (!resultsArray) return;
				setSongsResult(resultsArray);
			})
			.catch(setSongsResult(undefined));
	};
	const SearchDownloadsHelper = async (e) => {
		SuggestOfflineSongs(e)
			.then(resultsArray => {
				if (!resultsArray) return;
				setSongsResult(resultsArray);
			})
			.catch(setSongsResult(undefined));
	};
	const Search = async (value) => {
		if (navigator.onLine) SuggestSearch(value, abortController).then(v => v && v.length ? setQueryArray(v) : setQueryArray([]));
		else SuggestOfflineSongs(value).then(t => setQueryArray(t.map(t => ({suggestion: {attributes: {data: t.item.title}}}))));
		ListItems();
		history.push({
			pathname: "search",
			search: "?" + new URLSearchParams({q: value}).toString()
		});
		setOpen(prevState => ({
			...prevState,
			queryValue: value,
		}));
		store.dispatch(setQueryParams(value));
		if ((value.length > 6) && navigator.onLine) return SearchYoutubeHelper(value);
		else return SearchDownloadsHelper(value);
	};

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

	return (
		<Slide in={true} direction={"left"}>
			<div style={{height: "100%"}}>
				<div style={{width: "100%", display: "inline-flex", height: "49vh", justifyContent: "space-between"}}>
					{
						/*
									<AppBar className={`fixed-top bg-transparent`} elevation={0}>
						<Toolbar><Typography variant={"h4"}/>{store.getState().q}</Toolbar>
					</AppBar>
		*/
					}
					<FocusNode
						onFocused={() => setOpen(prevState => ({
							...prevState,
							listItems: false,
						}))}
						onBlurred={() => setOpen(prevState => ({
							...prevState,
							listItems: true,
						}))}>
						<Paper component="form" className={`ml-5 mt-5 ${classes.root}`}>
							<IconButton>
								<SearchIcon/>
							</IconButton>
							<Divider className={classes.divider} orientation="vertical"/>
							<InputBase
								autoFocus
								className={classes.input}
								value={open.queryValue}
								placeholder="Search Kabeers Music"
								inputProps={{"aria-label": "search kabeers music"}}
								onChange={(e) => Search(e.target.value)}
							/>
						</Paper>
						<br/>
						<Paper className={"ml-5"}
							   style={{
								   maxWidth: 400,
								   maxHeight: "30vh",
								   overflow: "hidden"
							   }} /* hidden={open.listItems} */>
							{listItems}
						</Paper>
					</FocusNode>
					<div>
						<div style={{width: "50vw", color: "black", height: "100%"}}
							 className={"bg-transparent mr-5 mt-5"}>
							{
								localStorage.getItem(storageIndex.onScreenKeyboard) !== null ? (
									<Keyboard
										className={"bg-transparent h-100 w-100"}
										onChange={Search}
										display={{
											"{bksp}": "<svg class=\"MuiSvgIcon-root jss172\" focusable=\"false\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z\"></path></svg>",
											"{enter}": "< enter",
											"{shift}": "shift",
											"{s}": "shift",
											"{tab}": "tab",
											"{lock}": "caps",
											"{accept}": "Submit",
											"{space}": "<svg class=\"MuiSvgIcon-root jss172\" focusable=\"false\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M18 9v4H6V9H4v6h16V9z\"></path></svg>",
											"{//}": " "
										}}
										{...localStorage.getItem(storageIndex.onScreenKeyboard) ? ({
											theme: "hg-theme-default"
										}) : null}
										layout={{
											"default": [
												"1 2 3 4 5 6 7 8 9 0",
												"q w e r t y u i o p",
												"a s d f g h j k l .com",
												"z x c v b n m @ {bksp}",
												"{space}"
											],
											"shift": [
												"~ ! @ # $ % ^ & * ( ) _ + {bksp}",
												"{tab} Q W E R T Y U I O P { } |",
												"{lock} A S D F G H J K L : \" {enter}",
												"{shift} Z X C V B N M < > ? {shift}",
												".com @ {space}"
											]
										}}
										onKeyPress={(e) => {
											console.log(e);
										}}
									/>
								) : null
							}
						</div>
					</div>
				</div>
				{/*hidden={!open.listItems}*/}
				<div className={"mt-0"}>
					{songsResult && (navigator.onLine ? (songsResult.items && songsResult.items.length) : true) ? (
						<Container maxWidth="xl" className={"px-0 mx-0"} style={{maxWidth: "100vw"}}>
							<div className={"cardSlider Slider"}>
								{
									navigator.onLine ?
										(songsResult.items.map((video, index) => (
											<SongCard key={index}
													  thumbnail={video.snippet.thumbnails.high.url}
													  key_={index}
													  video={video}
													  onPlay={() => PlaySong(video, {
														  list: songsResult, index: index
													  })}
													  list={songsResult}/>
										))) : (songsResult.map((video, index) => (
											<SongCard key={index}
													  thumbnail={URL.createObjectURL(video.item.thumbnail)}
													  key_={index}
													  video={video.item.videoElement}
													  onPlay={() => PlayOfflineSong(video.item, index)}
													  list={[]}/>
										)))
								}
							</div>
						</Container>) : null
					}
				</div>
			</div>
		</Slide>
	);
};

SearchComponentTV.propTypes = {};

SearchComponentTV.defaultProps = {};

export default pure(SearchComponentTV);
