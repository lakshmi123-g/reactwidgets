import React from 'react';
import Align from './Alignme';
import './App.css';
import ChangeColor from './changecolor';
import Clock from './clock';
import Counter from './Counter';
import Color from './colorslide'
import FontSizer from './FontSizer';
import ShowHide from './showHide';

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <ShowHide />
      <hr />
      <FontSizer />
      <hr />
      <Align />
      <hr />
      <Clock />
      <hr />
      <ChangeColor />
      <hr />
    <Color/>
      
    </div>
  );
}

export default App;
