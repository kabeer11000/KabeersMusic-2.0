import React from "react";
import "./App.css";
import HomeComponent from "./components/Home/home.lazy";
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";
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
import {SnackbarProvider} from "notistack";
import CssBaseline from "@material-ui/core/CssBaseline";
import Settings from "./components/Settings/Settings.lazy";
//import "swiped-events";
import Liked from "./components/Liked/Liked.lazy";
import "bootstrap/dist/css/bootstrap-utilities.css";
import {DialogProvider} from "muibox";
import endPoints from "./api/endpoints/endpoints";
import PlayLists from "./components/PlayLists/PlayLists.lazy";

const App = () => {
	const [darkState, setDarkState] = React.useState(localStorage.getItem("darkmode") === null ? false : JSON.parse(localStorage.getItem("darkmode")));
	const [Player__, SetPlayer] = React.useState(true);
	const [backdrop, SetBackdrop] = React.useState(true);
	const palletType = darkState ? "dark" : "light";
	const colors = {
		primary: {
			contrastText: darkState ? "#757575" : "#FFFFFF",
			appBarText: "#FFFFFF",
			main: "#E14A58",
			light: darkState ? "#757575" : "#FFFFFF",
			dark: darkState ? "#303030" : "#FFFFFF",
			miniPlayer: {
				main: darkState ? "#303030" : "#FEFEFE",
				borderTop: darkState ? "#E14A58" : "#3C3F41",
				text: darkState ? "#FFFFFF" : "#2B2B2B",
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
			light: darkState ? "#757575" : "#FFFFFF",
			dark: darkState ? "#303030" : "#FFFFFF"
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
		setDarkState(!darkState);
		localStorage.setItem("darkmode", JSON.stringify(!darkState));
	};

	async function changeStates(state, proxy = true) {
		const audio = document.getElementById("MainAudio-KabeersMusic");
		try {
			audio.pause();
			audio.src = "";
			state.list && state.index && state.thumbnail && state.video && state.uri ? state.hidden = !1 : state.hidden = !0;
			audio.src = proxy ? endPoints.proxyURI(state.uri) : state.uri;
			store.dispatch(setCurrentSongState(audio, state.video, {Dialog: !0, MiniPlayer: !1}, () => {
			}, {list: state.list, index: state.index}));
			SetPlayer(true);
			SetPlayer(false);
			SetBackdrop(true);
		} catch (e) {
			console.log(e);
		}
	}

	const misc_functions = {
		hideBackdrop() {
			SetBackdrop(true);
		},
		showBackdrop() {
			SetBackdrop(false);
		},
	};


	return (
		<Provider store={store}>
			<MuiThemeProvider theme={darkTheme}>
				<Router>
					<DialogProvider>
						<SnackbarProvider maxSnack={1}>
							<CssBaseline/>
							<div className="App">
								<DrawerComponent>
									<Route exact={true}
										   path={["/", "/home", "/search", "/downloads", "/history", "/liked", "/charts"]}
										   render={() => (
											   <React.Fragment>
												   <CustomAppBar/>
												   {/*<BackDropLoader hidden={backdrop}/>*/}
											   </React.Fragment>
										   )}/>
									<Player misc_func={misc_functions} hidden={Player__} changes={changeStates}/>
									<MiniPlayer hidden={Player__}/>
									<Route exact={true} path={"/home"}
										   render={() => <HomeComponent misc={misc_functions}
																		appState={changeStates}/>}/>
									<Route exact={true} path={"/downloads"}
										   render={() => <Downloads appState={changeStates}/>}/>
									<Route exact={true} path={"/search"} component={SearchComponent}/>
									<Route exact={true} path={"/liked"} component={Liked}/>
									<Route exact={true} path={"/settings"} render={() => {
										let audio = document.getElementById("MainAudio-KabeersMusic");
										if (!audio.paused) audio.pause();
										return <Settings handleTheme={handleThemeChange}/>;
									}}/>
									<Route exact={true} path={"/history"} component={HistoryComponent}/>
									<Route exact={true} path={"/charts"} component={PlayLists}/>
									<Route exact={false} path={"/*"} render={() => {
										return <Redirect to={"/home"}/>;
									}}/>
									<Route exact={true} path={"/search/results"} render={() => {
										return <SearchResultComponent appState={changeStates}/>;
									}}/>
									<CustomBottomNavigation progress_hidden={backdrop}/>
								</DrawerComponent>
							</div>
						</SnackbarProvider>
					</DialogProvider>
				</Router>
			</MuiThemeProvider>
		</Provider>
	);
};

export default App;
