import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <div className="Header">
      <NavLink className={'button16'} to="/MainList">
        Главная
      </NavLink>
      <NavLink className={'button16'} to="/Favorite">
        Любимые герои
      </NavLink>
    </div>
  );
};

export default Header;
