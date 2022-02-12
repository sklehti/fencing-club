import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";
import homeicon from "../images/home_icon.png";
import arrowicon from "../images/arrow.png";
import Homepage from "./Homepage";
import FencingInfo from "./FencingInfo";
import Trainingtimes from "./Trainingtimes";
import Courses from "./Courses";
import ContactInfo from "./ContactInfo";

function PageView() {
  const [isOpen, setOpen] = useState(false);
  const [menuTitle, setMenuTitle] = useState("Valikko");

  const changeMenuBarTitle = () => {
    if (isOpen === false) {
      setMenuTitle("");
    } else {
      setTimeout(() => {
        setMenuTitle("Valikko");
      }, 400);
    }
  };

  return (
    <Router>
      <div className="size-padding">
        <div className="container-fluid my-4">
          <div className="row h-100">
            <div className="col-sm-12 bg-light">
              <div className="row bg-light align-items-center">
                <Link to="/">
                  <img
                    src={homeicon}
                    alt="home icon"
                    style={{ height: 40 }}
                    className="img-fluid"
                  ></img>
                </Link>

                <div className="logo-text">
                  <h2 id="start">Turun miekkailuklubi</h2>
                </div>
              </div>
              <div className="row bg-dark scroll">
                <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                  <div>
                    <button
                      className="navbar-toggler button-hover"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapsibleNavbar"
                      style={{ border: "none" }}
                      onClick={changeMenuBarTitle}
                    >
                      <span>
                        {" "}
                        <Hamburger
                          toggled={isOpen}
                          toggle={setOpen}
                          size={25}
                        />
                      </span>

                      {/* <span
                        className="navbar-toggler-icon"
                        style={{ fontSize: "1rem" }}
                      ></span>
                      <a href="#" className="nav-button">
                        Valikko
                      </a> */}
                    </button>

                    <div
                      className="collapse navbar-collapse"
                      id="collapsibleNavbar"
                    >
                      <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                          <a className="nav-link " href="/miekkailu-info">
                            Miekkailuinfo
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/harjoitteluajat">
                            Harjoitteluajat
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/alkeiskurssit">
                            Alkeiskurssit
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/yhteystiedot">
                            Yhteystiedot
                          </a>
                        </li>
                        {/* <Link style={padding} to="/miekkailu-info">
                            Miekkailu info
                          </Link>
                          <Link style={padding} to="/harjoitteluajat">
                            Harjoitteluajat
                          </Link>
                          <Link style={padding} to="/alkeiskurssit">
                            Alkeiskurssit
                          </Link>
                          <Link style={padding} to="/yhteystiedot">
                            Yhteystiedot
                          </Link> */}
                      </ul>
                    </div>
                  </div>
                  <div className="menu-style">{menuTitle}</div>
                </nav>
              </div>

              <div>
                <Routes>
                  <Route path="/yhteystiedot" element={<ContactInfo />} />
                  <Route path="/harjoitteluajat" element={<Trainingtimes />} />
                  <Route path="/alkeiskurssit" element={<Courses />} />
                  <Route path="/miekkailu-info" element={<FencingInfo />} />
                  <Route path="/" element={<Homepage />} />
                </Routes>
              </div>
              <div>
                <a href="#start" className="start-link">
                  <img
                    src={arrowicon}
                    alt="home icon"
                    style={{ height: 40 }}
                    className="img-fluid"
                  ></img>
                </a>
              </div>
              <br />
              <div
                className="row text-center align-items-center bg-dark "
                style={{ height: "40vh", backgroundColor: "darkgray" }}
              >
                <div className="col-sm-4 bg-dark ">
                  <div>
                    <h3 style={{ fontSize: 40, paddingTop: "5%" }}>
                      <a
                        href="https://fi-fi.facebook.com/"
                        target="_blank"
                        className="link-padding"
                      >
                        f
                      </a>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        className="link-padding"
                      >
                        in
                      </a>
                    </h3>
                  </div>
                </div>
                <div className="col-sm-4 bg-dark"></div>
                <div
                  className="col-sm-4 bg-dark"
                  style={{
                    paddingRight: "30px",
                    color: "#8c8f94",
                  }}
                >
                  <br />
                  <h5>Yhteystiedot:</h5>
                  <div>Kulmalantie 65</div>
                  <div>20100 Turku</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default PageView;
