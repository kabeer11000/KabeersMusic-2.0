import React, {useEffect} from 'react';
import './History.css';
import makeStyles from "@material-ui/core/styles/makeStyles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import {getHistory} from "../../functions/songs";
import DownloadListItem from "../DownloadListItem/DownloadListItem";


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


const HistoryComponent = () => {
    const classes = useStyles();
    const [HistoryItems, setHistoryItems] = React.useState(<></>);

    function createList() {
        getHistory().then(value => {
            value = value.reverse();
            setHistoryItems(() => {
                return value.map((v, i) => {
                    const divider_ = i = value.length ? <div/> : <Divider variant="inset" component="li"/>;
                    return <div key={i}><DownloadListItem title={v.title} channelTitle={v.channelTitle}
                                                          thumbnail={v.thumbnail} tags={v.tags}/>{divider_}</div>
                });
            });
        })
    }

    useEffect(() => {
        createList();
    }, []);

    return (
        <List className={`${classes.root} mt-5 bg-transparent`}>
            {HistoryItems}
        </List>
    );
};

HistoryComponent.propTypes = {};

HistoryComponent.defaultProps = {};

export default HistoryComponent;
