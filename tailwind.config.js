// /** @type {import('tailwindcss').Config} */

const percentages = {
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  '1/6': '16.666667%',
  '5/6': '83.333333%',
  '1/12': '8.333333%',
  '5/12': '41.666667%',
  '7/12': '58.333333%',
  '11/12': '91.666667%',
  '1/24': '4.166667%',
  '5/24': '20.833333%',
  '7/24': '29.166667%',
  '11/24': '45.833333%',
  '13/24': '54.166667%',
  '17/24': '70.833333%',
  '19/24': '79.166667%',
  '23/24': '95.833333%',
};

const vh = {
  'vh-1/2': '50vh',
  'vh-1/3': '33.333333vh',
  'vh-2/3': '66.666667vh',
  'vh-1/4': '25vh',
  'vh-3/4': '75vh',
  'vh-1/5': '20vh',
  'vh-2/5': '40vh',
  'vh-3/5': '60vh',
  'vh-4/5': '80vh',
  'vh-1/6': '16.666667vh',
  'vh-5/6': '83.333333vh',
  'vh-1/12': '8.333333vh',
  'vh-5/12': '41.666667vh',
  'vh-7/12': '58.333333vh',
  'vh-11/12': '91.666667vh',
  'vh-1/24': '4.166667vh',
  'vh-5/24': '20.833333vh',
  'vh-7/24': '29.166667vh',
  'vh-11/24': '45.833333vh',
  'vh-13/24': '54.166667vh',
  'vh-17/24': '70.833333vh',
  'vh-19/24': '79.166667vh',
  'vh-23/24': '95.833333vh',
}

module.exports = {
  content: ['./index.html', './src/js/*.js'],
  theme: {
    fontFamily: {
      'ramabhadra': ['Ramabhadra', 'sans-serif'],
      'inter-tight': ['Inter var', 'sans-serif'],
      // 'inter-tight': ['Inter Tight', 'sans-serif'],
    },
    extend: {
      colors: {
        'transparent': 'transparent',
        'current': 'currentColor',
        'whitish': '#f0edfa',
        'purple': '#6e639b',
        'purple-light': '#8a7ebe',
        'purple-lighter': '#d3c9fc',
        'purple-lightest': '#f0edfa',
        'gray-input': '#ddd',
        'lila': '#d0b1d0',
      },
      boxShadow: {
        'header': '0 4px 4px #bbb',
      },
      dropShadow: {
        'line': '0 0 1px #000',
        'sm-strong': '0 4px 4px #aaa',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      gap: percentages,
      minWidth: percentages,
      maxWidth: percentages,
      minHeight: {
        ...percentages,
        ...vh,
      },
      height: percentages,
      maxHeight: percentages,
      fontSize: percentages,
      padding: percentages,
      borderRadius: {
        '4xl': '2rem',
        '8xl': '4rem',
      }
    },
  },
  plugins: [],
}
