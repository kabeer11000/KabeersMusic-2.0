import React, {useEffect} from "react";
import "./ComingNext.css";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {connect} from "react-redux";
import Divider from "@material-ui/core/Divider";
import NextListItem from "./NextListItem";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
	},
}));
const ComingNext = (props) => {
	const classes = useStyles();
	const [list, setList] = React.useState(<div/>);
	const [autoPlaySwitch, setAutoPlaySwitch] = React.useState({
		AutoPlaySwitch: false,
	});
	const handleSwitch = (event) => {
		setAutoPlaySwitch({[event.target.name]: event.target.checked});
	};

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
					listItemsWithDividers.push(<Divider variant="inset" component="li"/>);
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
					listItemsWithDividers.push(<Divider variant="inset" component="li"/>);
				}
			});
			return listItemsWithDividers;
		});
	}, []);
// myAudio.addEventListener("ended", function(){
//      myAudio.currentTime = 0;
//      console.log("ended");
// });
	return (<AccordionDetails style={{maxHeight: "90vh", overflowY: "hidden"}}>
		<List className={"text-truncate"} style={{maxHeight: "85vh", overflowY: "scroll"}}
			  subheader={
				  <ListSubheader component="div" style={{backgroundColor: "primary.main"}} className={"mx-0 px-0"}
								 id="nested-list-subheader">
					  Coming Up Next
				  </ListSubheader>
			  }>

			{list}
		</List>
	</AccordionDetails>);
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

