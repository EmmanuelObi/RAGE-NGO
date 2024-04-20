/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        white:
          "url(https://img.freepik.com/premium-vector/abstract-white-background-design-template-minimal-background-with-dot-white-line-3d-style_594699-131.jpg)",
      },
    },
  },
  plugins: [require("daisyui")],
};
