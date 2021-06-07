import React from 'react';
import { render, RenderResult } from '@testing-library/react';

import FavDrawer from './FavDrawer';

const mockState = [];

it('matches snapshot', async () => {
  const component: RenderResult = render(<FavDrawer favorites={mockState}/>)
  expect(component).toMatchSnapshot();
})
