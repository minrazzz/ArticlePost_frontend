import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [theme, setTheme] = useState(
    localStorage.getItem("mernTheme") ?? "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("mernTheme", theme);
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="navbar  bg-yellow-300 py-2 grid grid-cols-2 shadow-md rounded-md dark:bg-[#1E283A] darK:border border-b-2 dark:border-white">
      <div className="logo">
        <Link className="font-lilita text-2xl px-3 dark:text-white" to="/home">
          Articles
        </Link>
      </div>
      <div className="links flex justify-end flex gap-x-4 items-center px-2">
        <Link
          className="hover:font-bold hover:transition-all dark:text-white"
          to="/signup"
        >
          Signup
        </Link>
        <Link
          className="hover:font-bold hover:transition-all dark:text-white"
          to="/login"
        >
          Login
        </Link>
        <div className="icons">
          {theme === "dark" ? (
            <div
              className="icon cursor-pointer dark:text-white"
              onClick={handleTheme}
            >
              <i className="fa-solid fa-sun"></i>
            </div>
          ) : (
            <div className="icon cursor-pointer on" onClick={handleTheme}>
              <i className="fa-solid fa-moon"></i>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
