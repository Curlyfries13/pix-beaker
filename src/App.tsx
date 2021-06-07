import React, { useState } from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import SearchPage from './components/SearchPage';
import ViewPicture from './components/ViewPicture';

function App() {
  let [results, setResults] = useState([]);
  let [saved, setSaved] = useState([]);

  return (
    <div>
      <Switch>
        <Route path="/view/:id">
          <ViewPicture results={results} />
        </Route>
        <Route path="/">
          <SearchPage
            results={results}
            setResults={setResults}
            saved={saved}
            setSaved={setSaved}
          />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
