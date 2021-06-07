import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import SearchPage from './components/Search/SearchPage';
import ViewPicture from './components/ViewPicture';
import AppBar from './components/AppBar';
import FavDrawer from './components/FavDrawer';


// This is the Core App Page, which also handles the routing between the search
// view and the Picture view
function App() {
  // This state holds all saved pictures (for this session)
  let [results, setResults] = useState([]);
  // This state holds all saved pictures (for this session)
  let [saved, setSaved] = useState([]);
  // This state controls whether or not the drawer for the saved / favorite
  // pictures is open
  let [favState, setFavState] = useState(false);

  const handleFavToggle = () => {
    setFavState(!favState);
  }

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
      <Drawer anchor='right' open={favState} onClose={handleFavToggle}>
        <FavDrawer favorites={saved}/>
      </Drawer>
      <AppBar favToggle={handleFavToggle}/>
    </div>
  )
}

export default App;
