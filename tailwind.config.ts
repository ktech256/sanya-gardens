import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        olive: {
          50: '#f5f7ee',
          100: '#e7edd7',
          200: '#cedcab',
          300: '#b6c97f',
          400: '#9bb65c',
          500: '#7f9643',
          600: '#667936',
          700: '#4f5e2a',
          800: '#39431f',
          900: '#283117',
          950: '#1b230f'
        },
        forest: {
          100: '#d7e8d6',
          200: '#afcfad',
          300: '#87b684',
          400: '#5f9d5b',
          500: '#3f7f3e',
          600: '#316530',
          700: '#264d25',
          800: '#1a3519',
          900: '#112311',
          950: '#0a150a'
        },
        gold: {
          400: '#c9a227',
          500: '#d4af37',
          600: '#b68d2c'
        }
      },
      boxShadow: {
        gold: '0 0 30px rgba(212, 175, 55, 0.22)'
      },
      backgroundImage: {
        'gold-metallic': 'linear-gradient(135deg, #b68d2c 0%, #d4af37 35%, #f0d778 50%, #c9a227 70%, #8f6d1c 100%)'
      },
      keyframes: {
        aurora: {
          '0%, 100%': { transform: 'translateX(-5%) translateY(0%) scale(1)' },
          '50%': { transform: 'translateX(5%) translateY(-4%) scale(1.06)' }
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212,175,55,0.4)' },
          '70%': { boxShadow: '0 0 0 14px rgba(212,175,55,0)' }
        }
      },
      animation: {
        aurora: 'aurora 16s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2.6s infinite'
      }
    }
  },
  plugins: []
};

export default config;
