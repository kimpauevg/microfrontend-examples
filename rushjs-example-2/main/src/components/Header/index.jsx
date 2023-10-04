import React from 'react';
import { SWrapper, SLabel } from './styles';

const Header = ({ sitename }) => (
  <SWrapper>
    <div>
      <SLabel>{sitename}</SLabel>
    </div>
  </SWrapper>
);

export default Header;
