import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
export const Nav = styled.nav`
  background: var(--navcolour);
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  transition: all 0.2s ease-in-out;
  position: sticky;
  top: 0;
  /* Third Nav */
  /* justify-content: flex-start;
`;
  
export const NavLink = styled(Link)`
  color: var(--text-primary);
  font-weight: bold;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin: 0px 20px;
  height: 60%;
  cursor: pointer;
  position: relative;
  opacity: 0.75;
  transition: all 0.2s ease-in-out;
  &::before {
    transition: 300ms;
    height: 5px;
    content: "";
    position: absolute;
    background-color: var(--text-primary);
    height: 0%;
    width: 100%;
    bottom: 0px;
  }
  &.active {
    color: var(--text-primary);
    font-weight: 900;
    border-bottom: 3px solid var(--text-primary);
  }

`;
  
export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  font-weight: bold;
  background: var(--background-secondary);
  padding: 10px 22px ;
  color: var(--text-primary);
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;

export const ThemeButton = styled.button`
  border-radius: 4px;
  font-weight: bold;
  background: var(--navbar);
  padding: 10px 22px;
  color: var(--text-primary);
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
`;