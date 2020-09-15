import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {pure} from "recompose";

const useStyles = makeStyles((theme) => ({
    inline: {
        display: 'inline',
    },
}));
const NextListItem = (props) => {

    const classes = useStyles();
    return (
        <ListItem button disabled={props.currentIndex === props.keyIndex} alignItems="flex-start"
                  selected={props.currentIndex === props.keyIndex} className={"p-0 px-1"}
                  onClick={props.onClick}>
            <ListItemAvatar>
                <Avatar alt={props.title} src={props.image}/>
            </ListItemAvatar>
            <ListItemText
                className={"text-truncate"}
                primary={props.title}
                secondary={
                    <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            className={`${classes.inline} text-truncate`}
                            color="textPrimary"
                        >
                            <div className={'text-truncate'}>{props.channelTitle}</div>
                        </Typography>
                    </React.Fragment>
                }
            />
        </ListItem>)
};

NextListItem.propTypes = {};

NextListItem.defaultProps = {};

export default pure(NextListItem);
