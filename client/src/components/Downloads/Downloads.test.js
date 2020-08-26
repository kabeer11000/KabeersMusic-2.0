import React from 'react';
import ReactDOM from 'react-dom';
import Downloads from './Downloads';

it('It should mount', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Downloads/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
