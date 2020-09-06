import React, {useEffect} from 'react';
import './SearchComponent.css';
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import {ArrowBack, SearchOutlined} from "@material-ui/icons";
import InputBase from "@material-ui/core/InputBase";
import {SearchYoutube} from "../../functions/suggestSearch";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Link, useHistory} from "react-router-dom";
import {connect} from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import {getSong} from "../../functions/songs";
import {Button} from "@material-ui/core";
import Preloader from "../Preloader/Preloader";


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '1rem',
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));
const SearchResultComponent = (props) => {
    let history = useHistory();
    const [open, setOpen] = React.useState(true);
    const [resultsArray, setResultsArray] = React.useState([]);
    const [listItems, setListItems] = React.useState(<Preloader/>);
    const classes = useStyles();

    const errorPage = (message = 'No Internet Connection', button = <Button component={Link}
                                                                            to={'/search'}>Retry</Button>) => (
        <div className={'errorPage text-center'}
             style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
            <img src={'./assets/icons/darkmode_nothingfound.svg'} style={{width: '8rem', height: "auto"}}
                 alt={'Kabeers Music Logo'}/>
            <br/>
            <div className={"text-truncate"}>{message}</div>
            {button}
        </div>
    );

    function PlaySong(video, metaData) {
        getSong(video.id.videoId).then(value => {
            if (value) {
                //Avoid the Promise Error
                setTimeout(function () {
                    props.appState({
                        uri: value,
                        thumbnail: video.snippet.thumbnails.high.url,
                        video: video,
                        list: metaData.list,
                        index: metaData.index
                    });
                }, 100);
            }
        });
    }


    useEffect(() => {
        if (!props.query) return history.push("/search");
        if (!navigator.onLine) return setListItems(errorPage());
        SearchYoutube(props.query)
            .then(resultsArray => {
                if (!resultsArray) return;
                setListItems(() => resultsArray.items.map((value, index) => {
                    if (!value) return;
                    return (
                        <ListItem button key={index} onClick={() => PlaySong(value, {
                            list: resultsArray, index: index
                        })}>
                            <ListItemIcon>
                                <Avatar alt={value.snippet.title} src={value.snippet.thumbnails.default.url}/>
                            </ListItemIcon>
                            <ListItemText primary={`${decodeURIComponent(value.snippet.title)}`}
                                          secondary={`${value.snippet.channelTitle}`}/>
                        </ListItem>
                    );
                }));

            });
    }, []);
    return (
        <div className="SearchResultComponent">
            <Dialog fullScreen open={open} onClose={() => {
            }}>
                <AppBar className={`fixed-top`}>
                    <Toolbar component={Link} to={'/search'}>
                        {window.history ? <IconButton onClick={() => {
                            setOpen(false);
                        }} component={Link} to={'/home'} color="primary.light" visibility={false}>
                            <ArrowBack/>
                        </IconButton> : <></>}
                        <InputBase
                            autoCapitalize={true}
                            autoComplete={true}
                            value={props.query}
                            className={`${classes.input} text-light`}
                            placeholder="Search Kabeers Music"
                            inputProps={{'aria-label': 'Search Kabeers Music'}}
                        />
                        <SearchOutlined visibility={false}/>
                    </Toolbar>
                </AppBar>
                <div className={"container px-3"} style={{marginTop: "4rem"}}>
                    <div className={"row"}>
                        {listItems}
                    </div>
                </div>
            </Dialog>
        </div>
    )
};

SearchResultComponent.propTypes = {};

SearchResultComponent.defaultProps = {};

const mapStateToProps = state => ({
    query: state.q,
});
export default connect(mapStateToProps)(SearchResultComponent);
