const config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        capybara: {
          800: '#6d3b1f',
          600: '#cc4b0c',
          400: '#ff5f0f',
        },
        dark: {
          900: '#0e0e0f',
          800: '#1a1a1c',
          700: '#2a2a2e',
        },
        light: {
          100: '#f4f4f5',
          200: '#a1a1aa',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;