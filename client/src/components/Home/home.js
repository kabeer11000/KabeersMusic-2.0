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
//import {work} from "worka";
//import {dictionary} from "../../functions/Worker/dict";

const playlistsIds = {
	LatestSongs: "PLFgquLnL59akA2PflFpeQG9L01VFg90wS",
	RomanticSongs: "PL64G6j8ePNureM8YCKy5nRFyzYf8I2noy",
	EdmSongs: "PLw-VjHDlEOgs658kAHR_LAaILBXb-s6Q5",
	TopBolloywood: "PLcRN7uK9CFpPkvCc-08tWOQo6PAg4u0lA",
	TopPop: "PLDcnymzs18LU4Kexrs91TVdfnplU3I5zs",
	Reggaeton: "PLS_oEMUyvA728OZPmF9WPKjsGtfC75LiN"
};
const HomeComponent = (props) => {
	const {enqueueSnackbar, closeSnackbar} = useSnackbar();
	const [mainArray, setMainArray] = React.useState([]);
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

	const getSlider = (value) => (
		<Grow in={true}>
			<React.Fragment>
				<Typography variant={"h5"} className={"pl-3 text-left"}>
					{value.title}
				</Typography>
				<Container maxWidth="xl" className={"px-0 mx-0"}>
					<div className={"cardSlider Slider"}>
						{value.songs.items.map((video, index) => <SongCard onPlay={PlaySong} list={value.songs}
																		   key_={index} key={index} video={video}
																		   thumbnail={video.snippet.thumbnails.high.url}/>)}
					</div>
				</Container>
			</React.Fragment>
		</Grow>
	);

	async function getPlaylistFromAPI(id, token) {
		return await fetch(endPoints.getPlayListById(id), {
			headers: new Headers({
				"Authorization": `Bearer ${token}`
			})
		});
	}

	async function getTopArtistFromAPI(token) {
		return await fetch(endPoints.getTopArtistFeed(), {
			headers: new Headers({
				"Authorization": `Bearer ${token}`
			})
		});
	}

	async function getSearchFeedFromAPI(token) {
		return await fetch(endPoints.getSearchFeed(), {
			headers: new Headers({
				"Authorization": `Bearer ${token}`
			})
		});
	}

	const Load = () => {
		initAuth()
			.then(token => {
				getPlaylistFromAPI(playlistsIds.TopBolloywood, token)
					.then(value => value.json())
					.then(data => {
						setSongObj(prevState => ({...prevState, TopBollywood: data}));
					}).catch(e => console.log(e));

				getPlaylistFromAPI(playlistsIds.LatestSongs, token)
					.then(value => value.json())
					.then(data => {
						setSongObj(prevState => ({...prevState, LatestSongs: data}));
					}).catch(e => console.log(e));

				getTopArtistFromAPI(token)
					.then(value => value.json())
					.then(data => {
						setSongObj(prevState => ({...prevState, TopArtist: data}));
					}).catch(e => console.log(e));

				getSearchFeedFromAPI(token)
					.then(value => value.json())
					.then(data => {
						setSongObj(prevState => ({...prevState, TopSearch: data}));
					}).catch(e => console.log(e));

				localStorage.setItem("homeObjectTime", JSON.stringify(Date.now()));
			}).catch(e => console.log(e));
	};

	const errorPage = (message = "No Internet Connection", button = <Button onClick={Load}>Retry</Button>) => (
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
			if (value) {
				//Avoid the Promise Error
				props.appState({
					uri: value,
					thumbnail: data.snippet.thumbnails.high.url,
					video: data,
					list: list,
					index: index
				});
			}
		}).catch(e => {
			console.log("Cannot Play Song");
			enqueueSnackbar("Cannot Play Song");
		});
	}

	useEffect(() => {
		if (localStorage.getItem("homePageSongObj") === null || (Date.now() - parseInt(localStorage.getItem("homeObjectTime"))) / (1000 * 60) > 1) Load();
		else setSongObj(JSON.parse(localStorage.getItem("homePageSongObj")));
	}, []);

	useEffect(() => {
		localStorage.setItem("homePageSongObj", JSON.stringify(songObj));
	}, [songObj]);

	return (
		<div className="home mb-5" style={{minHeight: "70vh"}}>
			<div style={{marginTop: "5rem"}}>
				{props.homeComponents ? props.homeComponents : <div>{Object.keys(songObj).length && !songObj.error ? (
					<React.Fragment>
						{Object.keys(songObj).map((key, keyIndex) => (
							<React.Fragment key={keyIndex}>
								<Grow in={true}>
									<Typography variant={"h5"} className={"pl-3 text-left"}>
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
							</React.Fragment>
						))}
					</React.Fragment>
				) : songObj.error ? errorPage() : null}</div>}
				{Object.keys(songObj).length === 0 ? <Preloader/> : null}
			</div>
		</div>
	);
};

HomeComponent.propTypes = {};
HomeComponent.defaultProps = {};

const mapStateToProps = state => ({
	homeComponents: state.home
});
export default connect(mapStateToProps)(HomeComponent);
