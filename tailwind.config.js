/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        FondoMobile: "url('./images/bg-main-mobile.png')",
        FrondCard: "url('./images/bg-card-front.png')"
      },
      fontFamily: {
      SpaceGrotesk: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}