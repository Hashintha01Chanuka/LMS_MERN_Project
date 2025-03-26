/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Include .jsx, .ts, .tsx
  theme: {
    extend: {
      fontSize : {
        'course-deatails-heading-small' : ['26px','36px'],
        'course-deatails-heading-large' : ['36px','44px'],
        'home-heading-small' : ['28px','34px'],
        'home-heading-large' : ['45px','54px'],
        'default': ['15px','21px']
      },
      gridTemplateColumns:{
        'auto' : 'repeat(auto-fit, minmax(200px, 1fr))'
      }
    },
  },
  plugins: [],
};
