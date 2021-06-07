import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';

const WideButton = withStyles({
  root: {
    width: '85%'
  }
})(Button)

const SearchButton = ({clickHandler, active}: Props) => {
  return (
    <WideButton onClick={() => clickHandler()} disabled={!active} variant="contained" color="primary" size="large">Search</WideButton>
  );
};

type Props = { clickHandler: Function, active: boolean };

export default SearchButton;
