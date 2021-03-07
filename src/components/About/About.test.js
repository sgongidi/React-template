import { render, screen } from '@testing-library/react';
import About from './About';

test('renders about Page', () => {
  render(<About />);
  const component = screen.getByText("About");
  expect(component).toBeInTheDocument();
});