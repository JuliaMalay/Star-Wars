import './App.css';

import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import MainList from './components/MainList';
import Favorite from './components/Favorite';
import Header from './components/Header';
import {ThemeProvider} from '@material-ui/styles';
import {createTheme} from '@material-ui/core/styles';
// import useStyles from './components/style';
const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#ffffff',
    },
  },
});
function App() {
  const [indexPage, setIndexPage] = React.useState(1);
  // const classes = useStyles();
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Header />
          <div style={{height: window.innerHeight, width: '100%'}}>
            <Route exact path="/">
              <MainList setIndexPage={setIndexPage} indexPage={indexPage} />
            </Route>
            <Route path="/Favorite">
              <Favorite />
            </Route>
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
