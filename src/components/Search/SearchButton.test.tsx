import React from 'react';
import { render, RenderResult } from '@testing-library/react';

import SearchButton from './SearchButton';

it('matches snapshot', async () => {
  const component: RenderResult = render(<SearchButton active={true} clickHandler={()=>{}} />)
  expect(component).toMatchSnapshot();
})
