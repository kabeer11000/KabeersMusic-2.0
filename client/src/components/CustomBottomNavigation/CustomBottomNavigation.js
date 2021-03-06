import React from "react";
import "./CustomBottomNavigation.css";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import {Favorite, GetApp, History, Home} from "@material-ui/icons";
import makeStyles from "@material-ui/core/styles/makeStyles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import AppBar from "@material-ui/core/AppBar";
import {Link} from "react-router-dom";
import Slide from "@material-ui/core/Slide";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import * as PropTypes from "prop-types";
import LinearProgress from "@material-ui/core/LinearProgress";
import {pure} from "recompose";

const useStyles = makeStyles({
	root: {
		width: "100%",
	},
});
const CustomBottomNavigation = (props) => {
	const classes = useStyles();
	const [value, setValue] = React.useState("recents");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	function HideOnScroll(props) {
		const {children, window} = props;
		const trigger = useScrollTrigger({target: window ? window() : undefined});
		return (
			<Slide appear={false} direction="up" in={!trigger}>
				{children}
			</Slide>
		);
	}

	HideOnScroll.propTypes = {
		children: PropTypes.element.isRequired,
		window: PropTypes.func,
	};

	return props.isTv ? null : (
		<AppBar color="primary" style={{
			position: "fixed",
			top: "auto",
			bottom: 0,
			width: "100%",
			marginLeft: props.isTv ? "4.5rem" : ""
		}}
				component={"div"}>
			<div style={{zIndex: "99999"}} hidden={props.progress_hidden} className={"fixed-top"}>
				<LinearProgress/>
			</div>
			<BottomNavigation value={value} onChange={handleChange} className={classes.root}>
				<BottomNavigationAction style={{textDecoration: "none"}} component={Link} to={"/home"} label="Home"
										value="recents" icon={<Home/>}/>
				{/*
                                <BottomNavigationAction style={{textDecoration: "none"}} component={Link} to={"/charts"}
                                        label="Trending" value="charts"
                                        icon={<TrendingUp/>}/>

                */}
				<BottomNavigationAction style={{textDecoration: "none"}} component={Link} to={"/downloads"}
										label="Downloads" value="downloads"
										icon={<GetApp/>}/>
				<BottomNavigationAction style={{textDecoration: "none"}} component={Link} to={"/history"}
										label="History" value="history"
										icon={<History/>}/>
				<BottomNavigationAction style={{textDecoration: "none"}} component={Link} to={"/liked"}
										label="Liked" value="favorites"
										icon={<Favorite/>}/>
			</BottomNavigation>
		</AppBar>
	);
};

CustomBottomNavigation.propTypes = {
	progress_hidden: PropTypes.bool
};

CustomBottomNavigation.defaultProps = {};

export default pure(CustomBottomNavigation);
