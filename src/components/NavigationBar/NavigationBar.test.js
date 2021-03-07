import { render, screen } from '@testing-library/react';
import NavigationBar from './NavigationBar';

test('renders Navigation Bar', () => {
  render(<NavigationBar/>);
  const component = screen.getByRole('navigation');
  expect(component).toBeInTheDocument();
});