import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Title from './Title';

test('Renders title component', () => {
  const titleText = 'TestText';
  render(<Title title={titleText} />);
  const linkElement = screen.getByText(titleText);
  expect(linkElement).toBeInTheDocument();
});

test('Title snapshot test', () => {
  const component = renderer.create(<Title text="TestText" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
