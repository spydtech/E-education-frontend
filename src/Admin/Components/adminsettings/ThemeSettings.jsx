import React, { useState, useEffect } from "react";

const ThemeSettings = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const themes = [
    {
      name: "Grey Light",
      value: "grey-light",
      colorClass: "bg-[#494949] text-white",
    },
    { name: "Teal", value: "teal", colorClass: "bg-[#007b7f] text-white" },
    { name: "Orange", value: "orange", colorClass: "bg-[#cc5500] text-white" },
    { name: "Purple", value: "purple", colorClass: "bg-[#752d5c] text-white" },
    {
      name: "Dark Blue",
      value: "dark-blue",
      colorClass: "bg-[#0451bd] text-white",
    },
    {
      name: "Charcoal",
      value: "charcoal",
      colorClass: "bg-[#2e2e2e] text-white",
    }, // Darker Grey
    { name: "Aqua", value: "aqua", colorClass: "bg-[#00a6a6] text-white" }, // Lighter Teal
    {
      name: "Deep Red",
      value: "deep-red",
      colorClass: "bg-[#a32638] text-white",
    }, // Darker Orange-Red
  ];

  // Update theme in localStorage when the theme state changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className =
      themes.find((t) => t.value === theme)?.colorClass || "";
  }, [theme]);

  return (
    <div className="bg-[#000000] h-[500px] bg-opacity-20 p-6 flex items-center justify-center rounded-lg  shadow-md text-white">
      <div className="grid xl:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 mt-4">
        {themes.map((t) => (
          <button
            key={t.value}
            onClick={() => setTheme(t.value)}
            className={`w-20 h-20  xl:w-40 xl:h-40 rounded-full ${
              t.colorClass
            } ${
              theme === t.value
                ? "border-4 border-white"
                : "border-2 border-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSettings;
