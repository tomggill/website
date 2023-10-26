import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import TechniqueCard from './TechniqueCard';

afterEach(() => {
  cleanup();
});

test('Renders TechniqueCard component', () => {
  const cardTitle = 'cardTitleTest';
  render(<TechniqueCard cardTitle={cardTitle} />);
  const techniqueCardElement = screen.getByText(cardTitle);
  expect(techniqueCardElement).toBeInTheDocument();
});

test('TechniqueCard snapshot test', () => {
  const component = renderer.create(<TechniqueCard cardTitle="cardTitleTest" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
