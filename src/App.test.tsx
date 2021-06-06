import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders learn react link', () => {
  const component: RenderResult = render(<App />);
  expect(component).toMatchSnapshot();
});
