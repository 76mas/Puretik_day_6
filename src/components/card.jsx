import "../App.css";
import { FaHandsPraying } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import avatar from "../assets/avatar.png";
const Card = ({ img }) => {
  return (
    <>
      <div className="card">
        <div className="card-img">
          <img src={img} alt="img" />
        </div>
        <div className="card-footer">
          <div className="avatar">
            <img src={avatar} alt="avatar" />
            <div className="avatar-name">
              {" "}
              by <span>Jenny Molla</span>
            </div>
          </div>
          <div className="card-footer-icons">
            <div className="code-icon">
              <FaCode /> <span>25</span>
            </div>

            <div className="hands-icon">
              <FaHandsPraying />
              <span>25</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
