import React, { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button onClick={toggleTheme} style={{
      background: "none",
      border: "none",
      padding: "0",
      // borderRadius: "5px",
      cursor: "pointer",
      fontWeight: "bold"
    }}>
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export default DarkModeToggle;
