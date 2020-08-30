import React from 'react';
import ReactDOM from 'react-dom';
import History from './History';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<History/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
