import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';

const WideButton = withStyles({
  root: {
    width: '85%'
  }
})(Button)

// This is the Search Bar component. It's customized to span the whole width of
// its container.
// Requires a click handler function and an active flag
const SearchButton = ({clickHandler, active}: Props) => {
  return (
    <WideButton onClick={() => clickHandler()} disabled={!active} variant="contained" color="primary" size="large">Search</WideButton>
  );
};

type Props = { clickHandler: Function, active: boolean };

export default SearchButton;
