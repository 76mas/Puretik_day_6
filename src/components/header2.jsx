import "../App.css";
import figmaicon from "../assets/figma.svg";
import mas from "../assets/mas.svg";
import box from "../assets/box.svg";
import xd from "../assets/xd.svg";
import ps from "../assets/ps.svg";
import { useState } from "react";
import Container from "./container";

const Header2 = () => {
  const [active, setActive] = useState("all");
  const [active1, setActive1] = useState("Latest");

  const [active2, setActive2] = useState("mas");
  return (
    <>
      <div className="header2">
        <Container>
          <div className="content">

            
            <div className="buttons">
              <div
                onClick={() => {
                  setActive1("Latest");
                }}
                className={active1 === "Latest" ? "active1" : ""}
              >
                Latest
              </div>
              <div
                onClick={() => {
                  setActive1("Popular");
                }}
                className={active1 === "Popular" ? "active1" : ""}
              >
                Popular
              </div>
            </div>

            <div className="nav2">
              <div
                onClick={() => {
                  setActive("all");
                }}
                className={active === "all" ? "active" : ""}
              >
                <p>All</p>
              </div>
              <div
                onClick={() => {
                  setActive("web");
                }}
                className={active === "web" ? "active" : ""}
              >
                <p>Web</p>
              </div>
              <div
                onClick={() => {
                  setActive("mobile");
                }}
                className={active === "mobile" ? "active" : ""}
              >
                <p>Mobile</p>
              </div>
              <div
                onClick={() => {
                  setActive("ui");
                }}
                className={active === "ui" ? "active" : ""}
              >
                <p>UI Kit</p>
              </div>
              <div
                onClick={() => {
                  setActive("code");
                }}
                className={active === "code" ? "active" : ""}
              >
                <p>Coded</p>
              </div>
            </div>

            <div className="logos">
              <div
                onClick={() => {
                  setActive2("figma");
                }}
                className={active2 === "figma" ? "active2" : ""}
              >
                <img src={figmaicon} alt="figma" />
              </div>
              <div
                onClick={() => {
                  setActive2("mas");
                }}
                className={active2 === "mas" ? "active2" : ""}
              >
                <img src={mas} alt="mas" />
              </div>

              <div
                onClick={() => {
                  setActive2("box");
                }}
                className={active2 === "box" ? "active2" : ""}
              >
                {" "}
                <img src={box} alt="box" />
              </div>
              <div
                onClick={() => {
                  setActive2("xd");
                }}
                className={active2 === "xd" ? "active2" : ""}
              >
                {" "}
                <img src={xd} alt="xs" />
              </div>

              <div
                onClick={() => {
                  setActive2("ps");
                }}
                className={active2 === "ps" ? "active2" : ""}
              >
                <img src={ps} alt="ps" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header2;
