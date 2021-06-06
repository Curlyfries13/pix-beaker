import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextBox from './components/TextBox';
import CategorySelect from './components/CategorySelect';
import SearchButton from './components/SearchButton';

function App() {
  return (
    <div className="App">
      <TextBox />
      <CategorySelect />
      <SearchButton />
    </div>
  );
}

export default App;
