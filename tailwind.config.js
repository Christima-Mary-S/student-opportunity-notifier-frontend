module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        "black-dark": "#0B0C10",
        "black-light": "#1F2833",
        "black-comp": "#1d252e",
        "gray-dark": "#C5C6C7",
        "cyan-light": "	#1DA1F2",
        "cyan-dark": "#45A295",
      },
      backgroundImage: {
        heroimg:
          "linear-gradient(to right bottom, rgba(0.0,0.0,0.0,0.6), rgba(0.0,0.0,0.0,0.6)), url(/src/components/bg-img.jpg)",
        scaledown: "object-fit: scale-down",
      },
    },
  },
  plugins: [],
};
