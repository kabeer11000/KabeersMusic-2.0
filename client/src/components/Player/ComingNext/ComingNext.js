import React, {useEffect} from 'react';
import './ComingNext.css';
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import {ExpandMore, LibraryMusic} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {connect} from "react-redux";
import Divider from "@material-ui/core/Divider";
import NextListItem from "./NextListItem";
import List from "@material-ui/core/List";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));
const ComingNext = (props) => {
    const classes = useStyles();
    const [list, setList] = React.useState(<div/>);

    function createList() {
        setList(() => {
            const array = [];
            const listItems = props.playList.list.items.map((value, index) => {
                array.push(<NextListItem currentIndex={index} keyIndex={props.playList.index} key={index}
                                         title={value.snippet.title} channelTitle={value.snippet.channelTitle}
                                         image={value.snippet.thumbnails.high.url}/>);
                return <NextListItem currentIndex={index} keyIndex={props.playList.index} key={index}
                                     title={value.snippet.title} channelTitle={value.snippet.channelTitle}
                                     image={value.snippet.thumbnails.high.url}/>;
            });
            const listItemsWithDividers = [];
            listItems.forEach((item, index) => {
                listItemsWithDividers.push(item);
                if (listItems[index + 1] !== undefined) {
                    listItemsWithDividers.push(<Divider variant="inset" component="li"/>)
                }
            });
            return listItemsWithDividers;
        });
    }

    useEffect(() => {
        setList(() => {
            const listItems = props.playList.list.items.map((value, index) => {
                return <NextListItem currentIndex={index} keyIndex={props.playList.index} key={index}
                                     title={value.snippet.title} channelTitle={value.snippet.channelTitle}
                                     image={value.snippet.thumbnails.high.url}/>;
            });
            const listItemsWithDividers = [];
            listItems.forEach((item, index) => {
                listItemsWithDividers.push(item);
                if (listItems[index + 1] !== undefined) {
                    listItemsWithDividers.push(<Divider variant="inset" component="li"/>)
                }
            });
            return listItemsWithDividers;
        });
    }, []);

    return (<div className="ComingNext">
            <Accordion square={true}>
                <AccordionSummary
                    expandIcon={<ExpandMore/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <div className={'d-inline-flex'} style={{justifyContent: 'space-around'}}>
                        <LibraryMusic/>
                        <Typography className={`${classes.heading} ml-2`}>Coming Next</Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <List className={'text-truncate'}>
                        {list}
                    </List>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

ComingNext.propTypes = {};

ComingNext.defaultProps = {};

const mapStateToProps = state => ({
    componentState: state.currentSong.componentState,
    audioElement: state.currentSong.audioElement,
    videoElement: state.currentSong.videoElement,
    playList: state.currentSong.playList
});
export default connect(mapStateToProps)(ComingNext);

