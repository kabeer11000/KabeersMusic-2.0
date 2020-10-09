import React, {useEffect} from "react";
import "./Downloads.css";
import makeStyles from "@material-ui/core/styles/makeStyles";
import List from "@material-ui/core/List";
import {deleteDownloadedSong, getAllDownloadedSongs, getSongFromStorage} from "../../functions/songs";
import DownloadListItem from "./DownloadListItem";
import Container from "@material-ui/core/Container";
import {Avatar, Button} from "@material-ui/core";
import {useDialog} from "muibox";
import PropTypes from "prop-types";
import Grow from "@material-ui/core/Grow";
import {pure} from "recompose";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		maxWidth: "100%",
		backgroundColor: theme.palette.background.paper,
	},
	inline: {
		display: "inline",
	},
}));


const Downloads = (props) => {
	const classes = useStyles();
	const [HistoryItems, setHistoryItems] = React.useState(null);
	const dialog = useDialog();
	const abortController = new AbortController();
	const errorPage = (message = "No Internet Connection", button = <Button component={Link}
																			to={"/search"}>Retry</Button>) => (
		<div className={"errorPage text-center"}
			 style={{position: "absolute", top: "1000%", left: "50%", transform: "translate(-50%, -50%)"}}>
			<img src={"./assets/icons/darkmode_nothingfound.svg"} style={{width: "8rem", height: "auto"}}
				 alt={"Kabeers Music Logo"}/>
			<br/>
			<div className={"text-truncate"}>{message}</div>
			{button}
		</div>
	);

	function PlaySong(data, index) {
		let videoID = "";
		if (typeof data.videoElement.id === "object") videoID = data.videoElement.id.videoId;
		if (typeof data.videoElement.id === "string") videoID = data.videoElement.id;
		getSongFromStorage(videoID).then(value => {
			if (value) {
				//Avoid the Promise Error
				data.videoElement.snippet.thumbnails.high.url = URL.createObjectURL(value.thumbnail);
				/*downloadsToPlaylist().then(playList => {
					props.appState({
						uri: URL.createObjectURL(value.blob),
						thumbnail: URL.createObjectURL(value.thumbnail),
						video: data.videoElement,
						list: playList,
						index: index
					}, false);
				})
				 */
				props.appState({
					uri: URL.createObjectURL(value.blob),
					thumbnail: URL.createObjectURL(value.thumbnail),
					video: data.videoElement,
					list: {items: [data.videoElement]},
					index: index
				}, false);
			}
		});
	}

	async function deleteDownload(data) {
		const config = {
			title: (
				<div className={"k-dialog-body-title text-truncate"}>Delete From Downloads</div>) || "Nothing Here!",
			message: (<div className={"k-dialog-body-inner"}>
				<div className={"d-flex justify-content-center mb-3"}>
					<Avatar src={data.thumbnail} alt={"Song Thumbnail"}/>
				</div>
				Do You want to delete {data.title} from downloads?
				<br/>
			</div>) || "Nothing Here!",
		};
		dialog.confirm(config)
			.then(() => {
				deleteDownloadedSong(data.id).then(() => {
					createList();
					// enqueueSnackbar('Deleted From Downloads');
				});
			})
			.catch((e) => e);
	}

	function createList() {
		getAllDownloadedSongs().then(value => value ? setHistoryItems(() => value.map((v, i) => {
			const thumbnail = URL.createObjectURL(v.thumbnail);
			return <DownloadListItem onMouseLeave={
				() => deleteDownload({id: v.id, thumbnail: thumbnail, title: v.title})
			} onClick={() => PlaySong(v, i)} className={"text-truncate"} key={i} title={v.title}
									 channelTitle={v.channelTitle}
									 thumbnail={thumbnail} tags={v.tags}/>;
		})) : null).catch(e => setHistoryItems(null));
	}

	useEffect(() => {
		createList();
		return () => {
			abortController.abort();
		};
	}, []);

	return (
		<div className={"KabeersDownloadContainer mb-5"} color={"primary.dark"}>
			<Container fixed>
				<Grow in={true}>
					<List className={`${classes.root} mt-5 bg-transparent`}>
						{HistoryItems || errorPage("Nothing Here", null)}
					</List>
				</Grow>
			</Container>
		</div>
	);
};

Downloads.propTypes = {
	appState: PropTypes.object
};

Downloads.defaultProps = {};

export default pure(Downloads);
