import React from 'react';
import ReactDOM from 'react-dom';
import ConnectionBanner from '../src';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EthConverter />, div);
  ReactDOM.unmountComponentAtNode(div);
});
