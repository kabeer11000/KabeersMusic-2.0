import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Chip from "@material-ui/core/Chip";
import IconButton from "@material-ui/core/IconButton";
import {MoreVert} from "@material-ui/icons";
import PropTypes from "prop-types";

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
    inline: {
        display: "inline",
    },
}));
const DownloadListItem = (props) => {

    const classes = useStyles();
    return (<ListItem alignItems="flex-start">
            <React.Fragment onClick={props.onClick}>
                <ListItemAvatar onClick={props.onClick}>
                    <Avatar alt={props.title} src={props.thumbnail}/>
                </ListItemAvatar>
                <ListItemText
                    className={"text-truncate"}
                    primary={props.title}
                    onClick={props.onClick}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={`${classes.inline} text-truncate`}
                                color="textPrimary"
                            >
                                <div className={"text-truncate"}>{props.channelTitle}</div>
                            </Typography>
                            <div className={"cardSlider Slider"}>
                                {props.tags.map((value, index) => {
                                    return <Chip className={"mx-1"} key={index} label={value}/>;
                                })}
                            </div>
                        </React.Fragment>
                    }
                />
            </React.Fragment>
            <IconButton onClick={props.onMouseLeave}>
                <MoreVert/>
            </IconButton>
        </ListItem>
    );
};

DownloadListItem.propTypes = {
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func,
    channelTitle: PropTypes.string,
    tags: PropTypes.array,
    title: PropTypes.string,
    thumbnail: PropTypes.string
};

DownloadListItem.defaultProps = {};

export default DownloadListItem;
