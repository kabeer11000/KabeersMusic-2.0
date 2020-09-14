import React from "react";
import "./Settings.css";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Switch from "@material-ui/core/Switch";
import ListSubheader from "@material-ui/core/ListSubheader";
import {Brightness4, BrokenImage} from "@material-ui/icons";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CustomAppBar from "../CustomAppBar/CustomAppBar.lazy";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import {FeedbackButton} from "../FeedBack/FeedBack";
import {storageIndex} from "../../functions/Helper/storageIndex";

const Settings = (props) => {
    const [checked, setChecked] = React.useState(['darkmode']);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };
    return (
        <div className="Settings">
            <CustomAppBar title={'Settings'}/>
            <List className={'mt-5 text-left'} subheader={<ListSubheader>Settings</ListSubheader>}>
                <div style={{display: "inline-flex", justifyContent: "center"}} className={"w-100"}>
                    {localStorage.getItem(storageIndex.userData) ?
                        <Avatar alt={JSON.parse(atob(localStorage.getItem(storageIndex.userData))).username}
                                src={JSON.parse(atob(localStorage.getItem(storageIndex.userData))).account_image}/> :
                        <Avatar src={<BrokenImage/>}/>}
                </div>
                <div className={"text-center"}>
                    <ListItemText id="switch-list-label-wifi"
                                  primary={`Welcome ${localStorage.getItem(storageIndex.userData) === null ? "User" : JSON.parse(atob(localStorage.getItem(storageIndex.userData))).username}`}/>
                </div>
                <Divider/>
                <ListItem>
                    <ListItemIcon>
                        <Brightness4/>
                    </ListItemIcon>
                    <ListItemText id="switch-list-label-wifi" primary="Dark Mode"/>
                    <ListItemSecondaryAction>
                        <Switch
                            edge="end"
                            onChange={props.handleTheme}
                            checked={localStorage.getItem('darkmode') === null ? false : JSON.parse(localStorage.getItem('darkmode'))}
                            inputProps={{'aria-labelledby': 'switch-list-label-wifi'}}
                        />
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                    <ListItemText id="switch-list-label-bluetooth" primary="Feedback and Help"/>
                    <ListItemSecondaryAction>
                        <FeedbackButton/>
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
        </div>
    );
};

Settings.propTypes = {};

Settings.defaultProps = {};

export default Settings;
