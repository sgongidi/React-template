import { render, screen } from '@testing-library/react';
import Contact from './Contact';

test('renders contact Page', () => {
  render(<Contact />);
  const component = screen.getByText("Contact");
  expect(component).toBeInTheDocument();
});