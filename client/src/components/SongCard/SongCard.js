import React from "react";
import "./SongCard.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import {Typography} from "@material-ui/core";
import Grow from "@material-ui/core/Grow";
import Link from "@material-ui/core/Link";
import {pure} from "recompose";

// = {title, description, tags, channelTitle, videoId, thumbnail}
function SongCard(props) {
	const video_ = props.video.snippet;

	function unEntity(str) {
		return str.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
	}

	return (
		<Grow in={true}>
			<Card className={"SongCard"} style={{width: "18rem"}}
				  onClick={() => props.onPlay(props.video, props.key_, props.list)}>
				<CardActionArea>
					<CardMedia
						component="img"
						alt="Contemplative Reptile"
						height="140"
						image={props.thumbnail || video_.thumbnails.high.url}
						title={unEntity(video_.title)}
						loading={"lazy"}

					/>
					<CardContent className={"text-left"}>
						<Typography gutterBottom variant="h6" component="p" className={"text-truncate"}>
							{video_.title.slice(0, 70) + " ..."}
						</Typography>
						<Typography variant="body2" color="textSecondary" style={{textDecoration: "none"}}
									component={Link} to={`/artist?id=${video_.channelId}`} className={"text-truncate"}>
							{video_.description ? video_.description.slice(0, 70) + " ..." : ""}
							<span className={"text-muted"}>
                        {video_.channelTitle}
                    </span>
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Grow>
	);
}

SongCard.propTypes = {};

SongCard.defaultProps = {};

export default pure(SongCard);
