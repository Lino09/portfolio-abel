/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bit: {
          purple: "#8854f3",
          sky: "#639bff",
          green: "#63ffba",
          orange: "#ff8c5c",
          pink: "#ff79ae",
          yellow: "#fff982",
          blue: "#000871",
        },
      },
      boxShadow: {
        primary: "inset -5px -5px 0 #4f7ccc",
        "primary-active": "inset 5px 5px 0 #4f7ccc",
        secondary: "inset -5px -5px 0 #4fcc95",
        "secondary-active": "inset 5px 5px 0 #4fcc95",
        danger: "inset -5px -5px 0 #cc704a",
        "danger-active": "inset 5px 5px 0 #cc704a",
        ghost: "inset -5px -5px 0 #b9b9b9",
        "ghost-active": "inset 5px 5px 0 #b9b9b9",
      },
      cursor: {
        fancy: 'url("../public/cursor.png"), auto',
        pointer: 'url("../public/cursor-pointer.png"), pointer',
      },
    },
  },
  plugins: [],
};
