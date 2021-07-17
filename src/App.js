import './App.css';

import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import MainList from './components/MainList';
import Favorite from './components/Favorite';
import Header from './components/Header';
// import useStyles from './components/style';

function App() {
  const [indexPage, setIndexPage] = React.useState(1);
  // const classes = useStyles();
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div style={{height: window.innerHeight, width: '100%'}}>
          <Route exact path="/">
            <MainList setIndexPage={setIndexPage} indexPage={indexPage} />
          </Route>
          <Route path="/Favorite">
            <Favorite />
          </Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
