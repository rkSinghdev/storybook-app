import React from 'react';
import * as ReactDOM from 'react-dom';
import {FirstButton}  from '../stories/Button.stories';


describe('Button', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FirstButton children={'New button'} variant={'primary'} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
