import React, { useState } from 'react';
import { categories } from 'categories';

const CategorySelect = ({ category }: Props) => {
  const [selected, setSelected] = useState(category === undefined ? '' : category)
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value);
  }
  return (
    <select
      value={selected}
      onChange={handleChange}>
      {Object.keys(categories).map((key: string) => {
        return (
          <option key={key} value={categories[key].display}>
            {categories[key].display}
          </option>
        );
      })}
    </select>
  )
}
type Props = { category?: string; };

export default CategorySelect;
