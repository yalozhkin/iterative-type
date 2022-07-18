/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{html,svelte}'],
  theme: {
    fontFamily: {
      sans: ['GolosText', 'sans-serif'],
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
  plugins: [],
}
