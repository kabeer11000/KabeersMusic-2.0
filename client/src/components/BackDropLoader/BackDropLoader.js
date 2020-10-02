import * as React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function BackDropLoader(props) {
	// const {children, window} = props;
	return (
		<Backdrop open={props.hidden}>
			<CircularProgress color="inherit"/>
		</Backdrop>
	);
}
