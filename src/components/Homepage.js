import React from "react";
import AnimatedText from "react-animated-text-content";

import homaPage2 from "../images/home_page2.jpg";
import video1 from "../video/home_page1.mp4";

function Homepage() {
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
            Tervetuloa miekkailemaan!
          </AnimatedText>
        </div>
      </div>
      <video
        autoPlay
        loop
        muted
        className="video-fluid img-thumbnail"
        style={{ height: "50%", width: "130%" }}
      >
        <source src={video1} type="video/mp4" />
      </video>

      <br />
      <br />
      <p className="text-center padding3">
        Miekkailuseuramme on aloittanut toimintansa Turussa vuoden 2016 alussa.
        Seuraamme voi liittyä niin lapset kuin aikuisetkin. Järjestämme joka
        vuoden Tammikuussa sekä Syyskuussa kalvan, floretin ja säilän
        alkeiskursseja. Olet lämpimästi tervetullut toimintaamme mukaan!
      </p>
      <br />
      <p className="text-center padding4">
        Lorem ipsum dolor sit amet, proin consectetuer feugiat ornare eleifend
        ex libero et, erat suspendisse faucibus voluptate. Elit ante platea
        metus, habitant est ligula, egestas nam, mauris adipiscing iaculis, mi
        bibendum enim curabitur vestibulum faucibus. Felis porttitor aliquet vel
        felis ar.te urna, quia eu et phasellus diam, laoreet curabitur
        parturient at massa ultricies, maecenas turpis in sed. Nec eget mauris
        urna cras mauris, gravida tellus ultrices et, sem vitae commodo urna,
        natoque ac amet fusce neque pulvinar ipsum. Pellentesque adipiscing mi
        placerat in urna, nulla et, vitae vulputate sit pellentesque dolor vitae
        rhoncus, nunc lectus sit vulputate lectus sollicitudin, nibh vulputate
        vel morbi sodales in. Mauris eros done felis sit curabitur ut, libero
        egestas. Eget mauris tincidunt nunc faucihus
      </p>
      <br />
      <img
        src={homaPage2}
        alt="kaksi miekkailijaa"
        className="img-fluid img-thumbnail"
        style={{ maxWidth: "100%", minWidth: "100%" }}
      ></img>

      <h4 className="text-center padding3">AJANKOHTAISIA ASIOITA:</h4>
      <br />
      <p className="text-center">
        Tästä osiosta löytyy kaikki seuramme ajankohtaiset asiat. Pöivitämme
        samat asiat myös Facebookissa sekä Instagrammissa. Linkit Facebookiin
        sekä Instagramiin löytyvät alhaalta.
      </p>
      <p className="text-center">
        Lorem ipsum dolor sit amet, proin consectetuer, feugiat ornare eleifend
        ex libero et, erat suspendisse faucibus voluptate. Elit ante platea
        metus, habitant est ligula, egestas nam, mauris adipiscing iaculis, mi
        bibendum enim curabitur vestibulum faucibus. Felis porttitor aliquet vel
        felis ante urna, quia eu et phasellus diam, laoreet curabitur parturient
        at masa ultricies maecenas turpis in sed. Nec eget mauris urna cras
        mauris, gravida tellus ultrices et, sem vitae commodo urna, natoque ac
        amet fusce neque pulvinar ipsum. Pellentesque adipiscing mi placerat in
        urna, nulla et, vitae vulputate sit pellentesque dolor vitae rhoncus,
        nunc lectus sit vulputate lectus solicitudin, nibh vulputate vel morbi
        sodales in. Mauris eros donec felis sit curabitur ut, libero egestas.
        Eget mauris tincidunt nunc faucibus
      </p>
    </div>
  );
}

export default Homepage;
