import React, {useEffect} from "react";
import "./History.css";
import makeStyles from "@material-ui/core/styles/makeStyles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import {getHistory} from "../../functions/songs";
import DownloadListItem from "../DownloadListItem/DownloadListItem";
import Container from "@material-ui/core/Container";
import {Button} from "@material-ui/core";
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


const HistoryComponent = () => {
    const classes = useStyles();
    const [HistoryItems, setHistoryItems] = React.useState(<></>);

    function createList() {
        getHistory().then(value => {
            if (!value.length) return setHistoryItems(errorPage("History Will Appear Here", <></>));
            value = value.length >= 5 ? value.slice(Math.max(value.length - 5, 1)).reverse() : value.reverse(); // Get 5 Recent
            setHistoryItems(() => {
                return value.map((v, i) => {
                    return <React.Fragment key={i}><DownloadListItem title={v.title} channelTitle={v.channelTitle}
                                                                     thumbnail={v.thumbnail}
                                                                     tags={v.tags}/>{value.length ? null :
                        <Divider variant="inset" component="li"/>}</React.Fragment>;
                });
            });
        });
    }

    useEffect(() => {
        createList();
    }, []);

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
