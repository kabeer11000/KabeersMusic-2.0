import React, {useEffect} from 'react';
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
import {Link, useHistory} from "react-router-dom";
import store from "../../Redux/store/store";
import {connect} from "react-redux";
import {setQueryParams} from "../../Redux/actions/actions";
import {SuggestOfflineSongs} from "../../functions/songs";
import Preloader from "../Preloader/Preloader";

//const {useRef} = require("react");

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

const SearchComponent = (props) => {
        let history = useHistory();
        const [open, setOpen] = React.useState(true);
        const [queryArray, setQueryArray] = React.useState([]);
        const [listItems, setListItems] = React.useState(
            <div className={'errorPage text-center'}
                 style={{
                     position: 'absolute',
                     top: '50%',
                     left: '50%',
                     transform: 'translate(-50%, -50%)'
                 }}>
                <img src={'./assets/icons/darkmode_nothingfound.svg'} style={{width: '8rem', height: "auto"}}
                     alt={'Kabeers Music Logo'}/>
                <br/>
                <div>{navigator.onLine ? 'Results will appear as you type' : 'Searching In Downloads'}</div>
            </div>);
        const classes = useStyles();
        const ListItems = () => {
            if (!queryArray) return;
            setListItems(() => queryArray.map((value, index) => {
                if (!value) return;
                return (
                    <ListItem button key={index} onClick={() => {
                        store.dispatch(setQueryParams(value.suggestion.attributes.data));
                    }} component={Link} to={'/search/results'}>
                        <ListItemIcon>
                            <SearchOutlined/>
                        </ListItemIcon>
                        <ListItemText primary={`${value.suggestion.attributes.data}`}/>
                    </ListItem>
                );
            }));
        };

        const Search = async (e) => {
            if (e.key === 'Enter') return store.getState().q ? history.push("/search/results") : null;
            if (navigator.onLine) SuggestSearch(e.target.value).then(v => setQueryArray(v));
            else SuggestOfflineSongs(e.target.value).then(t => setQueryArray(t.map(t => ({suggestion: {attributes: {data: t.item.title}}}))));
            ListItems();
            props.history.push({
                pathname: `search`,
                search: "?" + new URLSearchParams({q: e.target.value}).toString()
            });
            store.dispatch(setQueryParams(e.target.value));
        };

        function useNetwork() {
            const [isOnline, setNetwork] = React.useState(window.navigator.onLine);
            const updateNetwork = () => {
                setNetwork(window.navigator.onLine);
            };
            useEffect(() => {
                window.addEventListener("offline", updateNetwork);
                window.addEventListener("online", updateNetwork);
                return () => {
                    window.removeEventListener("offline", updateNetwork);
                    window.removeEventListener("online", updateNetwork);
                };
            });
            return isOnline;
        }

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
                            {listItems ? null : <Preloader/>}
                        </div>
                    </div>
                </Dialog>
            </div>
        )
    }
;
SearchComponent.propTypes = {};

SearchComponent.defaultProps = {};

const mapStateToProps = state => ({
    query: state.q,
});
export default connect(mapStateToProps)(SearchComponent);
