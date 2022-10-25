module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      backgroundImage: {
        bgSpeakers: "url('../public/img/bg/bgSpeakers.jpg')",
      },
    },
  },
  plugins: [],
};
