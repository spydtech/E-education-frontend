module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // anton: ["Anton", "sans-serif"],
        // lora: ["Lora", "serif"],
        poppins: ["Poppins"],
        'poppins-bold': ["Poppins-Bold"],
        'poppins-medium': ["Poppins-Medium"],
        'poppins-semibold': ["Poppins-SemiBold"],
        'poppins-light': ["Poppins-Light"],
        'poppins-thin': ["Poppins-Thin"],
        // Lusitana: ["Lusitana"],
        // 'Lusitana-bold': ["Lusitana-Bold"],
        // ✅ Add Lucida Calligraphy
        // 'lucida-calligraphy': ["Lucida Calligraphy", "cursive"],
      
        // ✅ Add this line
        // lucida: ["Lucida Sans", "sans-serif"],
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
