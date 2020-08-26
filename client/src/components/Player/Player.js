import React from 'react';
import './Player.css';
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import {Close} from "@material-ui/icons";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Player = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const playAudio = (id) => {

    };
    const handleVolume = (v) => {

    };
    return (
        <div className="Player">
            <div>
                <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                    Open full-screen dialog
                </Button>
                <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                                <Close/>
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                Sound
                            </Typography>
                            <Button autoFocus color="inherit" onClick={handleClose}>
                                save
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <List>
                        <ListItem button>
                            <ListItemText primary="Phone ringtone" secondary="Titania"/>
                        </ListItem>
                        <Divider/>
                        <ListItem button>
                            <ListItemText primary="Default notification ringtone" secondary="Tethys"/>
                        </ListItem>
                    </List>
                </Dialog>
            </div>
        </div>
    );
};

Player.propTypes = {};

Player.defaultProps = {};

export default Player;
