/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        '100':'7px 7px 23px #997a0b,-7px -7px 23px #fff217',
        '200':'inset 7px 7px 10px #997a0b,inset -7px -7px 10px #fff217',
        '300':'20px 20px 60px #bebebe,-20px -20px 60px #ffffff'
      },
      fontFamily:{
        'Herr':["Herr Von Muellerhoff", "serif"],
        'meddon':["Meddon", "serif"],
        'handwritten':["Oooh Baby", "serif"]
      }
    },
  },
  plugins: [],
}

