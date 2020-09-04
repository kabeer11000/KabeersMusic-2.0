import React, {useEffect} from 'react';
import './History.css';
import makeStyles from "@material-ui/core/styles/makeStyles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import {getHistory} from "../../functions/songs";
import DownloadListItem from "../DownloadListItem/DownloadListItem";
import Container from "@material-ui/core/Container";


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
            //value = value.reverse();
            value = value.slice(Math.max(value.length - 5, 1)).reverse(); // Get 5 Recent
            setHistoryItems(() => {
                return value.map((v, i) => {
                    const divider_ = i = value.length ? <div/> : <Divider variant="inset" component="li"/>;
                    return <div key={i}><DownloadListItem title={v.title} channelTitle={v.channelTitle}
                                                          thumbnail={v.thumbnail} tags={v.tags}/>{divider_}</div>
                });
            });
            if (!HistoryItems) {
                setHistoryItems()
            }
        })
    }

    useEffect(() => {
        createList();
    }, []);

    return (
        <Container fixed>
            <List className={`${classes.root} mt-5 bg-transparent`}>
                {HistoryItems}
            </List>
        </Container>
    );
};

HistoryComponent.propTypes = {};

HistoryComponent.defaultProps = {};

export default HistoryComponent;
