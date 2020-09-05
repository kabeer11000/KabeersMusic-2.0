import React from 'react';
import './CustomAppBar.css';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import {Menu, Search} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import store from "../../Redux/store/store";
import {setDrawerState} from "../../Redux/actions/actions";
import {makeStyles} from "@material-ui/core/styles";
import HideOnScroll from "../HideOnScroll/HideOnScroll";

const useStyles = makeStyles({
    appBar: {
        width: '100vw'
    },
});
const CustomAppBar = (props) => {
    const OpenDrawer = () => {
        store.dispatch(setDrawerState(true));
    };
    return (
        <HideOnScroll>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton onClick={OpenDrawer} edge="start" color={'inherit'} aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        Music
                    </Typography>
                    <div style={{flex: '1 1 auto'}}/>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="Search"
                        component={Link}
                        to={'/search'}
                    >
                        <Search/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    );
};

CustomAppBar.propTypes = {};

CustomAppBar.defaultProps = {};

export default CustomAppBar;
