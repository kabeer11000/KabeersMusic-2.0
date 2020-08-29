import React from 'react';
import './SearchComponent.css';
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import {ArrowBack, SearchOutlined} from "@material-ui/icons";
import InputBase from "@material-ui/core/InputBase";
import {SuggestSearch} from "../../functions/suggestSearch";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Link} from "react-router-dom";
import store from "../../Redux/store/store";

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
const PushToHistory = (newURL) => {
    //history.pushState({}, null, newURL);
};
const SearchComponent = () => {

    console.log(store.getState());
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
                        <SearchOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={`${value.suggestion.attributes.data}`}/>
                </ListItem>
            );
        }));
    };
    const serialize = function (obj) {
        var str = [];
        for (let p in obj)
            if (obj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
        return str.join("&");
    };
    const Search = async (e) => {
        SuggestSearch(e.target.value).then(v => setQueryArray(v));
        ListItems();
        //PushToHistory(`${window.location.href}?${serialize({q:e.target.value})}`);
    };
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
                        </IconButton> : <></>}
                        <InputBase
                            autoCapitalize={true}
                            autoComplete={true}
                            autoFocus={true}
                            onKeyUp={Search}
                            onFocus={() => {
                            }}
                            onBlur={() => {
                                // search_iconChange('visible');
                                // toolbar_colorChange('#CCC')
                            }}
                            className={`${classes.input} text-light`}
                            placeholder="Search Kabeers Music"
                            inputProps={{'aria-label': 'Search Kabeers Music'}}
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

SearchComponent.propTypes = {};

SearchComponent.defaultProps = {};

export default SearchComponent;
