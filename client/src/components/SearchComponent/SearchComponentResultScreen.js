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
import {Link} from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";

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

const SearchComponentResultScreen = () => {

    const [open, setOpen] = React.useState(true);
    const [query, setQuery] = React.useState('');
    const [queryArray, setQueryArray] = React.useState([]);
    const [listItems, setListItems] = React.useState(<></>);
    const classes = useStyles();
    const ListItems = () => {
        if (!queryArray) return;
        setListItems(() => queryArray.map((value, index) => {
            if (!value) return;
            return (
                <ListItem button key={index}>
                    <ListItemIcon>
                        <Avatar src={props.thumbnail} alt={`${props.title}`}/>
                    </ListItemIcon>
                    <ListItemText primary={`${props.title}`} secondary={`${props.channel}`}/>
                </ListItem>
            );
        }));
    };
    const Search = async (q) => {
        SearchYoutube(q).then(v => setQueryArray(v));
        ListItems()
    };
    useEffect(() => {
        Search(props.query);
    }, []);
    return (
        <div className="SearchComponent">
            <Dialog fullScreen open={open} onClose={() => {
            }}>
                <AppBar className={`fixed-top`}>
                    <Toolbar>
                        {window.history ? <IconButton onClick={() => {
                            setOpen(false);
                        }} component={Link} to={'/home'} color="primary.light" visibility={false}>
                            <ArrowBack/>
                        </IconButton> : null}
                        <InputBase
                            autoCapitalize={true}
                            autoComplete={true}
                            autoFocus={true}
                            value={props.query}
                            className={classes.input}
                            placeholder="Search For A Song"
                            inputProps={{'aria-label': 'Search Kabeers Notes'}}
                        />
                        <SearchOutlined visibility={false}/>
                    </Toolbar>
                </AppBar>
                <div class="container px-3" style={{marginTop: "4rem"}}>
                    <div class="row">
                        {listItems}
                    </div>
                </div>
            </Dialog>
        </div>
    )
};

SearchComponentResultScreen.propTypes = {};

SearchComponentResultScreen.defaultProps = {};

export default SearchComponentResultScreen;
