import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  ThemeButton,
} from './NavBarElements';
import useLocalStorage from 'use-local-storage';
import {GiMoonBats} from 'react-icons/gi';
import {BiSun} from 'react-icons/bi'
import useAuth from '../../hooks/useAuth';
import useLogout from '../../hooks/useLogout';
  
const Navbar = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  const { auth } = useAuth();
  const logout = useLogout();

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  const signOut = async () => {
    await logout();
  }

  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to='/about'>
            About
          </NavLink>
          <NavLink to='/annual'>
            Annual Report
          </NavLink>
          <NavLink to='/team'>
            Teams
          </NavLink>
          <NavLink to='/react-helper'>
            React Helper
          </NavLink>
        </NavMenu>
        {/* Second Nav */}
        <NavBtn>
          <ThemeButton onClick={switchTheme} >{theme === 'light' ? <BiSun size={24} /> : <GiMoonBats size={24}/>}</ThemeButton>
          { auth?.accessToken ? (
            <NavBtnLink onClick={signOut}>Sign Out</NavBtnLink>
          ) : (
            <>
              <NavBtnLink to='/register'>Sign Up</NavBtnLink>
              <NavBtnLink to='/login'>Sign In</NavBtnLink>
            </>
          )}
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;