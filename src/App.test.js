import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Penta Calc title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Penta Calc/i);
  expect(titleElement).toBeInTheDocument();
});
