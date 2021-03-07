import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders Home Page', () => {
  render(<Home />);
  const component = screen.getByText("Homepage");
  expect(component).toBeInTheDocument();
});