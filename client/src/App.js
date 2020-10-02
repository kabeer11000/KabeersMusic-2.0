import React from "react";
import "./App.css";
import HomeComponent from "./components/Home/home.lazy";
import {BrowserRouter as Router, Route} from "react-router-dom";
import CustomBottomNavigation from "./components/CustomBottomNavigation/CustomBottomNavigation.lazy";
import Downloads from "./components/Downloads/Downloads.lazy";
import Player from "./components/Player/Player.lazy";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import CustomAppBar from "./components/CustomAppBar/CustomAppBar.lazy";
import SearchComponent from "./components/SearchComponent/SearchComponent.lazy";
import DrawerComponent from "./components/Drawer/Drawer.lazy";
import {Provider} from "react-redux";
import store from "./Redux/store/store";
import {setCurrentSongState} from "./Redux/actions/actions";
import MiniPlayer from "./components/Player/MiniPlayer.lazy";
import SearchResultComponent from "./components/SearchComponent/SearchResultComponent.lazy";
import HistoryComponent from "./components/History/History.lazy";
import CssBaseline from "@material-ui/core/CssBaseline";
import Settings from "./components/Settings/Settings.lazy";
import Liked from "./components/Liked/Liked.lazy";
import "bootstrap/dist/css/bootstrap-utilities.css";
import {DialogProvider} from "muibox";
import endPoints from "./api/endpoints/endpoints";
import PlayLists from "./components/PlayLists/PlayLists.lazy";
import NoSsr from "@material-ui/core/NoSsr";
import ArtistComponent from "./components/ArtistComponent/ArtistComponent.lazy";
import {pure} from "recompose";
import "./functions/Cast/Cast";
import {useBeforeunload} from "react-beforeunload";
import {
	setCastDevicePlayListener,
	setCastDeviceRemoveListener,
	setCastDeviceUpdateListener,
	unRegisterDevice
} from "./functions/Cast/Cast";
import {getSong} from "./functions/songs";
import {useSnackbar} from "notistack";
import {storageIndex} from "./functions/Helper/storageIndex";
import {FocusRoot} from "@please/lrud";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SearchComponentTV from "./components/SearchComponentTV/SearchComponentTV.lazy";


const NotFoundComponent = (props) => {
	//const location = useLocation();
	return <h3><code>{"location.pathname"}</code> was not found on the server</h3>;
};

