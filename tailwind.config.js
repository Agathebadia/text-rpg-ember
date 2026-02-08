/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './app/**/*.{hbs,js,ts,html}', // includes app/index.html and all templates
  ],
    safelist: [
// Colors: bg-, text-, border- with standard Tailwind colors
    {
      pattern: /^(bg|text|border)-(slate|gray|red|yellow|green|blue|indigo|purple|pink|white|black|emerald|sky|rose|amber|lime|teal|cyan|fuchsia|violet|stone|neutral|zinc|orange|sky|sky)-[0-9]{1,3}$/,
    },

    // Margins: m-, mt-, mb-, ml-, mr-, mx-, my- 0–96
    {
      pattern: /^(m|mt|mb|ml|mr|mx|my)-[0-9]{1,2}$/,
    },

    // Padding: p-, pt-, pb-, pl-, pr-, px-, py- 0–96
    {
      pattern: /^(p|pt|pb|pl|pr|px|py)-[0-9]{1,2}$/,
    },

    // Flex/grid
    {
      pattern: /^(flex|flex-wrap|flex-row|flex-col|items-(start|center|end|stretch)|justify-(start|center|end|between|around|evenly))$/,
    },

    // Typography
    {
      pattern: /^(text|font|tracking|leading)-.+$/,
    },

    // Borders, rounded
    {
      pattern: /^(border|rounded|ring|shadow)-.+$/,
    },
    // Hover and focus
      {
    pattern: /^(bg|text|border)-(red|yellow|green|blue|gray)-[0-9]{1,3}$/,
    variants: ['hover', 'focus', 'active', 'disabled'],
  },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
