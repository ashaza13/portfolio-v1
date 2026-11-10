/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        // Swiss palette: near-black ground, off-white type, a ramp of grays, one orange.
        ink: '#0a0a0a',
        paper: '#f5f5f5',
        body: '#bdbdbd',
        muted: '#8f8f8f',
        line: '#2e2e2e',
        hair: '#1f1f1f',
        dim: '#5a5a5a',
        surface: '#161616',
        accent: '#ff5a1f',
      },
      fontFamily: {
        sans: ['"Schibsted Grotesk"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      transitionTimingFunction: {
        swiss: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
