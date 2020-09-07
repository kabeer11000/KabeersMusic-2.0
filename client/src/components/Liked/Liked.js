import React from 'react';

import './Liked.css';
import {Button} from "@material-ui/core";

const Liked = () => {
    const errorPage = (message = 'No Internet Connection', onclick, button = <Button
        onClick={onclick}>Retry</Button>) => (
        <div className={'errorPage text-center'}
             style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
            <img src={'./assets/icons/darkmode_nothingfound.svg'} style={{width: '8rem', height: "auto"}}
                 alt={'Kabeers Music Logo'}/>
            <br/>
            <div className={"text-truncate"}>{message}</div>
            {button}
        </div>
    );
    return (
        <div className="Liked">
            {errorPage('Feature Not Implemented Yet', () => {
            }, <></>)}
        </div>
    );
};

Liked.propTypes = {};

Liked.defaultProps = {};

export default Liked;
