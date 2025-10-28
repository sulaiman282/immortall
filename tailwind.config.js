/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: '#F3E8FF',
          2: '#E9D5FF',
          3: '#C084FC',
          4: '#A855F7',
          5: '#7C3AED',
          DEFAULT: '#C084FC',
          active: '#A855F7',
        },
        secondary: {
          1: '#1E1B26',
          2: '#2D2438',
          3: '#3C2E4A',
          4: '#4B385C',
          5: '#5A426E',
          DEFAULT: '#3C2E4A',
          active: '#4B385C',
        },
        purple: {
          1: '#F3E8FF',
          2: '#E9D5FF',
          3: '#D8B4FE',
          4: '#C084FC',
          5: '#A855F7',
          6: '#9333EA',
          7: '#7C3AED',
          8: '#6D28D9',
          9: '#5B21B6',
          DEFAULT: '#A855F7',
          light: '#C084FC',
          dark: '#7C3AED',
        },
        dark: {
          1: '#0A0A0F',
          2: '#1A1A2E',
          3: '#16213E',
          4: '#0F3460',
          5: '#533A7B',
          DEFAULT: '#1A1A2E',
        },
        black: {
          1: '#0A0A0A',
          2: '#1A1A1A',
          3: '#333333',
          4: '#555555',
          5: '#777777',
        },
        white: {
          1: '#FFFFFF',
          2: '#F5F5F5',
          3: '#E0E0E0',
          4: '#C0C0C0',
          5: '#A0A0A0',
        },
        gray: {
          1: '#F0F0F0',
          2: '#C8C8C8',
          3: '#808080',
          4: '#585858',
          5: '#303030',
        },
        neon: {
          purple: '#DA70D6',
          pink: '#FF1493',
          blue: '#00BFFF',
          green: '#00FF7F',
        },
      },
      fontFamily: {
        'ibm-plex-serif': ['"IBM Plex Serif"', 'serif'],
        'bangers': ['"Bangers"', 'cursive'],
        'luckiest-guy': ['"Luckiest Guy"', 'cursive'],
        'orbitron': ['"Orbitron"', 'monospace'],
        'cyberpunk': ['"Orbitron"', '"Roboto Mono"', 'monospace'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
        'neon-flicker': 'neon-flicker 1.5s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%': {
            textShadow: '0 0 5px #A855F7, 0 0 10px #A855F7, 0 0 15px #A855F7',
          },
          '100%': {
            textShadow: '0 0 10px #C084FC, 0 0 20px #C084FC, 0 0 30px #C084FC, 0 0 40px #C084FC',
          },
        },
        'neon-flicker': {
          '0%, 100%': {
            opacity: '1',
            textShadow: '0 0 5px #A855F7, 0 0 10px #A855F7, 0 0 15px #A855F7',
          },
          '50%': {
            opacity: '0.8',
            textShadow: '0 0 2px #A855F7, 0 0 5px #A855F7, 0 0 8px #A855F7',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};