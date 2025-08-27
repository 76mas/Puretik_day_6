import "../App.css";
import logo from "../assets/logo.svg";
import Container from "./container";

const Header = () => {
  return (
    <>
      <header>
        <Container>
          <div className="content">
            <div className="logo">
              <img src={logo} alt="no img" />
            </div>

            <div className="nav">
              <div>Free designs</div>
              <div>License</div>
              <div>Articles</div>
              <div>Contributors</div>
              <div>About</div>
            </div>

            <div className="auth">
              <div>Log in</div>
              <div>Sign Up</div>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
