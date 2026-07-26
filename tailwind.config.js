/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta editorial cálida para fotografía:
        // la imagen es la protagonista; el soporte es sobrio y cálido.
        espresso: {
          50: '#f7f5f2',
          100: '#ede8e1',
          200: '#d9d0c4',
          300: '#bdb0a0',
          400: '#9b8b76',
          500: '#7d6b56',
          600: '#605240',
          700: '#4a4032',
          800: '#2f291f',
          900: '#1a1612',
          950: '#100d0a',
        },
        ivory: {
          50: '#fdfcf9',
          100: '#faf7f1',
          200: '#f3ede2',
          300: '#e8ddca',
        },
        clay: {
          50: '#fbf3ee',
          100: '#f3e3d8',
          200: '#e6c4b0',
          300: '#d39e84',
          400: '#c27f5e',
          500: '#b8744a',
          600: '#a05f3c',
          700: '#804a30',
          800: '#623a27',
          900: '#4d2e21',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      maxWidth: {
        prose: '68ch',
      },
      keyframes: {
        kenburns: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.12) translate(-1.5%, -1.5%)' },
        },
        fadeCross: {
          '0%': { opacity: '0' },
          '12%': { opacity: '1' },
          '88%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        riseUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        kenburns: 'kenburns 8s ease-out forwards',
        fadeCross: 'fadeCross 7s ease-in-out infinite',
        riseUp: 'riseUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [],
};
