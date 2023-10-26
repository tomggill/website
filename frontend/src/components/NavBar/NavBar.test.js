import './matchMediaMock';
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from './NavBar';
import { AuthProvider } from '../../context/AuthProvider';
import '@testing-library/jest-dom';

let mockAuth = {};

jest.mock('../../hooks/useAuth', () => ({
  __esModule: true,
  default: () => ({ auth: mockAuth }),
}));

afterEach(() => {
  cleanup();
  mockAuth = {};
});

test('Renders NavBar component correctly without an access token present', () => {
  render(
    <Router>
      <AuthProvider>
        <Navbar />
      </AuthProvider>
    </Router>,
  );
  const navBarSignUpElement = screen.getByTestId('navLinkSignUp');
  const navBarSignInElement = screen.getByTestId('navLinkSignIn');
  const navBarSignOutElement = screen.queryByTestId('navLinkSignOut');
  expect(navBarSignUpElement).toBeInTheDocument();
  expect(navBarSignInElement).toBeInTheDocument();
  expect(navBarSignOutElement).toBeNull();
});

test('Renders NavBar component correctly with an access token present', () => {
  mockAuth = {
    username: 'testUsername',
    accessToken: 'testAccessToken',
  };
  render(
    <Router>
      <AuthProvider>
        <Navbar />
      </AuthProvider>
    </Router>,
  );
  const navBarSignUpElement = screen.queryByTestId('navLinkSignUp');
  const navBarSignInElement = screen.queryByTestId('navLinkSignIn');
  const navBarSignOutElement = screen.getByTestId('navLinkSignOut');
  expect(navBarSignUpElement).toBeNull();
  expect(navBarSignInElement).toBeNull();
  expect(navBarSignOutElement).toBeInTheDocument();
});

test('NavBar snapshot test', () => {
  const component = renderer.create(
    <Router>
      <AuthProvider>
        <Navbar />
      </AuthProvider>
    </Router>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
