import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

// This component is the search text box.
// TODO: implement hook for ENTER
const SearchBox = ({value, onUpdate} : Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    // if we need validation set it up in this handler.
    if (event.target.value.length <= 100){
      onUpdate(event.target.value);
    }
    // TODO: implement error state
  }
  return (
    <FormControl>
      <InputLabel htmlFor="search">Keyword</InputLabel>
      <Input
        id='search'
        type='text'
        onChange={handleChange}
      />
    </FormControl>
  )
}

type Props = { value?: string, onUpdate: Function };

export default SearchBox;
