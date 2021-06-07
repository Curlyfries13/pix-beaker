import React from 'react';
import { render, RenderResult } from '@testing-library/react';

import SearchBox from './SearchBox';

it('matches snapshot', async () => {
  const component: RenderResult = render(<SearchBox value={''} onUpdate={()=>{}}/>)
  expect(component).toMatchSnapshot();
})
