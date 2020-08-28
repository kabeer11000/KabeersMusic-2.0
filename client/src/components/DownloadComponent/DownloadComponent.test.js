import React from 'react';
import ReactDOM from 'react-dom';
import DownloadComponent from './DownloadComponent';

it('It should mount', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DownloadComponent/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
