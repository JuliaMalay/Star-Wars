import React from 'react';
import {NavLink} from 'react-router-dom';
import {AppBar, Toolbar, Container, Paper} from '@material-ui/core';
import useStyles from './style';

const Header = () => {
  const classes = useStyles();
  return (
    <div className="Header">
      <div>
        <Paper
          className={classes.mainHeader}
          square={true}
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1532978379173-523e16f371f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80)`,
          }}
        >
          <Container fixed>
            <div className={classes.mainHeaderContent}>
              <div className={classes.logo}></div>
            </div>
          </Container>
        </Paper>
      </div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.appBar}>
          <NavLink className={classes.nav} to="/">
            Home
          </NavLink>
          <NavLink className={classes.nav} to="/Favorite">
            Favorite characters
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
