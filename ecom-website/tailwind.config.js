/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-image": "url('/src/assets/images/bg-img/07.jpg')",
        "custom-image1": "url('/src/assets/images/bg-img/map.png')",
        "custom-image2": "url('/src/assets/images/bg-img/bg.jpg')",
      },
      backgroundSize: {
        150: "122%",
        200: "70%",
      },
    },
  },
  plugins: [],
};