const App = (props) => {
//   blacklist: [/^\/cast/,/^\/api/,/^\/auth/],
	const {enqueueSnackbar, closeSnackbar} = useSnackbar();
	const audio = document.getElementById("MainAudio-KabeersMusic");
	const cutCurrentSongState = async () => {
		audio.pause();
		const e = store.getState().currentSong;
		return store.dispatch(setCurrentSongState(new Audio(""), e.videoElement, {
			Dialog: false,
			MiniPlayer: false
		}, e.reOpenDialog, e.playList)), audio.src = "#", setMainState(prevState => ({
			...prevState,
			player: false,
		})), closeSnackbar();
	};
	setCastDeviceUpdateListener(true, (e) => console.log);
	setCastDeviceRemoveListener(true, cutCurrentSongState);
	useBeforeunload(unRegisterDevice);
	setCastDevicePlayListener(true, (e) => (e = JSON.parse(e.data), getSong(e.video.snippet.id).then(value => value ? (changeStates({
		uri: value,
		thumbnail: e.video.snippet.thumbnails.high.url,
		video: e.video,
		list: {items: [e.video]},
		index: 0
	}), enqueueSnackbar(`Casting ${e.video.snippet.title} from ${e.deviceId}`)) : null)));
	const [mainState, setMainState] = React.useState({
		player: true,
		backdrop: true,
		darkState: localStorage.getItem(storageIndex.darkMode) === null ? false : JSON.parse(localStorage.getItem(storageIndex.darkMode))
	});
	//const matches = useMediaQuery("@media tv, (width: 1920px) and (height: 1080px), (width: 1280px) and (height: 720px)");
	const matches = useMediaQuery("(min-width:600px)");

	const palletType = mainState.darkState ? "dark" : "light";
	const colors = {
		primary: {
			contrastText: mainState.darkState ? "#757575" : "#FFFFFF",
			appBarText: "#FFFFFF",
			main: "#E14A58",
			light: mainState.darkState ? "#757575" : "#FFFFFF",
			dark: mainState.darkState ? "#303030" : "#FFFFFF",
			miniPlayer: {
				main: mainState.darkState ? "#303030" : "#FEFEFE",
				borderTop: mainState.darkState ? "#E14A58" : "#3C3F41",
				text: mainState.darkState ? "#FFFFFF" : "#2B2B2B",
			},
			player: {
				slider: {
					rail: "#FFF",
					thumb: "#FFF",
					thumbColorPrimary: "#FFF"
				},
				invertButtons: {
					main: "#E14A58",
					invert: "#FFFFFF"
				},
				volumeSlider: {
					main: "#000"
				}
			}
		},
		secondary: {
			main: "#E14A58",
			light: mainState.darkState ? "#757575" : "#FFFFFF",
			dark: mainState.darkState ? "#303030" : "#FFFFFF"
		},
		background: {},

	};

	const darkTheme = createMuiTheme({
		palette: {
			type: palletType,
			...colors,
			Slider: {
				root: {
					color: "#6f8eff",
					height: 3,
					padding: "13px 0",
				},
				track: {
					height: 4,
					borderRadius: 2,
				},
				thumb: {
					height: 20,
					width: 20,
					backgroundColor: "#000",
					border: "1px solid currentColor",
					marginTop: -9,
					marginLeft: -11,
					boxShadow: "#ebebeb 0 2px 2px",
					"&:focus, &:hover, &$active": {
						boxShadow: "#ccc 0 2px 3px 1px",
					},
					color: "#000",
				}
			}
		}
	});
	const handleThemeChange = () => {
		setMainState(prevState => ({
			...prevState,
			darkState: !mainState.darkState
		}));
		localStorage.setItem(storageIndex.darkMode, JSON.stringify(!mainState.darkState));
	};

	async function changeStates(state, proxy = true) {
		//if (currentlyCasting) cutCurrentSongState();
		try {
			audio.pause();
			audio.src = "";
			state.list && state.index && state.thumbnail && state.video && state.uri ? state.hidden = !1 : state.hidden = !0;
			audio.src = proxy ? endPoints.proxyURI(state.uri) : state.uri;
			store.dispatch(setCurrentSongState(audio, state.video, {Dialog: !0, MiniPlayer: !1}, () => {
			}, {list: state.list, index: state.index}));
			setMainState(a => ({...a, player: !0}));
			setMainState(a => ({...a, player: !1}));
			setMainState(a => ({...a, backdrop: !0}));
		} catch (e) {
			console.log(e);
		}
	}

	const misc_functions = {
		hideBackdrop() {
			setMainState(prevState => ({
				...prevState,
				backdrop: true
			}));
		},
		showBackdrop() {
			setMainState(prevState => ({
				...prevState,
				backdrop: false
			}));
		},
	};
	const sharedProps = {
		isTv: matches
	};

	return (
		<Provider store={store}>
			<MuiThemeProvider theme={darkTheme}>
				<Router>
					<NoSsr>
						<DialogProvider>
							<CssBaseline/>
							<div className="App">
								<FocusRoot>
									<DrawerComponent {...sharedProps}>
										<Route exact
											   path={["/", "/home", "/search", "/downloads", "/history", "/liked", "/charts"]}
											   render={() => (
												   <React.Fragment>
													   <CustomAppBar {...sharedProps}
																	 progress_hidden={mainState.backdrop}/>
													   <CustomBottomNavigation
														   progress_hidden={mainState.backdrop} {...sharedProps}/>
													   {/*<BackDropLoader hidden={backdrop}/>*/}
												   </React.Fragment>
											   )}/>
										<Player offline={navigator.onLine} misc_func={misc_functions}
												hidden={mainState.player}
												changes={changeStates} {...sharedProps}/>
										<MiniPlayer hidden={mainState.player} {...sharedProps}/>
										<Route path={"/home"}
											   render={() => <HomeComponent {...sharedProps} misc={misc_functions}
																			appState={changeStates}/>}/>

										<Route exact path={"/downloads"}
											   render={() => <Downloads {...sharedProps} appState={changeStates}/>}/>
										{
											sharedProps.isTv ? (
												<React.Fragment>
													<Route exact={true} path={"/search/results"}
														   render={() => <SearchResultComponent {...sharedProps}
																								appState={changeStates}/>}/>
													<Route exact path={"/search"} component={() => <SearchComponentTV
														appState={changeStates}/>}/>
												</React.Fragment>
											) : (
												<React.Fragment>
													<Route exact={true} path={"/search/results"}
														   render={() => <SearchResultComponent {...sharedProps}
																								appState={changeStates}/>}/>
													<Route exact path={"/search"} component={SearchComponent}/>
												</React.Fragment>
											)
										}
										<Route exact path={"/liked"} component={Liked}/>
										<Route exact path={"/settings"} render={() => {
											if (!audio.paused) audio.pause();
											return <Settings {...sharedProps} handleTheme={handleThemeChange}/>;
										}}/>
										<Route exact path={"/history"} component={HistoryComponent}/>
										<Route exact path={"/charts"} component={PlayLists}/>
										<Route exact path={"/artist"} render={() => {
											return <ArtistComponent {...sharedProps} appState={changeStates}
																	misc={misc_functions}/>;
										}}/>
										{
											/*
										<Route path={"*"} component={<NotFoundComponent/>}/>
										<Route path={"*"} component={<NotFoundComponent/>}/>

										<Route render={()=>errorPage('Route Not Found, 404', ()=>{}, <Button
											onClick={()=>{window.location.href = ('/home')}}>Go Home</Button>)}/>
											 */
										}
									</DrawerComponent>
								</FocusRoot>
							</div>
						</DialogProvider>
					</NoSsr>
				</Router>
			</MuiThemeProvider>
		</Provider>
	);
};

export default pure(App);
