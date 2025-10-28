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
          1: '#0A0A0A',
          2: '#121212',
          3: '#1A1A1A',
          4: '#222222',
          5: '#2A2A2A',
          6: '#333333',
          7: '#3B3B3B',
          DEFAULT: '#000000',
          active: '#333333',
        },
        secondary: {
          1: '#0A0A0A',
          2: '#121212',
          3: '#1A1A1A',
          4: '#222222',
          5: '#2A2A2A',
          DEFAULT: '#121212',
          active: '#222222',
        },
        purple: {
          1: '#0A0A0A',
          2: '#121212',
          3: '#1A1A1A',
          4: '#222222',
          5: '#2A2A2A',
          6: '#333333',
          7: '#3B3B3B',
          8: '#444444',
          9: '#4C4C4C',
          DEFAULT: '#333333',
          light: '#3B3B3B',
          dark: '#2A2A2A',
        },
        dark: {
          1: '#0A0A0A',
          2: '#121212',
          3: '#1A1A1A',
          4: '#222222',
          5: '#2A2A2A',
          DEFAULT: '#000000',
        },
        black: {
          1: '#0A0A0A',
          2: '#121212',
          3: '#1A1A1A',
          4: '#222222',
          5: '#2A2A2A',
        },
        white: {
          1: '#FFFFFF',
          2: '#F5F5F5',
          3: '#E0E0E0',
          4: '#C0C0C0',
          5: '#A0A0A0',
        },
        gray: {
          1: '#0A0A0A',
          2: '#121212',
          3: '#1A1A1A',
          4: '#222222',
          5: '#2A2A2A',
          6: '#333333',
          7: '#3B3B3B',
          8: '#444444',
          9: '#4C4C4C',
        },
        neon: {
          purple: '#555555',
          pink: '#666666',
          blue: '#777777',
          green: '#888888',
        },
      },
      fontFamily: {
        'ibm-plex-serif': ['"IBM Plex Serif"', 'serif'],
        'bangers': ['"Bangers"', 'cursive'],
        'luckiest-guy': ['"Luckiest Guy"', 'cursive'],
        'orbitron': ['"Orbitron"', 'monospace'],
        'cyberpunk': ['"Orbitron"', '"Roboto Mono"', 'monospace'],
        'roboto-mono': ['"Roboto Mono"', 'monospace'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
        'neon-flicker': 'neon-flicker 1.5s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'moveGrid': 'moveGrid 20s linear infinite',
        'pulse': 'pulse 8s ease-in-out infinite alternate',
      },
      keyframes: {
        'glow-pulse': {
          '0%': {
            textShadow: '0 0 5px #FFFFFF, 0 0 10px #CCCCCC, 0 0 15px #AAAAAA',
          },
          '100%': {
            textShadow: '0 0 10px #EEEEEE, 0 0 20px #CCCCCC, 0 0 30px #AAAAAA, 0 0 40px #AAAAAA',
          },
        },
        'neon-flicker': {
          '0%, 100%': {
            opacity: '1',
            textShadow: '0 0 5px #FFFFFF, 0 0 10px #CCCCCC, 0 0 15px #AAAAAA',
          },
          '50%': {
            opacity: '0.8',
            textShadow: '0 0 2px #FFFFFF, 0 0 5px #CCCCCC, 0 0 8px #AAAAAA',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'moveGrid': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(40px, 40px)' },
        },
        'pulse': {
          '0%': { opacity: '0.3' },
          '100%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
};