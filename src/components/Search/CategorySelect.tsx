import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles'

import { categories } from 'categories';

// This component is the customized Selection component for selecitng categoires
// from the Pixabay API.
const CategorySelect = ({ category, onSelect }: Props) => {
  const [selected, setSelected] = useState(category === undefined ? '' : category)
  const handleChange = (event: any) => {
    setSelected(event.target.value);
    onSelect(event.target.value);
  }

  const CategorySelect = withStyles({
    root: {
      'min-width': '85px'
    }
  })(Select)

  return (
    <FormControl>
      <InputLabel id="category-select">Category</InputLabel>
      <CategorySelect
        labelId="category-select"
        value={selected}
        onChange={handleChange}>
        {/* TODO: add a NONE selection */}
        {Object.keys(categories).map((key: string) => {
          return (
            <MenuItem key={key} value={key}>
              {categories[key].display}
            </MenuItem>
          );
        })}
      </CategorySelect>
    </FormControl>
  )
}
type Props = { category?: string; onSelect: Function };

export default CategorySelect;
