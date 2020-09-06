import React from 'react';
import ReactDOM from 'react-dom';
import FeedBack from './FeedBack';

it('It should mount', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FeedBack/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
