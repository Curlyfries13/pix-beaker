import React from 'react';
import { render, RenderResult } from '@testing-library/react';

import AppBar from './AppBar';

const mockHandler = () => {}

it('matches snapshot', async () => {
  const component: RenderResult = render(<AppBar favToggle={mockHandler}/>)
  expect(component).toMatchSnapshot();
})
