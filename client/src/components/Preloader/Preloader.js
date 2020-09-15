import React from "react";
import "./Preloader.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import {pure} from "recompose";

const Preloader = () => (
    <div className="Preloader text-center" style={{
        width: "10rem",
        height: "10rem",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: 'translate(-50%, -50%)'
    }}>
        <CircularProgress/>
    </div>
);

Preloader.propTypes = {};

Preloader.defaultProps = {};

export default pure(Preloader);
