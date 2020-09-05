import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import {List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import store from '../../Redux/store/store';
import {setDrawerState} from '../../Redux/actions/actions';
import {connect} from "react-redux";


const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('xl')]: {
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
        height: 'auto',
        width: theme.spacing(3),
    },
    marginRight: {
        marginLeft: drawerWidth
    }
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

    const drawer = (
        <div>
            <div className={`${classes.logoContainer} d-inline-flex`}>
                <img src="assets/icons/kabeersnetwork.svg" className={classes.logoImage} alt='Kabeers Network Logo'/>
                <span className={classes.logoText}>&nbsp; Kabeers Network</span>
            </div>
            <div className={`classes.toolbar`}/>
            <Divider/>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={index}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
            <Divider/>
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={index}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
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
                {children}
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
