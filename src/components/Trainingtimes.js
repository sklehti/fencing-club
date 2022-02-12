import React from "react";
import trainingPage1 from "../images/trainingtimes_page1.jpg";
import trainingPage2 from "../images/trainingtimes_page2.jpg";
import trainingPage3 from "../images/trainingtimes_page3.jpg";
import AnimatedText from "react-animated-text-content";

function Trainingtimes() {
  return (
    <div>
      <div className="padding1">
        <div className="text-center">
          <AnimatedText
            type="words"
            animation={{
              x: "200px",
              y: "-20px",
              scale: 1.1,
              ease: "ease-in-out",
            }}
            animationType="float"
            interval={0.06}
            duration={0.8}
            tag="p"
            className="animated-paragraph padding2"
            includeWhiteSpaces
            threshold={0.1}
            rootMargin="20%"
            style={{ fontSize: "40px", fontFamily: "bold" }}
          >
            Harjoitteluajat
          </AnimatedText>
          {/* <h1 className="padding2">Harjoitteluajat</h1> */}
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-sm-6">
          <img
            src={trainingPage1}
            alt="miekkailija"
            className="nopadding img-fluid img-thumbnail"
            style={{
              maxWidth: "100%",
              minWidth: "100%",
            }}
          ></img>
        </div>
        <div className="col-sm-6">
          <img
            src={trainingPage2}
            alt="miekkailija"
            className="nopadding img-fluid img-thumbnail"
            style={{
              maxWidth: "100%",
              minWidth: "100%",
            }}
          ></img>
        </div>
      </div>

      <br />
      <br />
      <h5 className="text-center padding3 ">MAANANTAI</h5>
      <div className="text-center">16:00 - 17:30 LASTEN KALPAMIEKKAILU </div>
      <div className="text-center ">
        17:30 - 19:00 AIKUISTEN KALPAMIEKKAILU{" "}
      </div>
      <br />
      <h5 className="text-center">TIISTAI</h5>
      <div className="text-center">16:00 - 17:30 LASTEN KALPAMIEKKAILU </div>
      <div className="text-center">17:30 - 19:00 AIKUISTEN KALPAMIEKKAILU </div>
      <br />
      <h5 className="text-center">KESKIVIIKKO </h5>
      <div className="text-center">16:00 - 17:30 LASTEN KALPAMIEKKAILU </div>
      <div className="text-center">17:30 - 19:00 AIKUISTEN KALPAMIEKKAILU </div>
      <br />
      <h5 className="text-center">TORSTAI</h5>
      <div className="text-center">16:00 - 17:30 LASTEN KALPAMIEKKAILU </div>
      <div className="text-center">17:30 - 19:00 AIKUISTEN KALPAMIEKKAILU </div>
      <br />
      <h5 className="text-center">PERIANTAI</h5>
      <div className="text-center">16:00 - 17:30 LASTEN SÄILÀ MIEKKAILU </div>
      <div className="text-center">
        17:30 - 19:00 LASTEN KILPARYHMÀ (SÄILä){" "}
      </div>
      <br />
      <h5 className="text-center"> LAUANTAI </h5>
      <div className="text-center">10:00 - 11.30 AIKUISTEN SÄILÄMIEKKAILU</div>
      <br />
      <h5 className="text-center">SUNNUNTAI </h5>
      <div className="text-center padding2">
        10:00 - 11.30 AIKUISTEN SÄILÄMIEKKAILU
      </div>

      <div className="padding5">
        <img
          src={trainingPage3}
          alt="midekkailija ja maski"
          className="img-fluid img-thumbnail"
          style={{ maxWidth: "100%", minWidth: "100%" }}
        ></img>
      </div>
      <br />
    </div>
  );
}

export default Trainingtimes;
