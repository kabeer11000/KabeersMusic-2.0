import React from "react";
import "./SkeletonList.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import {Skeleton} from "@material-ui/lab";
import ListItemText from "@material-ui/core/ListItemText";
import {pure} from "recompose";

const SkeletonList = (props = 8) => (
	<List>
		{
			[...Array(props.length)].map(value => (
				<ListItem alignItems="flex-start">
					<ListItemAvatar>
						<Skeleton variant={"circle"} style={{height: "2.5rem", width: "2.5rem"}}/>
					</ListItemAvatar>
					<ListItemText
						primary={
							<Skeleton/>
						}
						secondary={
							<Skeleton width={"100%"}/>
						}
					/>
				</ListItem>
			))
		}
	</List>
);

SkeletonList.propTypes = {};

SkeletonList.defaultProps = {};

export default pure(SkeletonList);
