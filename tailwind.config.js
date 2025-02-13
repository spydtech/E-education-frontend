module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        anton: ["Anton", "sans-serif"], // Example font family
        lora: ["Lora", "serif"], // Example font family
        'poppins': ['Poppins']
      },
      animation: {
        "spin-slow": "spin 5s linear infinite", // Adjust the duration (5s) to control the speed
      },
      keyframes: {
        spin: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
      },
    },
    colors: {
      // Customize your themes
      "theme-light": "#f5f5f5",
      "theme-dark": "#333",
      "theme-gradient1": "radial-gradient(circle, red, yellow)",
      "theme-gradient2": "radial-gradient(circle, blue, green)",
      "theme-gradient3": "radial-gradient(circle, purple, pink)",
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
