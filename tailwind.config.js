/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      primary: {
        "100": "var(--primary-100)",
        "200": "var(--primary-200)",
        "300": "var(--primary-300)",
        "400": "var(--primary-400)",
        "500": "var(--primary-500)",
        "600": "var(--primary-600)",
        "700": "var(--primary-700)",
        "800": "var(--primary-800)",
        "900": "var(--primary-900)",
      },
      secondary: {
        "100": "var(--secondary-100)",
        "200": "var(--secondary-200)",
        "300": "var(--secondary-300)",
        "400": "var(--secondary-400)",
        "500": "var(--secondary-500)",
        "600": "var(--secondary-600)",
        "700": "var(--secondary-700)",
      },
      surface: {
        "50": "var(--surface-50)",
        "100": "var(--surface-100)",
        "200": "var(--surface-200)",
        "300": "var(--surface-300)",
        "400": "var(--surface-400)",
        "500": "var(--surface-500)",
        "600": "var(--surface-600)",
        "700": "var(--surface-700)",
        "800": "var(--surface-800)",
        "900": "var(--surface-900)",
      },
      neutral: 'var(--neutral)',
      disabled: '#B1B1B1',
    },
    borderRadius: {
      'none': '0',
      'card': '4px 4px 0 0',
      default: '4px',
      '2': '8px',
      'xl': '54px',
      'full': '50%',
    },
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
      'rubik': ['Rubik', 'sans-serif'],
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '24': '24px',
      '2xl': '28px',
      '3xl': '30px',
      '4xl': '36px',
      '5xl': '48px',
      '6xl': '64px',
    },
    boxShadow: {
      default: '5px 5px 5px 5px var(--surface-200)',
      'up-box': '0 10px 10px 0 var(--surface-200)',
      'down-box': '0 2px 2px 0 var(--surface-200)',
    },
    spacing: {
      npx: '-1px',
      px: '1px',
      '2px': '2px',
      '14px': '14px',
      '13px': '13px',
      '0': '0px',
      '1': '4px',
      '2': '8px',
      '3': '12px',
      '4': '16px',
      '5': '20px',
      '6': '24px',
      '7': '28px',
      '8': '32px',
      '9': '36px',
      '10': '40px',
      '11': '44px',
      '12': '48px',
      '13': '52px',
      '14': '56px',
      '15': '60px',
      '16': '64px',
      '17': '68px',
      '18': '72px',
      '19': '76px',
      '20': '80px',
      '21': '84px',
      '22': '88px',
      '23': '92px',
      '24': '96px',
      '25': '100px',
      '26': '104px',
      '27': '108px',
      '28': '112px',
      '29': '116px',
      '30': '120px',
      '31': '124px',
      '32': '128px',
      '33': '132px',
      '34': '136px',
      '35': '140px',
      '36': '144px',
      '37': '148px',
      '38': '152px',
      '39': '156px',
      '40': '160px',
      '41': '164px',
      '42': '168px',
      '43': '172px',
      '44': '176px',
      '45': '180px',
      '46': '184px',
      '47': '188px',
      '48': '192px',
      '49': '196px',
      '50': '200px',
      '51': '204px',
      '52': '208px',
      '53': '212px',
      '54': '216px',
      '55': '220px',
      '56': '224px',
      '57': '228px',
      '58': '232px',
      '59': '236px',
      '60': '240px',
      '61': '244px',
      '62': '248px',
      '63': '252px',
      '64': '256px',
      '65': '260px',
      '66': '264px',
      '67': '268px',
      '68': '272px',
      '69': '276px',
      '70': '280px',
      '71': '284px',
      '72': '288px',
      '73': '292px',
      '74': '296px',
      '75': '300px',
      '76': '304px',
      '77': '308px',
      '78': '312px',
      '79': '316px',
      '80': '320px',
      '81': '324px',
      '82': '328px',
      '83': '332px',
      '84': '336px',
      '85': '340px',
      '86': '344px',
      '87': '348px',
      '88': '352px',
      '89': '356px',
      '90': '360px',
      '91': '364px',
      '92': '368px',
      '93': '372px',
      '94': '376px',
      '95': '380px',
      '96': '384px',
      '97': '388px',
      '98': '392px',
      '99': '396px',
      '100': '400px',
      '103': '412px',
      '125': '500px',
      '150': '600px',
    },
    screens: {
      'xs': {'min': '150px'},
      'sm': {'min': '640px'},
      'md': {'min': '768px'},
      'lg': {'min': '1024px'},
      'xl': {'min': '1280px'},
    },
    opacity: {
      '0': '0',
      '10': '.1',
      '20': '.2',
      '30': '.3',
      '40': '.4',
      '50': '.5',
      '60': '.6',
      '70': '.7',
      '80': '.8',
      '90': '.9',
      '100': '1',
    },
    lineHeight: {
      default: '1rem',
      '1': '1.5rem',
      '2': '1.75rem',
      '3': '2rem',
    },
    zIndex: {
      '-1': '-1',
      '9999': '9999',
      '0': '0',
      '1': '4',
      '2': '8',
      '3': '12'
    },
    fill: {
      current: 'currentColor',
    },
    extend: {
      typography: {
        DEFAULT: {
            css: {
                color: 'var(--surface-900)',
                h1: {
                  color: 'var(--surface-900)',
                },
                h2: {
                  color: 'var(--surface-900)',
                },
                h3: {
                  color: 'var(--surface-900)',
                },
                h4: {
                  color: 'var(--surface-900)',
                },
                h5: {
                  color: 'var(--surface-900)',
                },
                h6: {
                  color: 'var(--surface-900)',
                },
                blockquote: {
                  color: 'var(--surface-900)',
                },
                strong: {
                  color: 'var(--surface-900)',
                },
  
                code: {
                  color: 'var(--surface-900)',
                },
  
                figcaption: {
                  color: 'var(--surface-700)',
                },
                a: {
                  color: 'var(--primary-600)',
                  '&:hover': {
                      color: 'var(--primary-600)',
                  },
                },
            },
        },
      },
      minWidth: (theme) => ({
        ...theme("spacing")
      }),
      maxWidth: (theme) => ({
        ...theme("spacing")
      }),
    },
  },
  variants: {
    extend: {
      transitionProperty: ['responsive', 'motion-safe', 'motion-reduce', 'display'],
      transitionDuration: ['hover', 'focus', 'group-hover'],
      divideColor: ['group-hover'],
      display: ['group-hover']
    }
  },
  variants:[ 
    'active',
    'responsive',
  ],
  future: {
    removeDeprecatedGapUtilities: true,
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
};