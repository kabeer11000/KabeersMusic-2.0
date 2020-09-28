import React from "react";
import PropTypes from "prop-types";
import {
	Divider,
	Drawer,
	Hidden,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles,
	Typography,
	useTheme
} from "@material-ui/core";
import {AccountCircle, Favorite, GetApp, History, Home, Settings} from "@material-ui/icons";
import store from "../../Redux/store/store";
import {setDrawerState} from "../../Redux/actions/actions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {storageIndex} from "../../functions/Helper/storageIndex";
import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import {pure} from "recompose";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import {FocusNode} from "@please/lrud";

window.matchMedia = window.matchMedia || function () {
	return {
		matches: false,
		addListener: function () {
		},
		removeListener: function () {
		}
	};
};
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	drawer: {
		[theme.breakpoints.up("xs")]: {
			width: drawerWidth + 50,
			flexShrink: 0,
		},
		[theme.breakpoints.up("md")]: {
			width: drawerWidth + 100,
			flexShrink: 0,
		},
		[theme.breakpoints.up("xl")]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		[theme.breakpoints.up("xl")]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
	},
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	logoText: {
		paddingRight: theme.spacing(1)
	},
	logoContainer: {
		alignItems: "baseline",
		fontSize: theme.spacing(2.25),
		marginLeft: theme.spacing(2.5),
		marginBottom: theme.spacing(2),
		marginTop: theme.spacing(2),
	},
	logoImage: {
		height: "auto",
		width: theme.spacing(3),
	},
	marginRight: {
		marginLeft: drawerWidth
	},
	smallAvatar: {
		width: theme.spacing(3),
		height: theme.spacing(3),
	},
	drawerClose: {
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: "hidden",
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up("sm")]: {
			width: theme.spacing(9) + 1,
		},
	},
}));
//console.log(window);

const DrawerComponent = (props) => {

	const {children, window} = props;
	const classes = useStyles();
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = React.useState(props.isOpen);
	//const matches = useMediaQuery("@media tv, (width: 1920px) and (height: 1080px), (width: 1280px) and (height: 720px)");
	//const matches = useMediaQuery(theme.breakpoints.up('sm'));
	const matches = props.isTv;
	const handleDrawerToggle = () => {
		setMobileOpen(!props.isOpen);
		store.dispatch(setDrawerState(!props.isOpen));
	};
	const userData = localStorage.getItem(storageIndex.userData) ? JSON.parse(atob(localStorage.getItem(storageIndex.userData))) : {};
	const drawer = (
		<div>
			<List className={classes.root}>
				<ListItem>
					<ListItemAvatar>
						<Avatar src={userData.account_image} alt={userData.username}/>
					</ListItemAvatar>
					<ListItemText className={"text-truncate"} primary={userData.username} secondary={userData.email}/>
				</ListItem>
			</List>
			<div className={`classes.toolbar`}/>
			<Divider/>
			<List onClick={handleDrawerToggle} className={matches && !mobileOpen ? "ml-2" : ""}>
				<ListItem button component={Link} to={"/home"}>
					<ListItemIcon><Home/></ListItemIcon>
					<ListItemText primary={"Home"}/>
				</ListItem>
				<ListItem button component={Link} to={"/downloads"}>
					<ListItemIcon><GetApp/></ListItemIcon>
					<ListItemText primary={"Downloads"}/>
				</ListItem>
				<ListItem button component={Link} to={"/history"}>
					<ListItemIcon><History/></ListItemIcon>
					<ListItemText primary={"History"}/>
				</ListItem>
				<ListItem button component={Link} to={"/liked"}>
					<ListItemIcon><Favorite/></ListItemIcon>
					<ListItemText primary={"Liked"}/>
				</ListItem>
				<Divider/>
				<ListItem button component={Link} to={"/settings"}>
					<ListItemIcon><Settings/></ListItemIcon>
					<ListItemText primary={"Settings"}/>
				</ListItem>
				<ListItem button>
					<ListItemIcon><AccountCircle/></ListItemIcon>
					<ListItemText primary={"Account"}/>
				</ListItem>
			</List>
			<List className={matches && !mobileOpen ? "d-none" : ""}>
				<Divider/>
				<ListItem button>
					<Typography muted small>
						<div className={"text-muted small"}>&copy; Kabeers Network</div>
					</Typography>
				</ListItem>
			</List>
		</div>
	);

	const container = window !== undefined ? () => window().document.body : undefined;
	const MainDrawer = matches ?
		(
			<FocusNode onFocused={handleDrawerToggle}>
				<Drawer
					variant="permanent"
					elevation={1}
					className={classes.drawerClose}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					classes={{
						paper: classes.drawerClose
					}}>
					{drawer}
				</Drawer>
			</FocusNode>
		) : (
			<SwipeableDrawer
				anchor={"left"}
				open={mobileOpen}
				onClose={() => null}
				onOpen={() => null}
				ModalProps={{
					keepMounted: true, // Better open performance on mobile.
				}}
			>
				{drawer}
			</SwipeableDrawer>
		);
	return (
		<div>
			<nav className={classes.drawer} aria-label="mailbox folders">
				<Hidden smUp implementation="css">
					<Drawer
						container={container}
						variant="temporary"
						anchor={theme.direction === "rtl" ? "right" : "left"}
						open={props.isOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper,
						}}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
					>
						{drawer}
					</Drawer>
				</Hidden>
				{
					MainDrawer
				}
				{

					/*
				<LinearProgress variant={"buffer"} value={audioElement.currentTime} valueBuffer={audioElement.buffered}/>

					 */
				}
				<Hidden xsDown implementation="css">
					<Drawer
						classes={{
							paper: classes.drawerPaper,
						}}
						variant="persistent"
						open={mobileOpen}
					>
						{drawer}
					</Drawer>
				</Hidden>
			</nav>
			<main className={`MainDrawerContainer ${classes.content}`}
				  style={{marginLeft: matches && !mobileOpen ? "4.5rem" : ""}}>
				<React.Fragment>
					{children /* style={{marginLeft: matches && !mobileOpen ? drawerWidth+15 : 0}} */}
				</React.Fragment>
			</main>
		</div>
	);
};

// ${ !props.isOpen ?  '' : classes.marginRight}
// style={{marginLeft: props.isOpen ? drawerWidth : 0}}
DrawerComponent.propTypes = {
	children: PropTypes.element.isRequired,
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};
const mapStateToProps = state => ({isOpen: state.drawer});
//export default DrawerComponent;

export default connect(mapStateToProps)(pure(DrawerComponent));
