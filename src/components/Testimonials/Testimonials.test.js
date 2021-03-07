import { render, screen } from '@testing-library/react';
import Testimonials from './Testimonials';

test('renders testimonials', () => {
  let testimonials = [{ author: "AUTHOR", text: "TEXT" }]
  render(<Testimonials testimonials={testimonials}/>);
  const author = screen.getByText(/Author: AUTHOR/);
  const text = screen.getByText(/Text: TEXT/);
  expect(author).toBeInTheDocument();
  expect(text).toBeInTheDocument();
});
