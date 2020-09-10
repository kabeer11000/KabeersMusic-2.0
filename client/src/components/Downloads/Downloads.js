import React, {useEffect} from "react";
import "./Downloads.css";
import makeStyles from "@material-ui/core/styles/makeStyles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import {deleteDownloadedSong, getAllDownloadedSongs, getSongFromStorage} from "../../functions/songs";
import DownloadListItem from "./DownloadListItem";
import Container from "@material-ui/core/Container";
import {Avatar} from "@material-ui/core";
import {useDialog} from "muibox";
import PropTypes from "prop-types";

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
    const [HistoryItems, setHistoryItems] = React.useState(<></>);
    const dialog = useDialog();

    function PlaySong(data, index) {
        let videoID = "";
        if (typeof data.videoElement.id === "object") videoID = data.videoElement.id.videoId;
        if (typeof data.videoElement.id === "string") videoID = data.videoElement.id;
        getSongFromStorage(videoID).then(value => {
            if (value) {
                //Avoid the Promise Error
                data.videoElement.snippet.thumbnails.high.url = URL.createObjectURL(value.thumbnail);
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
            .catch(() => {
            });
    }

    function createList() {
        getAllDownloadedSongs().then(value => {
            setHistoryItems(() => {
                const listItems = value.map((v, i) => {
                    const thumbnail = URL.createObjectURL(v.thumbnail);
                    // const songURL = URL.createObjectURL(v.blob);
                    return <DownloadListItem onMouseLeave={
                        () => {
                            deleteDownload({id: v.id, thumbnail: thumbnail, title: v.title});
                        }
                    } onClick={() => {
                        PlaySong(v, i);
                    }} className={"text-truncate"} key={i} title={v.title} channelTitle={v.channelTitle}
                                             thumbnail={thumbnail} tags={v.tags}/>;
                });
                const listItemsWithDividers = [];
                listItems.forEach((item, index) => {
                    listItemsWithDividers.push(item);
                    if (listItems[index + 1] !== undefined) {
                        listItemsWithDividers.push(<Divider key={index} variant="inset" component="li"/>);
                    }
                });
                return listItemsWithDividers;
            });
        });
    }

    useEffect(() => {
        createList();
    }, []);

    return (
        <div className={"KabeersDownloadContainer mb-5"} color={"primary.dark"}>
            <Container fixed>
                <List className={`${classes.root} mt-5 bg-transparent`}>
                    {HistoryItems}
                </List>
            </Container>
        </div>
    );
};

Downloads.propTypes = {
    appState: PropTypes.object
};

Downloads.defaultProps = {};

export default Downloads;
