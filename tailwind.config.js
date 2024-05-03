/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        fondoNegro: "url('/public/images/fondo-negro.jpg')",
        instagram: "url('/public/images/Redes/instagram.png')",
        facebook: "url('/public/images/Redes/facebook.png')",
        twitter: "url('/public/images/Redes/twitter.png')",
        youtube: "url('/public/images/Redes/youtube.png')",
      },
    },
  },
  plugins: [],
};
