/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          xl: "1110px",
        },
      },
      colors:{
         orange:"#FCB72B"
      },
      black:{
        DEFAULT:"#495567",
        1:"#939CAA"
      },
      white:"#FFF"
    },
   
  },
  plugins: [],
};
