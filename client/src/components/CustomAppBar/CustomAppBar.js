import React from 'react';
import './CustomAppBar.css';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import Typography from "@material-ui/core/Typography";

const CustomAppBar = () => (
    <AppBar position="fixed">
        <Toolbar>
            <IconButton edge="start" color="primary" aria-label="menu">
                <Menu/>
            </IconButton>
            <Typography variant="h6">
                Music
            </Typography>
        </Toolbar>
    </AppBar>
);

CustomAppBar.propTypes = {};

CustomAppBar.defaultProps = {};

export default CustomAppBar;
