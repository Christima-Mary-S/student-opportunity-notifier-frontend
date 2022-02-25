module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        "black-dark": "#0B0C10",
        "black-light": "#1F2833",
        "gray-dark": "#C5C6C7",
        "cyan-light": "#66FCF1",
        "cyan-dark": "#45A295",
      },
      backgroundImage: {
        heroimg:
          "linear-gradient(to right bottom, rgba(0.0,0.0,0.0,0.7), rgba(0.0,0.0,0.0,0.7)), url(/src/bg-img-3.jpg)",
        scaledown: "object-fit: scale-down",
      },
    },
  },
  plugins: [],
};
