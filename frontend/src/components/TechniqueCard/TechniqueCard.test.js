import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import TechniqueCard from './TechniqueCard';

test('Renders TechniqueCard component', () => {
  const cardTitle = 'cardTitleTest';
  render(<TechniqueCard cardTitle={cardTitle} />);
  const linkElement = screen.getByText(cardTitle);
  expect(linkElement).toBeInTheDocument();
});

test('TechniqueCard snapshot test', () => {
  const component = renderer.create(<TechniqueCard cardTitle="cardTitleTest" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
