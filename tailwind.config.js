/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        FondoMobile: "url('./images/bg-main-mobile.png')",
        FrondCard: "url('./images/bg-card-front.png')",
        BackCard: "url('./images/bg-card-back.png')",
      },
      fontFamily: {
      SpaceGrotesk: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        Graydient1: "hsl(249, 99%, 64%)",
        Graydient2: "hsl(278, 94%, 30%)",
        RedError:"hsl(0, 100%, 66%)",
        VeryDarkViolet: "#220930",
      },
    },
  },
  plugins: [],
}