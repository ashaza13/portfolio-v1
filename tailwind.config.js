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
        hair: '#222222',
        surface: '#161616',
        accent: '#ff5a1f',
        // Used on the inverted (light) bands.
        band: {
          body: '#404040',
          muted: '#5e5e5e',
          line: '#d4d4d4',
        },
      },
      fontFamily: {
        sans: ['Inter', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['"Inter Tight"', 'Inter', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        content: '84rem',
      },
      transitionTimingFunction: {
        swiss: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      letterSpacing: {
        display: '-0.055em',
        heading: '-0.035em',
      },
    },
  },
  plugins: [],
}
