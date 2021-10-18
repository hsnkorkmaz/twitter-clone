module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        twitterPrimary: {
          base: "hsl(203, 89%, 53%)",
          dark: "hsl(203, 89%, 53%)",
          light: "hsl(203, 89%, 53%)"
        },
        twitterGray: {
          dark: "#657786",
          light: "#AAB8C2",
          extraLight: "#E1E8ED",
          lightest: "#F5F8FA",
        },
        twitterBlack: "#14171A"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}