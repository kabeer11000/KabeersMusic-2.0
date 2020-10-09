import React, {useEffect} from "react";
import "./home.css";
import {Button} from "@material-ui/core";
import endPoints from "../../api/endpoints/endpoints";
import SongCard from "../SongCard/SongCard.lazy";
import {getSong} from "../../functions/songs";
import {useSnackbar} from "notistack";
import {initAuth} from "../../functions/auth";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {connect} from "react-redux";
//import fetch from "../../functions/fetchWithTimeOut";
import Preloader from "../Preloader/Preloader";
import Grow from "@material-ui/core/Grow";
import {storageIndex} from "../../functions/Helper/storageIndex";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import {Done} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
//import {work} from "worka";
//import {dictionary} from "../../functions/Worker/dict";
import {pure} from "recompose";

function makeid(r) {
	for (var a = "", t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = t.length, o = 0; o < r; o++) a += t.charAt(Math.floor(Math.random() * n));
	return a;
}

function shuffleArray(o) {
	for (let t = o.length - 1; t > 0; t--) {
		const f = Math.floor(Math.random() * (t + 1));
		[o[t], o[f]] = [o[f], o[t]];
	}
}

const playlistsIds = {
	LatestSongs: "PLFgquLnL59akA2PflFpeQG9L01VFg90wS",
	RomanticSongs: "PL64G6j8ePNureM8YCKy5nRFyzYf8I2noy",
	EdmSongs: "PLw-VjHDlEOgs658kAHR_LAaILBXb-s6Q5",
	TopBolloywood: "PLcRN7uK9CFpPkvCc-08tWOQo6PAg4u0lA",
	TopPop: "PLDcnymzs18LU4Kexrs91TVdfnplU3I5zs",
	Reggaeton: "PLS_oEMUyvA728OZPmF9WPKjsGtfC75LiN"
};

