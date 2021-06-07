import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';

import CategorySelect from './CategorySelect';
import SearchBox from './SearchBox';
import SearchButton from './SearchButton';
import ResultComponent from './ResultComponent';

import { getResultPromise } from 'API/pixabayAPI';
import { data } from 'types/pixabayResponse';

// This is the main component for the Search Screen. It includes the search bar,
// the category selection, the Search Button and will display results as they
// come in.
function SearchPage({ results, setResults, saved, setSaved}: Props) {
  let [category, setCategory] = useState('');
  let [search, setSearch] = useState('');
  let [searchActive, setSearchActive] = useState(false);

  // update the current search category
  const handleSelectCategory = (newCategory: string) => {
    setCategory(newCategory);
  }

  // update the current search terms
  const handleSearchChange = (newSearch: string) => {
    // NOTE: if we implement an auto-search feature, this will need to be
    // debounced. As-is this waits for the user's input to sumbit the change
    setSearch(newSearch);
    if (search === '') {
      setSearchActive(false);
    } else {
      setSearchActive(true);
    }
  }

  // Send the user's keyword and category search terms
  const handleSubmit = () => {
    if (searchActive) {
      getResultPromise(search, category).then((response) => {
        if (response.status === 200) {
          console.log(response.data.hits);
          setResults(response.data.hits);
        }
        // NOTE: we don't do anything if we get an error response
      })
    }
  }

  // Check for the saved id in the saved list, and then either add it if it's
  // not there, or remove it if it is.
  const toggleSave = (id: number) => {
    if (saved && saved.includes(id)){
      setSaved(saved.filter(idx => idx !== id));
    } else {
      setSaved(saved.concat(id));
    }
  }

  return (
    <div className="App">
      <div className="header">
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <SearchBox value={search} onUpdate={handleSearchChange}/>
          </Grid>
          <Grid item xs={6}>
            <CategorySelect
              onSelect={handleSelectCategory}
              category={category}
            />
          </Grid>
          <Grid item xs={12}>
            <SearchButton clickHandler={handleSubmit} active={searchActive}/>
          </Grid>
        </Grid>
      </div>
      <Grid direction="column" container spacing={3}>
      {results.map((data: data) => {
        return (
          <Grid key={data.id} item xs={12}>
            <ResultComponent data={data} saved={saved} handleSave={toggleSave}/>
          </Grid>
        );
      })}
      </Grid>
    </div>
  );
}

type Props = {
  results: data[],
  setResults: Function,
  saved: number[],
  setSaved: Function
}

export default SearchPage;
