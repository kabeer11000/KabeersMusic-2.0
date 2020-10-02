import React from "react";
import "./CustomAppBar.css";
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
import {pure} from "recompose";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles({
	appBar: {
		width: "calc(100% - 4.5rem)",
		marginLeft: "4.5rem",
	},
});
const CustomAppBar = (props) => {
	const OpenDrawer = () => {
		store.dispatch(setDrawerState(true));
	};
	const classes = useStyles();
	return props.isTv ?
		(
			<React.Fragment>
				<div style={{zIndex: "99999"}} hidden={props.progress_hidden}>
					<LinearProgress className={"fixed-top"}/>
				</div>
				<AppBar position="sticky" className={"bg-transparent position-relative"} elevation={0}>
					<Toolbar style={{width: "100%", display: "inline-flex", justifyContent: "space-between"}}>
						<div className={"d-inline-flex"}>
							<Avatar src={"./assets/icons/smallTvIcon.svg"}/>
							<Typography color={"textPrimary"} className={"mt-2"}>
								MUSIC
							</Typography>
						</div>
						<div style={{width: "100%", display: "inline-flex", justifyContent: "center"}}>
							<Button component={Link} to={"/home"}>HOME</Button>
							<Button component={Link} to={"/downloads"}>DOWNLOADS</Button>
							<Button component={Link} to={"/history"}>HISTORY</Button>
							<Button component={Link} to={"/liked"}>LIKED</Button>
						</div>
						<div>
							<IconButton component={Link} to={"/search"}>
								<Search/>
							</IconButton>
						</div>
					</Toolbar>
				</AppBar>
			</React.Fragment>
		) : (
			<HideOnScroll>
				<AppBar /*position-relative*/>
					<Toolbar>
						<IconButton onClick={OpenDrawer} edge="start" style={{color: "#FFFFFF"}} aria-label="menu">
							<Menu/>
						</IconButton>
						<Typography style={{color: "#FFFFFF"}} variant="h6">
							{props.title || "Music"}
						</Typography>
						<div style={{flex: "1 1 auto"}}/>
						<IconButton
							edge="start"
							style={{color: "#FFFFFF"}}
							aria-label="Search"
							component={Link}
							to={"/search"}
						>
							<Search/>
						</IconButton>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
		);
};
/*
			<div className={"position-fixed w-100"} style={{marginTop: '-5rem', zIndex: '55'}}>

 */
CustomAppBar.propTypes = {};

CustomAppBar.defaultProps = {};

export default pure(CustomAppBar);
