import React from 'react';
// @ts-ignore
import { SWrapper, SLabel } from './styles';

interface IHeader  {
  sitename: string
}
const Header = ({ sitename }: IHeader) => (
  <SWrapper>
    <div>
      <SLabel>{sitename}</SLabel>
    </div>
  </SWrapper>
);

export default Header;
