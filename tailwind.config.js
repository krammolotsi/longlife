module.exports = {
  variants: {},
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    fill: (theme) => ({
      red: theme('colors.red.primary'),
    }),
    colors: {
      white: '#ffffff',
      black: {
        light: '#262626',
        faded: '#00000059',
      },
      gray: {
        base: '#616161',
        background: '#fafafa',
        primary: '#6B7280',
        light: '#E5E7EB',
        dark: '#374151',
      },
      red: {
        primary: '#DC2626',
      },
      yellow: {
        primary: '#F59E0B',
      },
      green: {
        primary: '#059669',
      },
      blue: {
        light: '#93C5FD',
        primary: '#2563EB',
        dark: '#1D4ED8',
      },
      purple: {
        primary: '#7C3AED',
      },
      pink: {
        primary: '#DB2777',
      },
    },
    extend: {
      animation: {
        bounce: 'bounce 0.3s infinite',
        wiggle: 'wiggle 1s infinite',
        rotate: 'rotate 12s infinite',
        rotate_neg: 'rotate_neg 12s infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'scale(1.2) rotate(2deg)',
          },
          '50%': {
            transform: 'scale(0.8) rotate(-2deg)',
          },
        },
        rotate: {
          '0%, 100%': {
            transform: 'rotate(3deg)',
          },
          '50%': {
            transform: 'rotate(45deg)',
          },
        },
        rotate_neg: {
          '0%, 100%': {
            transform: 'rotate(-3deg)',
          },
          '50%': {
            transform: 'rotate(-45deg)',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
