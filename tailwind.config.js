const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ['Golos', 'Arial', 'Helvetica', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      gray: {
        100: '#dfe3ec',
        200: '#afbacf',
        300: '#8592ad',
        400: '#6c7993',
        800: '#0f1624',
        900: '#0f161a',
      },
      black: '#000',
      white: '#fff',
      blue: {
        200: '#15c2e0',
        300: '#13adc7',
        800: '#304169',
        900: '#1b2437',
      },
      neutral: {
        600: '#484b50',
        700: '#383b41',
        800: '#2e3137',
      },
    },
    fontSize: {
      xs: '0.625rem', // 10px
      sm: '0.75rem', // 12px
      tiny: '0.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.375rem', // 22px
      '3xl': '1.5rem', // 24px
      '4xl': '1.75rem', // 28px
      '5xl': '2rem', // 32px
      '6xl': '2.25rem', // 36px
      '7xl': '2.5rem', // 40px
      '7.5xl': '3rem', // 48px
      '8xl': '3.5rem', // 56px
      '9xl': '4.5rem', // 72px
    },
    lineHeight: {
      1: '0.625rem', // 10px,
      2: '0.75rem', // 12px
      3: '0.875rem', // 14px
      4: '1rem', // 16px
      5: '1.125rem', // 18px
      6: '1.25rem', // 20px
      7: '1.375rem', // 22px
      8: '1.5rem', // 24px
      9: '1.625rem', // 26px
      10: '1.75rem', // 28px
      11: '1.875rem', // 30px
      12: '2rem', // 32px
      13: '2.5rem', // 40px
    },
    boxShadow: {
      DEFAULT:
        '0px 8px 16px rgba(46, 49, 55, 0.1), 0px 0px 2px rgba(46, 49, 55, 0.2)',
      inner:
        'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)',
      download: '0px 4px 0px 0px rgba(32, 43, 70, 1)',
    },
    borderRadius: {
      none: '0px',
      xs: '1px',
      sm: '2px',
      tiny: '3px',
      DEFAULT: '4px',
      md: '6px',
      lg: '8px',
      xl: '12px',
      '2xl': '16px',
      '3xl': '100px',
      full: '50%',
    },
    screens: {
      xs: '414px',
      ...defaultTheme.screens,
    },
    extend: {
      opacity: {
        33: '0.33',
      },
      borderOpacity: {
        33: '0.33',
      },
      borderWidth: {
        5: '5px',
      },
      backgroundOpacity: {
        33: '0.33',
      },
      backgroundImage: {
        'white-gray-gradient':
          'linear-gradient(121.57deg, #ffffff 18.77%, rgba(255, 255, 255, 0.66) 60.15%)',
        'blue-green-gradient':
          'linear-gradient(270deg, #13adc7 0%, #945dd6 100%)',
        'blue-green-gradient-light':
          ' linear-gradient(270deg, #00dbd8 0%, #b133ff 100%)',
        'orange-purple-gradient':
          'linear-gradient(270deg, #f46737 0%, #945dd6 100%)',
        'orange-purple-gradient-light':
          'linear-gradient(270deg, #ffa82e 0%, #c747eb 100%)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
