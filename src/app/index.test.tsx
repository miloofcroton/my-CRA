import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';

import App from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('shallow renders without crashing', () => {
  shallow(<App />);
});

it('renders welcome message', () => {
  const { getByText } = render(<App />);
  expect(getByText('Learn React')).toBeInTheDocument();
});
