/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        himalaya: {
          50: '#fdf8f0',
          100: '#f9edda',
          200: '#f0d5a8',
          300: '#e5b870',
          400: '#d8963d',
          500: '#c97d25',
          600: '#a8631c',
          700: '#854b18',
          800: '#6b3c18',
          900: '#593217',
        },
        sage: {
          50: '#f4f7f4',
          100: '#e4ede5',
          200: '#c8dbc9',
          300: '#9dbfa0',
          400: '#6d9e72',
          500: '#4a7e50',
          600: '#39653e',
          700: '#2f5133',
          800: '#27422b',
          900: '#213724',
        },
        stone: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
        gold: '#C5A253',
        saffron: '#E8891A',
        terracotta: '#C4663A',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'himalaya-gradient': 'linear-gradient(135deg, #1a0a00 0%, #2d1a00 40%, #1a2a1a 100%)',
        'gold-gradient': 'linear-gradient(135deg, #C5A253, #E8891A)',
        'sage-gradient': 'linear-gradient(135deg, #27422b, #4a7e50)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { textShadow: '0 0 10px rgba(197, 162, 83, 0.5)' },
          '100%': { textShadow: '0 0 20px rgba(197, 162, 83, 0.9), 0 0 40px rgba(197, 162, 83, 0.5)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
