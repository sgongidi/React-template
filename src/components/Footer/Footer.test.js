import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders Footer', () => {
  render(<Footer />);
  const component = screen.getByText(/Created by Web Dev Carolina./);
  expect(component).toBeInTheDocument();
});