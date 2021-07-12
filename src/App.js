import logo from './logo.svg';
import './App.css';

import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import './components/css/App.css';
// import DeveloperList from './components/js/DeveloperList';
// import ProjectList from './components/js/ProjectList';
// import ProjectManagement from './components/js/ProjectManagement'
// import Header from './components/js/Header';
import {BrowserRouter, Route} from 'react-router-dom';
import MainList from './components/MainList';
import Favorite from './components/Favorite';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div style={{height: window.innerHeight, width: '100%'}}>
          <Route path="/MainList" render={() => <MainList />} />
          <Route path="/Favorite" render={() => <Favorite />} />
        </div>
      </div>
    </BrowserRouter>
  );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Navlink></Navlink> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
