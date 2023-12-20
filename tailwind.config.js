/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bgBlack: "#212325",
        lightBlue: "#9CDAF1",
        lightRed: "#F4CBB2",
        lightGrey: "#ABABAB",
        grey: "#2E3136",
      },
      fontFamily: {
        primary: "Inter",
        secondary: "Itim",
      },
      screens: {
        xxl: "1751px",
        mmd: "851px",
        gsm: "571px",
        msm: "491px",
        vsm: "441px",
        vvsm: "351px",
      },
    },
  },
  plugins: [],
};
