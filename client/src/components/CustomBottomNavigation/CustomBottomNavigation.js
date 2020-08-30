import React from 'react';
import './CustomBottomNavigation.css';
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import {Favorite, GetApp, History, Home} from "@material-ui/icons";
import makeStyles from "@material-ui/core/styles/makeStyles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import AppBar from "@material-ui/core/AppBar";
import {Link} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});
const CustomBottomNavigation = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <AppBar color="primary" style={{position: 'fixed', top: "auto", bottom: 0, width: '100%',}}
                    component={'div'}>
                <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
                    <BottomNavigationAction style={{textDecoration: "none"}} component={Link} to={'/home'} label="Home"
                                            value="recents" icon={<Home/>}/>
                    <BottomNavigationAction style={{textDecoration: "none"}} component={Link} to={'/downloads'}
                                            label="Downloads" value="downloads"
                                            icon={<GetApp/>}/>
                    <BottomNavigationAction style={{textDecoration: "none"}} component={Link} to={'/history'}
                                            label="History" value="history"
                                            icon={<History/>}/>
                    <BottomNavigationAction style={{textDecoration: "none"}} component={Link} to={'/liked'}
                                            label="Liked" value="favorites"
                                            icon={<Favorite/>}/>
                </BottomNavigation>
            </AppBar>
        </>
    );
};

CustomBottomNavigation.propTypes = {};

CustomBottomNavigation.defaultProps = {};

export default CustomBottomNavigation;
