import { render, screen } from '@testing-library/react';
import App from './App';
import HW1 from './homework-react/bt-6/8/bt-6-8-2025';
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
