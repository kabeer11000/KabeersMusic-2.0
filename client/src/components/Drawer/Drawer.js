import React from "react";
import PropTypes from "prop-types";
import {
    Divider,
    Drawer,
    Hidden,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
    Typography,
    useTheme
} from "@material-ui/core";
import {AccountCircle, Favorite, GetApp, History, Home, Settings} from "@material-ui/icons";
import store from "../../Redux/store/store";
import {setDrawerState} from "../../Redux/actions/actions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {storageIndex} from "../../functions/Helper/storageIndex";
import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    drawer: {
        [theme.breakpoints.up("xl")]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('xl')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    logoText: {
        paddingRight: theme.spacing(1)
    },
    logoContainer: {
        alignItems: 'baseline',
        fontSize: theme.spacing(2.25),
        marginLeft: theme.spacing(2.5),
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(2),
    },
    logoImage: {
        height: "auto",
        width: theme.spacing(3),
    },
    marginRight: {
        marginLeft: drawerWidth
    },
    smallAvatar: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
}));

function DrawerComponent(props) {

    const {children, window} = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(props.isOpen);

    const handleDrawerToggle = () => {
        setMobileOpen(!props.isOpen);
        store.dispatch(setDrawerState(!props.isOpen));
    };
    const userData = localStorage.getItem(storageIndex.userData) ? JSON.parse(atob(localStorage.getItem(storageIndex.userData))) : {};
    const drawer = (
        <div>
            <List className={classes.root}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar src={userData.account_image} alt={userData.username}/>
                    </ListItemAvatar>
                    <ListItemText className={"text-truncate"} primary={userData.username} secondary={userData.email}/>
                </ListItem>
            </List>
            <div className={`classes.toolbar`}/>
            <Divider/>
            <List onClick={handleDrawerToggle}>
                <ListItem button component={Link} to={"/home"}>
                    <ListItemIcon><Home/></ListItemIcon>
                    <ListItemText primary={"Home"}/>
                </ListItem>

                <ListItem button component={Link} to={"/downloads"}>
                    <ListItemIcon><GetApp/></ListItemIcon>
                    <ListItemText primary={"Downloads"}/>
                </ListItem>
                <ListItem button component={Link} to={"/history"}>
                    <ListItemIcon><History/></ListItemIcon>
                    <ListItemText primary={"History"}/>
                </ListItem>
                <ListItem button component={Link} to={"/liked"}>
                    <ListItemIcon><Favorite/></ListItemIcon>
                    <ListItemText primary={"Liked"}/>
                </ListItem>
            </List>
            <Divider/>
            <ListItem button component={Link} to={'/settings'}>
                <ListItemIcon><Settings/></ListItemIcon>
                <ListItemText primary={'Settings'}/>
            </ListItem>
            <ListItem button>
                <ListItemIcon><AccountCircle/></ListItemIcon>
                <ListItemText primary={'Account'}/>
            </ListItem>
            <Divider/>
            <List>
                <ListItem button>
                    <Typography muted small>
                        <div className={"text-muted small"}>&copy; Kabeers Network</div>
                    </Typography>
                </ListItem>
            </List>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <div>
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={props.isOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="persistent"
                        open={mobileOpen}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={`MainDrawerContainer ${classes.content}`}>
                <React.Fragment>
                    {children}
                </React.Fragment>
            </main>
        </div>
    );
}

// ${ !props.isOpen ?  '' : classes.marginRight}
// style={{marginLeft: props.isOpen ? drawerWidth : 0}}
DrawerComponent.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};
const mapStateToProps = state => ({isOpen: state.drawer});
//export default DrawerComponent;

export default connect(mapStateToProps)(DrawerComponent);
