import React from 'react';
import './App.css';
import HomeComponent from "./components/home/home";
import Player from "./components/Player/Player";

function App() {
    return (
        <div className="App">
            <HomeComponent/>
            <Player/>
        </div>
    );
}

export default App;
