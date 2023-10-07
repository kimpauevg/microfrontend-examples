import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'
import { NavLink } from "react-router-dom";

export const SWrapper = styled.main`
  margin: 0;
  padding: 25px;
  background-color: #efefef;
  font-family: 'Open Sans',Helvetica,Arial,Lucida,sans-serif;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    border: 0;
  }
`
export const SLink = styled(NavLink)`
  text-decoration: none;
  padding: 0 10px;
  height: 50px;
  line-height: 50px;
  &:visited {
    color: #000;
  }
  &:hover {
    background-color: #f6f6f6;
  }
  &.is-active{
    transition: background-color .3s ease;
    background-color: #efefef;
   }
`;
