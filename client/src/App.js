import React from 'react';
import './App.css';
import HomeComponent from "./components/home/home";
import {BrowserRouter as Router, Route} from "react-router-dom";
import CustomBottomNavigation from "./components/CustomBottomNavigation/CustomBottomNavigation";
import Downloads from "./components/Downloads/Downloads";
import Player from "./components/Player/Player";
import Redirect from "react-router-dom/es/Redirect";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import CustomAppBar from "./components/CustomAppBar/CustomAppBar";
import SearchComponent from "./components/SearchComponent/SearchComponent";
import DrawerComponent from "./components/Drawer/Drawer";
import {Provider} from "react-redux";
import store from "./Redux/store/store";
import {setCurrentSongState} from "./Redux/actions/actions";

//const {useRef} = require("react");


function App() {
    const audio = new Audio('');
    const [PlayerState, setPlayerState] = React.useState({
        audio: audio,
        uri: '',
        thumbnail: '',
        video: {snippet: {}},
        hidden: true,
        list: [],
        index: 0
    });
    const [darkState, setDarkState] = React.useState(false);
    const [Player__, SetPlayer] = React.useState(true);
    const palletType = darkState ? "dark" : "light";
    const darkTheme = createMuiTheme({
        palette: {
            type: palletType,
        }
    });
    const handleThemeChange = () => {
        setDarkState(!darkState);
    };

    async function changeStates(state) {
        try {
            //audio.pause();
            //audio.src = '';
            state.list && state.index && state.thumbnail && state.video && state.uri ? state.hidden = false : state.hidden = true;
            //audio.src = state.uri;
            store.dispatch(setCurrentSongState(new Audio(state.uri), state.video, {
                Dialog: true,
                MiniPlayer: false
            }, () => {
            }, {
                list: state.list,
                index: state.index
            }));
            SetPlayer(false);
        } catch (e) {
            console.log(e);
        }
    }

    /*
        async function changeStates(state) {
            try {
                audio.pause();
                audio.src = '';
                setPlayerState({
                    index: state.index,
                    audio: audio,
                    uri: '',
                    thumbnail: '',
                    video: {snippet: {}},
                    hidden: true,
                    list: state.list
                });
                state.thumbnail && state.video && state.uri ? state.hidden = false : state.hidden = true;
                audio.src = state.uri;
                // setPlayerState({...state, audio: audio});
                store.dispatch(setCurrentSongState(audio, state.video, { Dialog: true, MiniPlayer: false}, ()=>{}, state.list));
                SetPlayer(<Player list={state.list} index={state.index} audio={audio}
                                  thumbnail={state.video.snippet.thumbnails.maxres.url} video={state.video}
                                  hidden={false} changes={changeStates}/>);
            } catch (e) {
                console.log(e);
            }
        }

     */
    return (
        <Provider store={store}>
            <MuiThemeProvider theme={darkTheme}>
                <Router>
                    <div className="App">
                        <DrawerComponent>
                            <audio id={'MainAudio'} src={''} preload={'auto'}/>
                            <CustomAppBar/>
                            <Player hidden={Player__} changes={changeStates}/>
                            <Route path={'/home'} render={() => <HomeComponent appState={changeStates}/>}/>
                            <Route path={'/downloads'} component={Downloads}/>
                            <Route path={'/search'} component={SearchComponent}/>
                            <Route exact path={'/'} render={() => {
                                return <Redirect to={'/home'}/>
                            }}/>
                            <CustomBottomNavigation/>
                        </DrawerComponent>
                    </div>
                </Router>
            </MuiThemeProvider>
        </Provider>
    );
}

export default App;
