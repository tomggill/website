import React from 'react';
import useLocalStorage from 'use-local-storage';
import { GiMoonBats } from 'react-icons/gi';
import { BiSun } from 'react-icons/bi';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  SignOutButton,
  ThemeButton,
} from './NavBarElements';
import useAuth from '../../hooks/useAuth';
import useLogout from '../../hooks/useLogout';

function Navbar() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  const { auth } = useAuth();
  const logout = useLogout();

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const signOut = async () => {
    await logout();
  };

  return (
    <Nav>
      <Bars />
      <NavMenu>
        <NavLink to="/about">
          About
        </NavLink>
        <NavLink to="/annual">
          Annual Report
        </NavLink>
        <NavLink to="/team">
          Teams
        </NavLink>
        <NavLink to="/react-helper">
          React Helper
        </NavLink>
      </NavMenu>
      {/* Second Nav */}
      <NavBtn>
        <ThemeButton onClick={switchTheme}>{theme === 'light' ? <BiSun size={24} /> : <GiMoonBats size={24} />}</ThemeButton>
        { auth?.accessToken ? (
          <SignOutButton data-testid="navLinkSignOut" onClick={signOut}>Sign Out</SignOutButton>
        ) : (
          <>
            <NavBtnLink data-testid="navLinkSignUp" to="/register">Sign Up</NavBtnLink>
            <NavBtnLink data-testid="navLinkSignIn" to="/login">Sign In</NavBtnLink>
          </>
        )}
      </NavBtn>
    </Nav>
  );
}

export default Navbar;
