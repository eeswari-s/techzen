/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Arial', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#00162C', // footer
          900: '#001D3B', // header, dark sections, text on gold buttons
          800: '#06355E', // gradient middle
          700: '#0B4876', // gradient end
          text: '#092B52', // headings on light bg
        },
        gold: {
          DEFAULT: '#FFC928', // primary buttons, kicker pills, highlights
          dark: '#F2AE00', // hover
          deep: '#9A6500', // small gold text on white
          soft: '#FFF5CF', // soft gold bg
        },
        muted: '#62748B', // paragraph text
        line: '#E5EAF0', // card borders
        sky: { soft: '#C7D7E7' }, // text on dark bg
        surface: '#F7FAFC', // alternate section bg
        whatsapp: '#20C66B',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #001D3B 0%, #06355E 65%, #0B4876 100%)',
        'cta-gradient': 'linear-gradient(120deg, #001D3B, #0B4776)',
      },
      boxShadow: {
        card: '0 8px 25px rgba(0,29,59,0.05)',
        'card-hover': '0 24px 50px rgba(0,29,59,0.14)',
        gold: '0 10px 25px rgba(255,201,40,0.25)',
      },
      borderRadius: { card: '20px' },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shine: {
          '0%': { transform: 'translateX(-120%) skewX(-20deg)' },
          '100%': { transform: 'translateX(320%) skewX(-20deg)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(1)', opacity: '0.6' },
          '80%, 100%': { transform: 'scale(1.7)', opacity: '0' },
        },
        'stripe-move': {
          '0%': { transform: 'translateX(0) rotate(-35deg)' },
          '50%': { transform: 'translateX(40px) rotate(-35deg)' },
          '100%': { transform: 'translateX(0) rotate(-35deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        // Shine that sweeps once, then rests (used on the footer logo)
        sweep: {
          '0%': { transform: 'translateX(-150%) skewX(-20deg)' },
          '35%, 100%': { transform: 'translateX(350%) skewX(-20deg)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.35', transform: 'scale(0.95)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        loadbar: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        shine: 'shine 0.9s ease-out',
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.2,0.6,0.4,1) infinite',
        'stripe-move': 'stripe-move 14s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        loadbar: 'loadbar 1s ease-out forwards',
        sweep: 'sweep 4s ease-in-out infinite',
        glow: 'glow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
