import React from "react";
import {IconButton, Tooltip} from "@material-ui/core";
import FeedbackIcon from "@material-ui/icons/Feedback";
import {FeedbackDialog} from "mui-feedback-dialog";
import {useSnackbar} from "notistack";
import {pure} from "recompose";


const FeedbackButton = () => {
    const [dialogVisible, setDialogVisible] = React.useState(false);
    const {enqueueSnackbar, closeSnackbar} = useSnackbar();

    return <React.Fragment>
        <Tooltip title='Send Feedback' arrow>
            <IconButton onClick={() => setDialogVisible(true)}>
                <FeedbackIcon/>
            </IconButton>
        </Tooltip>
        <FeedbackDialog
            open={dialogVisible}
            onClose={() => setDialogVisible(false)}
            onSubmit={() => {
                enqueueSnackbar('FeedBack Sent!, We will get back to you soon');
            }
            }/>
    </React.Fragment>
};

export default pure(FeedbackButton);
