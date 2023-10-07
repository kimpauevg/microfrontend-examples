import React from 'react';
import { SLink, SWrapper } from './styles';

const Navbar = () => {

  return (
    <SWrapper>
      <SLink exact={true} activeClassName='is-active' to='/'>
        Home
      </SLink>
      <SLink activeClassName='is-active' to='/about/'>
        About
      </SLink>
    </SWrapper>
  );
};

export default Navbar;
