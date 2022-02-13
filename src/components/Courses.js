import React from "react";
import coursesPage1 from "../images/courses_page1.jpg";
import coursesPage2 from "../images/courses_page2.jpg";
import AnimatedText from "react-animated-text-content";

function Courses() {
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
            Alkeiskurssit
          </AnimatedText>
        </div>
      </div>

      <img
        src={coursesPage1}
        alt="miekkailija"
        className="img-fluid img-thumbnail"
        style={{
          maxWidth: "100%",
          minWidth: "100%",
        }}
      ></img>
      <br />
      <br />
      <h4 className="text-center padding3">
        SEURAAVAT ALKEISKURSSIMME ALKAVAT SYKSYLLÄ 2022:
      </h4>
      <br />

      <p>
        Tervetuloa syksyn 2022 alkeiskursseille. Tämä alkeiskurssi on
        tarkoitettu kaikille yli 18 vuotiaille. Kurssikertoja on yhteensä 10.
        Hinta on kurssille 100 euroa ja tarvittavat varusteet löytyvät
        saliltamme.
      </p>
      <p>
        Phasellus eu augue ut dolor porta finibus. Nunc egestas malesuada
        maximus. Done vitae lacus at turpis tempor auctor in pellentesque eros.
        Donec sit amet nunc risus. Proin rutrum, lectus at pharetra cursus,
        nulla lorem lacinia augue vel maximus enim ipsum non massa.
      </p>
      <p className="text-center padding4">
        Quisque sit amet elit luctus, vestibulum ligula et, rhoncus urna.
        Vestibulum ut pellentesque magna. Maecenas lacinia placerat rutrum. Nunc
        consectetur viverra maximus
      </p>
      <div className="padding5">
        <img
          src={coursesPage2}
          alt="midekkailija ja maski"
          className="img-fluid img-thumbnail"
          style={{ maxWidth: "100%", minWidth: "100%" }}
        ></img>
      </div>
      <br />
    </div>
  );
}

export default Courses;
