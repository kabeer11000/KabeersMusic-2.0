import React from 'react';
import ReactDOM from 'react-dom';
import ExamplePlayer from './ExamplePlayer';

it('It should mount', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ExamplePlayer/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
