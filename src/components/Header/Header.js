import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";
const onButtonClick = () => {
  const pdfUrl = "Curriculum Vitae.pdf";
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "Curriculum-Vitae-Ridhows.pdf"; // specify the filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
const Header = ({ toggle }) => {
  return (
    <div className="Container" style={{ padding: 0 }}>
      <Nav>
        <Logo to="/">
          <img
            src="logo.png"
            alt="logo"
          />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects">
            Projects
          </NavLink>
          <NavLink className="menu-item" to="about">
            About
          </NavLink>
          <NavLink className="menu-item" to="contact">
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <button className="btn PrimaryBtn" onClick={onButtonClick}>
            Resume
          </button>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
