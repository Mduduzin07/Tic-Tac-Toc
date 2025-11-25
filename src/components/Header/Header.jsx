import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { HeaderWrapper, LightModeIcon, DarkModeIcon } from "./Header.styled";
import { useNavigate } from "react-router-dom";
//import TicTacToeIcon from "../../assets/TicTacToeIcon.jsx";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <HeaderWrapper>
      <img
        onClick={() => navigate("/")}
        src="https://cdn-icons-png.flaticon.com/128/57/57180.png"
        className="w-16 h-14 mb-2 cursor-pointer"
        alt="logo"
      />
      {/* <button onClick={() => toggleTheme()}>Toggle Theme</button> */}
      <span className="cursor-pointer" onClick={() => toggleTheme()}>
        {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      </span>
    </HeaderWrapper>
  );
};

export default Header;
