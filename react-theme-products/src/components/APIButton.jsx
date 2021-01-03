import React from "react";
import { ThemeContext } from "../context/ThemeContext";

function APIButton(props) {
  const themeContextAPI = React.useContext(ThemeContext);
  const { toggleTheme } = themeContextAPI;

  return (
    <button className="btn btn-secondary m-3" onClick={toggleTheme}>
       change theme
    </button>
  );
}

export default  APIButton;