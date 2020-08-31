import React from 'react';
import ReactDOM from 'react-dom';
import Preloader from './Preloader';

it('It should mount', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Preloader/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
