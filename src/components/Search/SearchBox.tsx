import React, { useState} from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

// This component is the search text box.
// TODO: implement hook for ENTER
const SearchBox = ({value, onUpdate} : Props) => {
  const [err, setError] = useState(false)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    // if we need validation set it up in this handler.
    if (event.target.value.length <= 100){
      onUpdate(event.target.value);
      setError(false);
    } else {
      setError(true);
    }
  }
  return (
    <FormControl error={err}>
      <InputLabel htmlFor="search">Keyword</InputLabel>
      <Input
        id='search'
        type='text'
        onChange={handleChange}
        aria-describedby="input-message"
      />
      <FormHelperText id="input-message">
        {err ? 'Search length is too long (must be less than 100 characters)' : ''}
      </FormHelperText>
    </FormControl>
  )
}

type Props = { value?: string, onUpdate: Function };

export default SearchBox;
