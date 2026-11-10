import { render, screen } from '@testing-library/react';
import App from './App';

beforeAll(() => {
  window.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

test('renders the hero, the flow graphic and every section', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Ashaz Ahmed/);
  expect(screen.getByRole('img', { name: /pipelines stream raw rows/i })).toBeInTheDocument();
  ['top', 'systems', 'record', 'work', 'stack', 'contact'].forEach((id) => {
    expect(document.getElementById(id)).toBeInTheDocument();
  });
});
