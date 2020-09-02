import React, {useEffect} from 'react';
import './App.css';
import HomeComponent from "./components/home/home.lazy";
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
import MiniPlayer from "./components/Player/MiniPlayer";
import SearchResultComponent from "./components/SearchComponent/SearchResultComponent";
import HistoryComponent from "./components/History/History.lazy";
import {SnackbarProvider} from "notistack";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./functions/Helper/history";

//const {useRef} = require("react");


function App() {
    const audio = new Audio('');
    const [darkState, setDarkState] = React.useState(false);
    const [Player__, SetPlayer] = React.useState(true);
    const palletType = darkState ? "dark" : "light";
    const colors = {
        primary: {
            contrastText: darkState ? "#757575" : "#FFFFFF",
            main: "#68C398",
            light: darkState ? "#757575" : "#FFFFFF",
            dark: darkState ? "#303030" : "#FFFFFF",
            miniPlayer: {
                main: darkState ? "#303030" : "#FEFEFE",
                borderTop: darkState ? "#507262" : "#3C3F41",
                text: darkState ? "#FFFFFF" : "#2B2B2B",
            },
            player: {
                slider: {
                    rail: '#FFF',
                    thumb: '#FFF',
                    thumbColorPrimary: '#FFF'
                },
                invertButtons: {
                    main: "#68C398",
                    invert: "#FFFFFF"
                }
            }
        },
        secondary: {
            main: "#68C398",
            light: darkState ? "#757575" : "#FFFFFF",
            dark: darkState ? "#303030" : "#FFFFFF"
        },
        background: {},
    };
    const darkTheme = createMuiTheme({
        palette: {
            type: "dark",
            ...colors,
            slider: {
                trackColor: "yellow",
                selectionColor: "red"
            }
        }
    });
    const handleThemeChange = () => {
        setDarkState(!darkState);
    };

    async function changeStates(state) {
        try {
            audio.pause();
            audio.src = '';
            state.list &&
            state.index &&
            state.thumbnail &&
            state.video &&
            state.uri ? state.hidden = false : state.hidden = true;
            audio.src = state.uri;
            console.log(state.uri);
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

    async function componentDidMount() {
        return true;
    }

    useEffect(() => {

        /*
        const currentSong = store.getState().currentSong;
        const videoElement = currentSong.videoElement;
        if (videoElement) {
            let videoID = '';
            if (typeof videoElement.id === 'object') videoID = videoElement.id.videoId;
            if (typeof videoElement.id === 'string') videoID = videoElement.id;
            console.log('VideoID:', videoID);
            getSong(videoID).then(value => {
                if (value) {
                    try {
                        setTimeout(function () {
                            changeStates({
                                uri: value,
                                thumbnail: videoElement.snippet.thumbnails.high.url,
                                video: videoElement,
                                list: currentSong.playList.list,
                                index: currentSong.playList.index
                            });
                        }, 100);
                    } catch (e) {
                        console.log(e);
                    }
                }
            });
        }*/

    }, []);
    return (
        <Provider store={store}>
            <MuiThemeProvider theme={darkTheme}>
                <Router>
                    <SnackbarProvider maxSnack={1}>
                        <CssBaseline/>
                        <div className="App">
                            <DrawerComponent>
                                <audio id={'MainAudio'} src={''} preload={'auto'}/>
                                <CustomAppBar/>
                                <Player hidden={Player__} changes={changeStates}/>
                                <Route exact={true} path={'/home'}
                                       render={() => <HomeComponent appState={changeStates}/>}/>
                                <Route exact={true} path={'/downloads'}
                                       render={() => <Downloads appState={changeStates}/>}/>
                                <Route exact={true} path={'/search'} component={SearchComponent}/>
                                <Route exact={true} path={'/history'} component={HistoryComponent}/>
                                <Route exact={true} path={'*'} render={() => {
                                    return <Redirect to={'/home'}/>
                                }}/>
                                <Route exact={true} path={'/search/results'} render={() => {
                                    return <SearchResultComponent appState={changeStates}/>
                                }}/>
                                <CustomBottomNavigation/>
                                <MiniPlayer hidden={Player__}/>
                            </DrawerComponent>
                        </div>
                    </SnackbarProvider>
                </Router>
            </MuiThemeProvider>
        </Provider>
    );
}

export default App;
