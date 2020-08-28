import React, {useEffect} from 'react';
import './Player.css';
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import {
    ArrowBack,
    Close,
    Done,
    GetApp,
    Loop,
    Pause,
    PlayCircleOutline,
    SkipNext,
    SkipPrevious
} from "@material-ui/icons";
import Slide from "@material-ui/core/Slide";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import {downloadSong, getSong, isOfflineAvailable, saveToHistory} from "../../functions/songs";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import * as PropTypes from "prop-types";
import keys from "../../api/keys/keys";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const MiniPlayerTransition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const _Slider = (props) => {
    const [scrubbing, setScrubbing] = React.useState(props.audioElement);
    setInterval(() => !props.audioElement.paused ? setScrubbing(props.getAudioPosition) : null, 1000);
    return (<Slider
        className={props.classnames}
        defaultValue={0}
        value={scrubbing}
        min={0.0}
        max={props.audioElement.duration}
        valueLabelDisplay="auto"
        onChangeCommitted={async (v, x) => props.handleScrubbing(x)}
    />);
};

const Player = (props) => {
    if (props.hidden) {
        return <></>;
    }
    const [open, setOpen] = React.useState(true);
    const [button, setButton] = React.useState(<IconButton onClick={pauseAudio}><Pause color={'#fff'}/></IconButton>);
    const [looping, setLooping] = React.useState(<IconButton style={{backgroundColor: "initial"}} onClick={() => {
        audioElement.loop = true;
        setLooping(<IconButton onClick={() => {
            audioElement.loop = false
        }} style={{backgroundColor: '#3F51B5'}}><Loop style={{color: '#FFFFFF'}}/></IconButton>)
    }}><Loop style={{color: "initial"}}/></IconButton>);
    const audioElement = props.audio;
    const [miniplayer, setMiniplayer] = React.useState(false);
    const [downloadButton, setDownloadButton] = React.useState(<div/>);

    const handleClose = () => {
        setMiniplayer(true);
        setOpen(false);

    };

    const closeAll = () => {
        audioElement.pause();
        audioElement.currentTime = 0;
        audioElement.remove();
        setMiniplayer(false);
        setOpen(false);

    };

    async function addToHistory() {
        saveToHistory({
            videoId: props.video.id,
            title: props.video.title,
            channelTitle: props.video.snippet.channelTitle,
            tags: props.video.snippet.tags,
            thumbnail: props.video.snippet.thumbnails.standard.url,
            rating: 0
        });
    }

    function playAudio() {
        audioElement.play();
        setButton(<IconButton onClick={pauseAudio}><Pause
            color={'#fff'}/></IconButton>);
    }

    function downloadAudio() {
        downloadSong({videoId: props.video.id, rating: 0});
    }

    /*
    function handleVolume(v) {
        setVolume(v);
        audioElement.volume = v;
    }*/
    function HideOnScroll(props) {
        const {children, window} = props;
        // Note that you normally won't need to set the window ref as useScrollTrigger
        // will default to window.
        // This is only being set here because the demo is in an iframe.
        const trigger = useScrollTrigger({target: window ? window() : undefined});

        return (
            <Slide appear={false} direction="down" in={!trigger}>
                {children}
            </Slide>
        );
    }

    HideOnScroll.propTypes = {
        children: PropTypes.element.isRequired,
        /**
         * Injected by the documentation to work in an iframe.
         * You won't need it on your project.
         */
        window: PropTypes.func,
    };


    const miniPlayer = () => {
        if (!open && miniplayer && audioElement.src !== null || '' || undefined) {
            return (<HideOnScroll><AppBar color="primary" style={{
                    position: 'fixed',
                    top: "auto",
                    bottom: '3.5rem',
                    width: '100%',
                    backgroundColor: '#FEFEFE',
                }} component={'div'} elevation={1} className={'d-inline-flex border-top'}>
                    <div className={'d-inline-flex'}>
                        <div onClick={() => {
                            setOpen(true);
                            setMiniplayer(false)
                        }} className={'d-inline-flex'}>
                            <img src={props.thumbnail} style={{width: '4rem', height: '3rem'}}/>
                            <Typography component={'span'} className={'text-truncate p-2 pt-0` text-dark'}
                                        color={'#000'} style={{width: '10em'}}>{props.video.snippet.title || 'Untitled'}
                            </Typography>
                        </div>
                        <div className={`float-right ml-auto`}>
                            {button}
                            <IconButton onClick={closeAll}><Close/></IconButton>
                        </div>
                    </div>
                    <_Slider getAudioPosition={getAudioPosition} audioElement={audioElement}
                             handleScrubbing={handleScrubbing} classnames={'p-0 m-0'}/>
                </AppBar></HideOnScroll>
            );
        }
    };

    function getAudioPosition() {
        return audioElement.currentTime;
    }

    function pauseAudio() {
        audioElement.pause();
        setButton(<IconButton onClick={playAudio}><PlayCircleOutline color={'#fff'}/></IconButton>);
    }

    /*
        audioElement.addEventListener("timeupdate", async () => {
            setScrubbing(audioElement.currentTime);
        });

     */
    isOfflineAvailable(props.video.snippet.videoId)
        .then(value => {
            setDownloadButton(value ? <IconButton color={'#FFF'}><Done/></IconButton> :
                <IconButton color={'#FFF'} onClick={downloadAudio}><GetApp/></IconButton>);
        });

    async function handleScrubbing(v) {
        if (isFinite(v)) {
            audioElement.currentTime = v;
        }
    }

    useEffect(() => {
        window.addEventListener('unhandledRejection', () => {

        });
        return () => {
            window.addEventListener('unhandledRejection', () => {

            });
        }
    }, []);
    useEffect(() => {
        console.log(props.list);
        setTimeout(() => {
            if (audioElement.paused) return audioElement.play();
        }, 150)
    }, []);

    function SkipSong(data) {
        audioElement.pause();
        audioElement.src = null;
        getSong(keys.youtube, data.video.id).then(value => {
            if (value) {
                setTimeout(function () {
                    return props.changes({
                        uri: value,
                        thumbnail: data.video.snippet.thumbnails.maxres.url,
                        video: data.video,
                        list: props.list,
                        index: data.index
                    });
                }, 100);
            }
        });
    }

    return (
        <div className="Player">
            <div className={'container'}>
                {miniPlayer()}
                <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                    <AppBar>
                        <Toolbar>
                            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                                <ArrowBack/>
                            </IconButton>
                            <Typography variant={'h6'} component={'div'} className={'py-1 text-truncate'}>
                                {props.video.snippet.title || 'Untitled'}
                                <Typography variant={'body2'} style={{opacity: '50%'}}>
                                    {props.video.snippet.channelTitle || 'Unavailable'}
                                </Typography>
                            </Typography>
                            <div style={{flex: '1 1 auto'}}/>
                            <>
                                {
                                    downloadButton
                                }
                            </>
                        </Toolbar>
                    </AppBar>
                    <div>
                        <div style={{backgroundImage: props.thumbnail}}
                             className={'ImageCircle rounded-circle thumbnail'}>
                            <img src={props.thumbnail}
                                 className={'image img-fluid roun1ded-circle border'}
                                 style={{
                                     width: 'auto',
                                     height: '100%',
                                     position: 'absolute',
                                     top: '50%',
                                     left: '50%',
                                     transform: 'translate(-50%, -50%)'
                                 }}/>
                        </div>
                        <div id={'waveForm'} style={{width: '100%'}}/>
                    </div>
                    <AppBar color="primary" style={{
                        position: 'fixed',
                        top: "auto",
                        bottom: 0,
                        width: '100%',
                        backgroundColor: 'light'
                    }} component={'div'}>
                        <_Slider classnames={'container'} getAudioPosition={getAudioPosition}
                                 audioElement={audioElement} handleScrubbing={handleScrubbing}/>
                        {}
                        <div className={'container mb-2'} style={{
                            width: '70%',
                            display: 'inline-flex',
                            justifyContent: 'space-around',
                            transform: 'translate(0%)'
                        }}>
                            {props.list.items[props.index - 1] ? <IconButton><SkipPrevious onClick={() => {
                                const item = props.list.items[props.index - 1];
                                SkipSong({video: item, index: props.index - 1});
                            }}/></IconButton> : <IconButton disabled={true}><SkipPrevious/></IconButton>}
                            <div className={'ExpandedPlayButtonContainer'}>
                                {button}
                            </div>
                            {props.list.items[props.index + 1] ? <IconButton onClick={() => {
                                const item = props.list.items[props.index + 1];
                                // return props.changes({uri: value, thumbnail: data.snippet.thumbnails.maxres.url, video: data, list:props.list, index:data.index});
                                SkipSong({video: item, index: props.index + 1});
                            }}><SkipNext/></IconButton> : <IconButton disabled={true}><SkipNext/></IconButton>}
                        </div>
                    </AppBar>
                </Dialog>
            </div>
        </div>
    );
};

Player.propTypes = {};
Player.defaultProps = {};

export default Player;
/*

                            <Slider
                                defaultValue={1.0}
                                aria-labelledby="discrete-slider-small-steps"
                                step={0.001}
                                marks
                                min={0.0}
                                max={1.0}
                                getAriaValueText={handleVolume}
                                valueLabelDisplay="auto"
                            />

 */
