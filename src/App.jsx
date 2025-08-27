import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import card1 from "./assets/1card.svg";
import card2 from "./assets/2card.svg";
import card3 from "./assets/3card.svg";
import Card from "./components/card";
import Container from "./components/container";
import "./App.css";
import Header from "./components/header";
import Header2 from "./components/header2";

function App() {
  return (
    <>
      <div className="app">
        <Header />

        <div className="hero">
          <Container>
            <div className="hero-body">
              <div className="day">
                <p>Day 1384</p>
              </div>

              <div className="hero-text">
                <h1>Free UI resources for everyone</h1>
                <p>
                  The largest database of 100% free UI components and designs
                  available in the formats popular by UI designers.
                </p>

                <div className="serchinput-body">
                  <div className="inputs">
                    <div className="select-input">
                      <select>
                        <option>Free designs</option>
                      </select>
                    </div>
                    <div className="serch-input">
                      <CiSearch className="search-icon" />
                      <input placeholder="Search" type="text" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>

        <div className="content-body">
          <Header2 />
          <Container>
            <div className="cards-content">
              <Card img={card1} />
              <Card img={card2} />
              <Card img={card3} />
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default App;
