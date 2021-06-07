import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';

import AppBar from './AppBar';
import CategorySelect from './CategorySelect';
import SearchBox from './SearchBox';
import SearchButton from './SearchButton';
import ResultComponent from './ResultComponent';

import { getResultPromise } from 'pixabayAPI';
import { data } from 'types/pixabayResponse';

function SearchPage({ results, setResults, saved, setSaved}: Props) {
  let [category, setCategory] = useState('');
  let [search, setSearch] = useState('');
  let [searchActive, setSearchActive] = useState(false);
  let [favState, setFavState] = useState(false);

  const handleSelectCategory = (newCategory: string) => {
    setCategory(newCategory);
  }

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
  const handleFavToggle = () => {
    setFavState(!favState);
  }

  const handleSubmit = () => {
    if (searchActive) {
      getResultPromise(search, category).then((response) => {
        if (response.status == 200) {
          console.log(response.data.hits);
          setResults(response.data.hits);
        }
        // NOTE: we don't do anything if we get an error response
      })
    }
  }

  const toggleSave = (id: string) => {
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
      <AppBar favToggle={handleFavToggle}/>
    </div>
  );
}

type Props = {
  results: data[],
  setResults: Function,
  saved: string[],
  setSaved: Function
}

export default SearchPage;
