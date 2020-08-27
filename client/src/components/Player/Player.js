import React from 'react';
import './Player.css';
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import {Close, Pause, PlayCircleOutline} from "@material-ui/icons";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Slide from "@material-ui/core/Slide";
import Slider from "@material-ui/core/Slider";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Player = (props) => {
    const useStyles = makeStyles((theme) => ({
        appBar: {
            position: 'relative',
        },
        title: {
            marginLeft: theme.spacing(2),
            flex: 1,
        }
    }));
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [voulme, setVolume] = React.useState(1.0);
    const [scrubbing, setScrubbing] = React.useState(0);
    const audioElement = props.audio;


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {

        audioElement.pause();
        setOpen(false);
    };

    function playAudio() {
        audioElement.play();
        //interval_ = setInterval(function(){ console.log(scrubbing) }, 100);
    }

    function handleVolume(v) {
        setVolume(v);
        audioElement.volume = v;
    }

    function pauseAudio() {
        audioElement.pause();
    }

    audioElement.addEventListener("timeupdate", async () => {
        setScrubbing(Math.round(audioElement.currentTime));
    });

    async function handleScrubbing(v) {
        setScrubbing(Math.round(v));
        audioElement.currentTime = Math.round(v);
    }

    return (
        <div className="Player">
            <div className={'container'}>
                <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                    Open full-screen dialog
                </Button>
                <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                                <Close/>
                            </IconButton>
                            <IconButton edge="start" color="inherit" onClick={pauseAudio} aria-label="close">
                                <Pause/>
                            </IconButton>
                            <IconButton edge="start" color="inherit" onClick={playAudio} aria-label="close">
                                <PlayCircleOutline/>
                            </IconButton>
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
                        </Toolbar>
                    </AppBar>
                    <div>
                        <div className={'ImageCircle rounded-circle thumbnail'}>
                            <img src={props.thumbnail}
                                 className={'image img-fluid rounded-circle border'}
                                 style={{
                                     width: 'auto',
                                     height: '10rem',
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
                        backgroundColor: 'transparent'
                    }} component={'div'}>
                        <Slider
                            className={'container'}
                            defaultValue={0}
                            value={scrubbing}
                            min={0.0}
                            max={audioElement.duration}
                            valueLabelDisplay="auto"
                            onChangeCommitted={async (v, x) => handleScrubbing(x)}
                        />
                        <div className={'container'} style={{
                            width: '100%',
                            display: 'inline-flex',
                            justifyContent: 'space-between',
                            transform: 'translate(0%)'
                        }}>
                            <IconButton><Pause/></IconButton>
                            <IconButton color={'#FFF'}><Pause/></IconButton>
                            <IconButton><Pause/></IconButton>
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
