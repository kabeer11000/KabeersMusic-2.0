import React from 'react';
import ReactDOM from 'react-dom';
import ScrubbingSlider from './ScrubbingSlider';

it('It should mount', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ScrubbingSlider/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
