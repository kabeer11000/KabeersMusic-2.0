import React from 'react';
import './App.css';
import HomeComponent from "./components/home/home";
import {BrowserRouter as Router, Route} from "react-router-dom";
import CustomBottomNavigation from "./components/CustomBottomNavigation/CustomBottomNavigation";
import Downloads from "./components/Downloads/Downloads";
import Player from "./components/Player/Player";
import Redirect from "react-router-dom/es/Redirect";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";


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
    const palletType = darkState ? "dark" : "light";
    const darkTheme = createMuiTheme({
        palette: {
            type: palletType,
        }
    });
    const handleThemeChange = () => {
        setDarkState(!darkState);
    };

    function changeStates(state) {
        try {
            audio.pause();
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
            setPlayerState({...state, audio: audio});
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <MuiThemeProvider theme={darkTheme}>
            <Router>
                <div className="App">
                    <Player list={PlayerState.list} index={PlayerState.index} audio={PlayerState.audio}
                            thumbnail={PlayerState.thumbnail} video={PlayerState.video}
                            hidden={PlayerState.hidden} changes={changeStates}/>
                    <Route path={'/home'} render={() => <HomeComponent appState={changeStates}/>}/>
                    <Route path={'/downloads'} component={Downloads}/>
                    <Route exact path={'/'} render={() => {
                        return <Redirect to={'/home'}/>
                    }}/>
                    <CustomBottomNavigation/>
                </div>
            </Router>
        </MuiThemeProvider>
    );
}

export default App;
