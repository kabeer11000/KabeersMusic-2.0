import React from 'react';
import './App.css';
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
import SearchResultComponent from "./components/SearchComponent/SearchResultComponent";
import HistoryComponent from "./components/History/History.lazy";
import {SnackbarProvider} from "notistack";
import CssBaseline from "@material-ui/core/CssBaseline";
import Settings from "./components/Settings/Settings.lazy";
import BackDropLoader from "./components/BackDropLoader/BackDropLoader.lazy";
import "swiped-events";
import Liked from "./components/Liked/Liked.lazy";

const App = () => {
    let audio = new Audio('');
    const [darkState, setDarkState] = React.useState(localStorage.getItem('darkmode') === null ? false : JSON.parse(localStorage.getItem('darkmode')));
    const [Player__, SetPlayer] = React.useState(true);
    const [backdrop, SetBackdrop] = React.useState(false);
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
                    rail: '#FFF',
                    thumb: '#FFF',
                    thumbColorPrimary: '#FFF'
                },
                invertButtons: {
                    main: "#E14A58",
                    invert: "#FFFFFF"
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
            slider: {
                trackColor: "yellow",
                selectionColor: "red"
            }
        }
    });
    const handleThemeChange = () => {
        setDarkState(!darkState);
        localStorage.setItem('darkmode', JSON.stringify(!darkState));
    };

    async function changeStates(state) {
        try {
            audio.pause();
            audio.src = "";
            state.list && state.index && state.thumbnail && state.video && state.uri ? state.hidden = !1 : state.hidden = !0;
            audio.src = state.uri;
            store.dispatch(setCurrentSongState(audio, state.video, {
                Dialog: true,
                MiniPlayer: false
            }, () => {
            }, {
                list: state.list,
                index: state.index
            }));
            SetPlayer(true);
            SetPlayer(false);
        } catch (e) {
            console.log(e);
        }
    }

    const misc_functions = {
        hideBackdrop() {
            SetBackdrop(false);
        },
        showBackdrop() {
            SetBackdrop(true)
        }
    };


    return (
        <Provider store={store}>
            <MuiThemeProvider theme={darkTheme}>
                <Router>
                    <SnackbarProvider maxSnack={1}>
                        <CssBaseline/>
                        <div className="App">
                            <DrawerComponent>
                                <Route exact={true} path={['/', '/home', '/search', '/downloads', '/history', '/liked']}
                                       render={() => (
                                           <React.Fragment>
                                               <CustomAppBar/>
                                               <BackDropLoader hidden={backdrop}/>
                                           </React.Fragment>
                                       )}/>
                                <Player misc_func={misc_functions} hidden={Player__} changes={changeStates}/>
                                <MiniPlayer hidden={Player__}/>
                                <Route exact={true} path={'/home'}
                                       render={() => <HomeComponent appState={changeStates}/>}/>
                                <Route exact={true} path={'/downloads'}
                                       render={() => <Downloads appState={changeStates}/>}/>
                                <Route exact={true} path={'/search'} component={SearchComponent}/>
                                <Route exact={true} path={'/liked'} component={Liked}/>
                                <Route exact={true} path={'/settings'} render={() => {
                                    if (!audio.paused) audio.pause();
                                    return <Settings handleTheme={handleThemeChange}/>
                                }}/>
                                <Route exact={true} path={'/history'} component={HistoryComponent}/>
                                <Route exact={true} path={'/*'} render={() => {
                                    return <Redirect to={'/home'}/>
                                }}/>
                                <Route exact={true} path={'/search/results'} render={() => {
                                    return <SearchResultComponent appState={changeStates}/>
                                }}/>
                                <CustomBottomNavigation/>
                            </DrawerComponent>
                        </div>
                    </SnackbarProvider>
                </Router>
            </MuiThemeProvider>
        </Provider>
    );
};

export default App;
