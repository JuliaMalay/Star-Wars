import './App.css';

import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import MainList from './components/MainList';
import Favorite from './components/Favorite';
import Header from './components/Header';
import useStyles from './components/style';

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div style={{height: window.innerHeight, width: '100%'}}>
          <Route exact path="/" render={() => <MainList />} />
          <Route path="/Favorite" render={() => <Favorite />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
