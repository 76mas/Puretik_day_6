import { useState } from "react";
import "../App.css";
import logo from "../assets/logo.svg";
import Container from "./container";
import { SlMenu } from "react-icons/sl";
const Header = () => {
  const [active, setActive] = useState("free");
  return (
    <>
      <header>
        <Container>
          <div className="content">
            <div className="logo">
              <img src={logo} alt="no img" />
            </div>

            <div className="nav">
              <div
                onClick={() => {
                  setActive("free");
                }}
                className={active === "free" ? "active3" : ""}
              >
                Free designs
              </div>
              <div
                onClick={() => {
                  setActive("License");
                }}
                className={active === "License" ? "active3" : ""}
              >
                License
              </div>
              <div
                onClick={() => {
                  setActive("Articles");
                }}
                className={active === "Articles" ? "active3" : ""}
              >
                Articles
              </div>
              <div
                onClick={() => {
                  setActive("Contributors");
                }}
                className={active === "Contributors" ? "active3" : ""}
              >
                Contributors
              </div>
              <div
                onClick={() => {
                  setActive("About");
                }}
                className={active === "About" ? "active3" : ""}
              >
                About
              </div>
            </div>

            <div className="auth">
              <div>Log in</div>
              <div>Sign Up</div>
            </div>

            <div className="burger-menu">
              <SlMenu />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
