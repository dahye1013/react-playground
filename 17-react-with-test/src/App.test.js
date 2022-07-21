import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  //1. render component
  render(<App />);
  // 2. hold of some element on that virtual screen (simulate browser)
  const linkElement = screen.getByText(/learn react/i);
  // 3. check element is document
  expect(linkElement).toBeInTheDocument();
});
