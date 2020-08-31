import React, {useEffect} from 'react';
import './Downloads.css';
import makeStyles from "@material-ui/core/styles/makeStyles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import {getAllDownloadedSongs, getSong} from "../../functions/songs";
import DownloadListItem from "./DownloadListItem";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));


const Downloads = (props) => {
    const classes = useStyles();
    const [HistoryItems, setHistoryItems] = React.useState(<></>);

    function PlaySong(data, index) {
        let videoID = '';
        if (typeof data.videoElement.id === 'object') videoID = data.videoElement.id.videoId;
        if (typeof data.videoElement.id === 'string') videoID = data.videoElement.id;
        getSong(videoID).then(value => {
            if (value) {
                //Avoid the Promise Error
                setTimeout(function () {
                    data.videoElement.snippet.thumbnails.high.url = URL.createObjectURL(value.thumbnail);
                    console.log({
                        uri: value,
                        thumbnail: data.videoElement.snippet.thumbnails.high.url,
                        video: data.videoElement,
                        list: {items: [data.videoElement]},
                        index: index
                    });
                    props.appState({
                        uri: URL.createObjectURL(value.blob),
                        thumbnail: URL.createObjectURL(value.thumbnail),
                        video: data.videoElement,
                        list: {items: [data.videoElement]},
                        index: index
                    });
                }, 100);
            }
        });
    }

    function createList() {
        getAllDownloadedSongs().then(value => {
            setHistoryItems(() => {
                const listItems = value.map((v, i) => {
                    const thumbnail = URL.createObjectURL(v.thumbnail);
                    const songURL = URL.createObjectURL(v.blob);
                    return <DownloadListItem onClick={() => {
                        PlaySong(v, i);
                    }} className={'text-truncate'} key={i} title={v.title} channelTitle={v.channelTitle}
                                             thumbnail={thumbnail} tags={v.tags}/>;
                });
                const listItemsWithDividers = [];
                listItems.forEach((item, index) => {
                    listItemsWithDividers.push(item);
                    if (listItems[index + 1] !== undefined) {
                        listItemsWithDividers.push(<Divider variant="inset" component="li"/>)
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
        <div className={'KabeersDownloadContainer'} color={'primary.dark'}>
            <List className={`${classes.root} mt-5 bg-transparent`}>
                {HistoryItems}
            </List>
        </div>
    );
};

Downloads.propTypes = {};

Downloads.defaultProps = {};

export default Downloads;
