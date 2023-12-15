/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blue: {
        dark: "#005FBC",
        DEFAULT: "#0080FF",
        light: "#41A0FF",
      },
      gray: {
        dark: "#AAAAAA",
        DEFAULT: "#BBBBBB",
        light: "#CCCCCC",
      },
      chrome: {
        DEFAULT: "#EEEEEE",
      },
      black: {
        DEFAULT: "#121212",
      },
      white: {
        DEFAULT: "#FFFFFF",
      },
    },
    fontSize: {
      10: "10px",
      13: "13px",
      15: "15px",
      28: "28px",
    },
    spacing: {
      2: "2px",
      8: "8px",
      12: "12px",
      14: "14px",
      15: "15px",
      16: "16px",
      48: "48px",
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          '@screen sm': {
            maxWidth: '100%',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '812px',
          },
          '@screen xl': {
            maxWidth: '812px',
          },
        }
      })
    },
  ],
};
