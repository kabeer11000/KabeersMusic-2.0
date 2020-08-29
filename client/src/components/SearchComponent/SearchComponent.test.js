import React from 'react';
import ReactDOM from 'react-dom';
import SearchComponent from './SearchComponent';

it('It should mount', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchComponent/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
