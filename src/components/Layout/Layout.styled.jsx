import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: 20px 30px;
  background-color: whitesmoke;
  box-shadow: 0px 4px 4px whitesmoke;
`;

export const StyleNavLink = styled(NavLink)`
  display: inline-block;
  margin-left: 50px;
  font-size: 40px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  color: #000000;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &.active,
  &:hover,
  &:focus {
    color: blue;
    text-decoration: underline;
  }
`;