const useStyles = makeStyles({});
const HomeComponent = (props) => {

	const classes = makeStyles(useStyles);
	const {enqueueSnackbar, closeSnackbar} = useSnackbar();
	const abortController = new AbortController();
	const [artists, setArtists] = React.useState({});
	const [songObj, setSongObj] = React.useState({});
	const [loadedComponents, setLoadedComponents] = React.useState(<React.Fragment/>);
	const [other, setOther] = React.useState(() => {
		if (!navigator.onLine) return (
			<div className={"errorPage"}
				 style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
				<img src={"./assets/icons/darkmode_nothingfound.svg"} style={{width: "8rem", height: "auto"}}
					 alt={"Kabeers Music Logo"}/>
				<br/>
				<div className={"text-truncate"}>{"No Internet Connection"}</div>
				<Button onClick={Load}>Retry</Button>
			</div>
		);
	});

	const getPlaylistFromAPI = async (e, t) => await fetch(endPoints.getPlayListById(e), {
		headers: new Headers({Authorization: `Bearer ${t}`}),
		signal: abortController.signal
	});
	const getTopArtistFromAPI = async (e) => await fetch(endPoints.getTopArtistFeed(), {
		headers: new Headers({Authorization: `Bearer ${e}`}),
		signal: abortController.signal
	});
	const getSearchFeedFromAPI = async (e) => await fetch(endPoints.getSearchFeed(), {
		headers: new Headers({Authorization: `Bearer ${e}`}),
		signal: abortController.signal
	});

	const Load = () => {
		initAuth()
			.then(token => {
				if (!token) console.log("No Token");
				const error = () => new Error("Not Found");

				getPlaylistFromAPI(playlistsIds.TopBolloywood, token).then(o => o.ok ? o.json() : error()).then(o => setSongObj(t => ({
					...t,
					[makeid(10)]: o
				}))).catch(o => (o));
				getPlaylistFromAPI(playlistsIds.LatestSongs, token).then(o => o.ok ? o.json() : error()).then(o => setSongObj(t => ({
					...t,
					[makeid(10)]: o
				}))).catch(o => (o));
				getPlaylistFromAPI(playlistsIds.TopPop, token).then(o => o.ok ? o.json() : error()).then(o => setSongObj(t => ({
					...t,
					[makeid(10)]: o
				}))).catch(o => (o));
				getPlaylistFromAPI(playlistsIds.RomanticSongs, token).then(o => o.ok ? o.json() : error()).then(o => setSongObj(e => ({
					...e,
					[makeid(10)]: o
				}))).catch(o => (o));
				getPlaylistFromAPI(playlistsIds.EdmSongs, token).then(o => o.ok ? o.json() : error()).then(o => setSongObj(e => ({
					...e,
					[makeid(10)]: o
				}))).catch(o => (o));
				getPlaylistFromAPI(playlistsIds.Reggaeton, token).then(o => o.ok ? o.json() : error()).then(o => setSongObj(e => ({
					...e,
					[makeid(10)]: o
				}))).catch(o => (o));

				getTopArtistFromAPI(token).then(o => o.ok ? o.json() : error()).then(o => setSongObj(e => ({
					...e,
					[makeid(10)]: o
				}))).catch(o => (o));
				getSearchFeedFromAPI(token).then(o => o.ok ? o.json() : error()).then(o => setSongObj(e => ({
					...e,
					[makeid(10)]: o
				}))).catch(o => (o));

				return Object.keys(songObj).length ? localStorage.setItem(storageIndex.homeTimeObject, JSON.stringify(Date.now())) : null;
			}).catch(e => {
			enqueueSnackbar("Failed to Load Songs");
			setOther(errorPage("An error Occurred Please Re login", <Button onClick={() => {
				window.location.href = "/auth/redirect";
			}}>Login</Button>));
		});
	};

	const errorPage = (message = "No Internet Connection", button = <Button onClick={() => {
		if (localStorage.getItem("homePageSongObj") === null || (Date.now() - parseInt(localStorage.getItem("homeObjectTime"))) / (1000 * 60) > 1) Load();
		else setSongObj(JSON.parse(localStorage.getItem("homePageSongObj")));
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

	function PlaySong(data, index, list) {
		props.misc.showBackdrop();
		getSong(typeof data.id === "object" ? data.id.videoId : data.id).then(value => {
			if (!value) return;
			//Avoid the Promise Error
			props.appState({
				uri: value,
				thumbnail: data.snippet.thumbnails.high.url,
				video: data,
				list: list,
				index: index
			});
		}).catch(e => enqueueSnackbar("Cannot Play Song"));
	}

	const init = () => {
		if (localStorage.getItem(storageIndex.homeSongObject) === null || !(Date.now() - parseInt(localStorage.getItem(storageIndex.homeTimeObject))) / (100 * 60) > 1) Load();
		else setSongObj(JSON.parse(localStorage.getItem(storageIndex.homeSongObject)));
		initAuth().then(token => fetch(endPoints.getFeedArtists, {
			headers: new Headers({Authorization: `Bearer ${token}`}),
			signal: abortController.signal
		}).then(e => e.json()).then(e => setArtists(e)).catch(e => console.log(e)));
	};

	useEffect(() => {
		if (navigator.onLine) init();
		//else enqueueSnackbar("Failed to Load Songs");
		return () => {
			abortController.abort();
		};
	}, []);

	useEffect(() => {
		if (Object.keys(songObj).length) {
			localStorage.setItem(storageIndex.homeSongObject, JSON.stringify(songObj));
			localStorage.setItem(storageIndex.homeTimeObject, JSON.stringify(Date.now()));
		}
	}, [songObj]);

	return (
		<div className="home mb-5" style={{minHeight: "70vh"}}>
			<div style={{marginTop: props.isTv ? "1rem" : "5rem"}}>
				<div className={`cardSlider text-left Slider ${artists.items ? "d-block" : "d-none"}`}>
					{artists.items ? (
						artists.items.map((v, i) => (

							<Grow in={true}>
								<Chip
									component={Link}
									to={"/artist?id=" + v.id}
									avatar={<Avatar>{v.name.charAt(0)}</Avatar>}
									label={v.name}
									clickable
									className={"mx-1"}
									deleteIcon={<Done/>}
								/>
							</Grow>
						))
					) : null}
				</div>
				{props.homeComponents ? props.homeComponents : <div>{Object.keys(songObj).length !== -1 ? (
					<React.Fragment>
						{Object.keys(songObj).map((key, keyIndex) => (
							<React.Fragment key={keyIndex}>
								{songObj[key] && songObj[key].items ?
									(<React.Fragment key={keyIndex}>
										<Grow in={true}>
											<Typography variant={"h5"} className={"pl-3 text-left text-truncate"}>
												{songObj[key].title}
											</Typography>
										</Grow>
										<Container maxWidth="xl" className={"px-0 mx-0"}>
											<div className={"cardSlider Slider"}>
												{songObj[key].items.map((video, index) => <SongCard key={index}
																									thumbnail={video.snippet.thumbnails.high.url}
																									key_={index}
																									video={video}
																									onPlay={PlaySong}
																									list={songObj[key]}/>
												)}
											</div>
										</Container>
									</React.Fragment>) : null}
							</React.Fragment>
						))}
					</React.Fragment>
				) : songObj.error ? errorPage() : null}</div>}
				{navigator.onLine ? null : errorPage()}
				{Object.keys(songObj).length === -1 ? (navigator.onLine ? <Preloader/> : null) : null}
			</div>
		</div>
	);
};

HomeComponent.propTypes = {};
HomeComponent.defaultProps = {};

const mapStateToProps = state => ({
	homeComponents: state.home
});
export default connect(mapStateToProps)(pure(HomeComponent));
