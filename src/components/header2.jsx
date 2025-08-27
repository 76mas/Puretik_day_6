import "../App.css";
import figmaicon from "../assets/figma.svg";
import mas from "../assets/mas.svg";
import box from "../assets/box.svg";
import xd from "../assets/xd.svg";
import ps from "../assets/ps.svg";

import Container from "./container";

const Header2 = () => {
  return (
    <>
      <div className="header2">
        <Container>
          <div className="content">
            <div className="buttons">
              <div>Latest</div>
              <div>Popular</div>
            </div>

            <div className="nav2">
              <div>
                <p>All</p>
              </div>
              <div>Web</div>
              <div>Mobile</div>
              <div>UI Kit</div>
              <div>Coded</div>
            </div>

            <div className="logos">
              <img src={figmaicon} alt="figma" />
              <img src={mas} alt="mas" />
              <img src={box} alt="box" />
              <img src={xd} alt="xs" />
              <img src={ps} alt="ps" />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header2;
