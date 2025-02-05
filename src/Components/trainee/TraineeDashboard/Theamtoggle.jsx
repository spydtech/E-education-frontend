import React, { useEffect, useState } from "react";
function Themetoggle() {
  const [theme, setTheme] = useState("light");

  const themes = [
    {
      name: "grey-light",
      value: "grey-light",
      colorClass: "bg-gradient-to-b from-[#FFFFFF] to-[#FFFFFF] text-[#000000]",
    },
    {
      name: "Light",
      value: "light",
      colorClass: "bg-[#6096ba] text-[#ffffff]",
    },
    {
      name: "Liner Blue",
      value: "liner-blue",
      colorClass: "bg-[#8338ec] text-[#ffffff]",
    },
    {
      name: "Linear",
      value: "linear",
      colorClass:
        "bg-gradient-to-b from-[#40E0D0] via-[#FF8C00] to-[#FF0080]  text-[#ffffff]",
    },
    {
      name: "Green",
      value: "green",
      colorClass:
        "bg-gradient-to-b from-[#70e000]  to-[#001510]  text-[#ffffff]",
    },
    {
      name: "Red",
      value: "red",
      colorClass:
        "bg-gradient-to-b from-[#007adf] to-[#00ecbc]  text-[#ffffff]",
    },
    {
      name: "Linear",
      value: "linear-blue",
      colorClass: "bg-[#fa5505]  text-[#ffffff]",
    },
  ];

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme); // Update state
    localStorage.setItem("theme", newTheme); // Persist theme to localStorage

    // Find the selected theme
    const selectedTheme = themes.find((t) => t.value === newTheme);
    if (selectedTheme) {
      document.body.className = selectedTheme.colorClass; // Apply the theme dynamically
    }
  };

  return (
    <>
      <div className=" p-6 ">
        <h2 className="text-lg font-semibold">Theme Settings</h2>
        <div className="space-y-4 mt-4">
          <div className="flex justify-between gap-4">
            {themes.map((themeOption) => (
              <button
                key={themeOption.value}
                onClick={() => handleThemeChange(themeOption.value)}
                className={`w-20 h-20 rounded-lg transition-all duration-300 ${
                  theme === themeOption.value
                    ? "border-4 border-blue-500"
                    : "border-2 border-gray-300"
                } ${themeOption.colorClass}`}
              >
                {themeOption.name}
              </button>
            ))}
          </div>
          <button
            className="w-full bg-[#204349] text-white py-2 rounded-lg"
            onClick={() => alert(`Current theme: ${theme}`)}
          >
            Apply Theme
          </button>
        </div>
      </div>
    </>
  );
}

export default Themetoggle;
