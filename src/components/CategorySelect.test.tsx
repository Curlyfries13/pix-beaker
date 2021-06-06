import React from 'react';
import { render, RenderResult } from '@testing-library/react';

import CategorySelect from './CategorySelect';

it('matches snapshot', async () => {
  const component: RenderResult = render(<CategorySelect />)
  expect(component).toMatchSnapshot();
})
