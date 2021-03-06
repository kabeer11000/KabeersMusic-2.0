import React from "react";
import "./Settings.css";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Switch from "@material-ui/core/Switch";
import ListSubheader from "@material-ui/core/ListSubheader";
import {Brightness4, BrokenImage, Cast, Keyboard} from "@material-ui/icons";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CustomAppBar from "../CustomAppBar/CustomAppBar.lazy";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import FeedbackButton from "../FeedBack/FeedBack";
import {storageIndex} from "../../functions/Helper/storageIndex";
import {pure} from "recompose";
import {useDialog} from "muibox";
import TextField from "@material-ui/core/TextField";
import {getDeviceId} from "../../functions/Cast/Cast";

const Settings = (props) => {
	const [checked, setChecked] = React.useState(["darkmode", "casting"]);
	const [casting, setCasting] = React.useState(localStorage.getItem(storageIndex.castEnabled) === null ? false : JSON.parse(localStorage.getItem(storageIndex.castEnabled)));
	const [state, setState] = React.useState({
		casting: localStorage.getItem(storageIndex.castEnabled) === null ? false : JSON.parse(localStorage.getItem(storageIndex.castEnabled)),
		checkedB: true,
		keyboard: localStorage.getItem(storageIndex.onScreenKeyboard) === null ? false : JSON.parse(localStorage.getItem(storageIndex.onScreenKeyboard))
	});
	const dialog = useDialog();

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
	const handleChange = (event) => {
		setState({...state, [event.target.name]: !event.target.checked});
	};
	return (
		<div className="Settings">
			<CustomAppBar title={"Settings"}/>
			<List className={"mt-5 text-left"} subheader={<ListSubheader>Settings</ListSubheader>}>
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
							checked={localStorage.getItem(storageIndex.darkMode) === null ? false : JSON.parse(localStorage.getItem(storageIndex.darkMode))}
							inputProps={{"aria-labelledby": "switch-list-label-wifi"}}
						/>
					</ListItemSecondaryAction>
				</ListItem>
				<ListItem>
					<ListItemIcon>
						<Cast/>
					</ListItemIcon>
					<ListItemText id="switch-list-label-wifi" primary="Song Casting"/>
					<ListItemSecondaryAction>
						<Switch
							edge="end"
							onChange={(e) => {
								localStorage.setItem(storageIndex.castEnabled, !state.casting);
								handleChange(e);
							}}
							checked={state.casting}
							inputProps={{"aria-labelledby": "switch-list-label-wifi"}}
						/>
					</ListItemSecondaryAction>
				</ListItem>
				<ListItem>
					<ListItemText id="switch-list-label-bluetooth" primary="Feedback and Help"/>
					<ListItemSecondaryAction>
						<FeedbackButton/>
					</ListItemSecondaryAction>
				</ListItem>
				<ListItem button onClick={() => {
					const config = {
						title: (
							<List className={"p-0 m-0"}>
								<ListItem className={"p-0 m-0"}>
									<ListItemText className={"p-0 m-0"} primary={"Device Cast Id"}
												  secondary={"This Will be used when casting to this device"}/>
								</ListItem>
							</List>
						),
						message: (
							<TextField disabled variant="filled" value={getDeviceId()}/>
						) || "Nothing Here!",
					};
					dialog.alert(config);
				}}>
					<ListItemText primary={"Device ID"} secondary={"Device Id When Casting"}/>
					<ListItemSecondaryAction>
						<Cast/>
					</ListItemSecondaryAction>
				</ListItem>
				<ListItem>
					<ListItemIcon>
						<Keyboard/>
					</ListItemIcon>
					<ListItemText id="switch-list-label-wifi" primary="onScreen Keyboard"/>
					<ListItemSecondaryAction>
						<Switch
							edge="end"
							onChange={(e) => {
								localStorage.setItem(storageIndex.onScreenKeyboard, !state.keyboard);
								handleChange(e);
							}}
							checked={state.casting}
							inputProps={{"aria-labelledby": "switch-list-label-wifi"}}
						/>
					</ListItemSecondaryAction>
				</ListItem>

			</List>
		</div>
	);
};

Settings.propTypes = {};

Settings.defaultProps = {};

export default pure(Settings);
