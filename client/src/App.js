import React from 'react';
import './App.css';
import HomeComponent from "./components/home/home";
import Player from "./components/Player/Player";

function App() {
    return (
        <div className="App">
            <audio id="MainAudioElement" className={'d-none'}/>
            <HomeComponent/>
            <Player
                audio={new Audio('https://hosted-kabeersnetwork.000webhostapp.com/.well-known/TravisScott-ThePlan.mp3')}
                uri={'https://hosted-kabeersnetwork.000webhostapp.com/.well-known/TravisScott-ThePlan.mp3'}
                thumbnail={'https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_68585523.jpg?auto=format&q=60&fit=max&w=930'}/>
        </div>
    );
}

export default App;
