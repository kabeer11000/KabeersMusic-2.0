import React from "react";
import Slider from "@material-ui/core/Slider";

const CustomSlider = (props) => {
    const [scrubbing, setScrubbing] = React.useState(props.audioElement);
    setInterval(() => !props.audioElement.paused ? setScrubbing(props.getAudioPosition) : null, 1000);
    return (<Slider
        className={props.classnames}
        defaultValue={0}
        value={scrubbing}
        min={0.0}
        color={'secondary'}
        max={props.audioElement.duration}
        valueLabelDisplay="auto"
        onChangeCommitted={async (v, x) => props.handleScrubbing(x)}
    />);
};
export default CustomSlider;
