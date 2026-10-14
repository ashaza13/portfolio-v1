import { render, screen } from '@testing-library/react';
import App from './App';

beforeAll(() => {
  window.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

test('renders the hero and every section', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Ashaz Ahmed/);
  ['about', 'skills', 'experience', 'work', 'contact'].forEach((id) => {
    expect(document.getElementById(id)).toBeInTheDocument();
  });
});
