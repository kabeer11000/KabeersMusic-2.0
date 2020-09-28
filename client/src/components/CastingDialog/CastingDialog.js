import React from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import {blue} from "@material-ui/core/colors";
import DialogContent from "@material-ui/core/DialogContent";
import {pure} from "recompose";

const useStyles = makeStyles({
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
});

const CastDialog = (props) => {
    const classes = useStyles();
    const {onClose, selectedValue, open, emails} = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Select Cast Device</DialogTitle>
            <DialogContent>
                <img src={}/>
            </DialogContent>
        </Dialog>
    );
};

CastDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
    emails: PropTypes.array.isRequired
};
export default pure(CastDialog);
