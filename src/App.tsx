import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';

import './App.css';

import AppBar from './components/AppBar';
import CategorySelect from './components/CategorySelect';
import SearchBox from './components/SearchBox';
import SearchButton from './components/SearchButton';
import ResultComponent from './components/ResultComponent';

import { getResultPromise } from './pixabayAPI';
import { data } from './types/pixabayResponse';

function App() {
  let [results, setResults] = useState([]);
  let [saved, setSaved] = useState([]);
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
    console.log(saved)
    if (saved && saved.includes(id)){
      setSaved(saved.filter(idx => idx !== id));
    } else {
      setSaved(saved.concat(id));
    }
    console.log(saved)
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

export default App;
