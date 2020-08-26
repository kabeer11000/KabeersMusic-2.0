import React from 'react';
import './CustomBottomNavigation.css';
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import {Favorite, Folder, LocationOn, Restore} from "@material-ui/icons";
import makeStyles from "@material-ui/core/styles/makeStyles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import AppBar from "@material-ui/core/AppBar";


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

        <AppBar color="primary" style={{position: 'fixed', top: "auto", bottom: 0, width: '100%',}} component={'div'}>
            <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
                <BottomNavigationAction label="Recents" value="recents" icon={<Restore/>}/>
                <BottomNavigationAction label="Favorites" value="favorites" icon={<Favorite/>}/>
                <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOn/>}/>
                <BottomNavigationAction label="Folder" value="folder" icon={<Folder/>}/>
            </BottomNavigation>
        </AppBar>
    );
};

CustomBottomNavigation.propTypes = {};

CustomBottomNavigation.defaultProps = {};

export default CustomBottomNavigation;
