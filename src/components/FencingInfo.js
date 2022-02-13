import React from "react";
import fencingInfoPage from "../images/fensinginfo_page.jpg";
import AnimatedText from "react-animated-text-content";

function FencingInfo() {
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
            Miekkailun historia
          </AnimatedText>
        </div>
      </div>
      <div className="container">
        <img
          src={fencingInfoPage}
          alt="miekkailija"
          className="img-fluid img-thumbnail"
          style={{
            maxWidth: "100%",
            minWidth: "100%",
          }}
        ></img>
        <div className="centered1">
          <p>
            Miekkailu on vanha taistelulaji. Miekkailun kaltainen laji on
            löydetty jo Ramses Ill:n ajalta. Tuolloin kilpailijoiden aseina
            toimi keppi. Osa kilpailijoista käytti myös maskia kasvojen suojana.
          </p>
          <p>
            Lorem ipsum dolor sit amet, proin consectetuer, feugiat ornare
            eleitend ex libero et, erat suspendisse faucibus voluptate. Elit
            ante platea metus, habitant est ligula, egesta: nam, mauris
            adipiscing laculis, mi bibendum enim curabitul vestibulum faucibus.
            Felis porttitor aliquet vel felis ante urna, quia eu et phasellus
            diam. laoreet curabitur parturient at massa ultricies, maecenas
            turpis in sed. Nec eget mauris urna cras mauris, aravida tellus
            ultrices et. sem vitae commodo urna, natoque ac amet fusce neque
            pulvinal ipsum. Pellentesque adipiscing mi placerat in urna, nulla
            et, vitae vulputate sit pellentesque dolor vitae rhoncus.
          </p>

          <p>
            Consequat mauris felis nulla pharetra neque. Dui lorem allquet
            volutpat non, elit in dictumst elit, sed loborti: conque, feugiat in
            enim malesuada. Done dictum, ultrice: aenean tempor gravida class
            orci sit. Suscipit done, eu quam Tringilla eu quis, elit saplen
            consequat. semper facilisis proin turpis dapibus tellus. Risus eget,
            pulvinar tortor. Cum id magna, faucibus venenatis sed mauris
            tincidunt viverra rhoncus, ultrices in est ullamcorper orci, sodales
            enim. Fermentum in wisi pharetra nam viverra turois. ac fermentum
            hell entesque auque sushendisse sit luctus. Ouis auam nibh arcu cras
            metus sed. lacus vel nis felis aenean, convallis purus ut. Et porta,
            sit ipsum, ut non. Cursus eget mollis lacinia metus ornare, orci
            lorem vestibulum sapien justo vitae, pellentesque metus enim ligula
            turpis volutpat, ipsum id tellus morbi a. Vel nullam dictum er teus
            dadious. ne lacus scelersu conu est dolor diam, non enim quis sea
            deleniti
          </p>
        </div>
      </div>

      <div className="text-center padding6 padding2">
        <p>
          Lorem ipsum dolor sit amet, proin consectetuer, feugiat ornare
          eleltend ex ibero et. erat suspendisse taucious voluptate, Elit ante
          olatea metus. habitant est lau a egestas nam, mauris adipiscing
          iaculis. . mi bibendum enir curabltur vestibu um taucibus. relis
          porttitor allquet ve tels ante urna, Guld eu et phasellus diam,
          laoreet curabitul parturient at massa ultricies, maecenas turpis ir
          Ised. Ner eget mauris urna cras mauris, gravida tellus ultrices et sem
          vitae commodo urna, natoque ac amet tusce neque pulvinar ipsum.
          Pellentesque adipiscing mi placerat in urna, nulla et, vitae vulputate
          sit pellentesque dolor vitat rhoncus. nunc lectus sit vulnutate lectus
          sollicituain. nior vulputate vel morbi sodales in. Mauris eros done
          felis sit curabitur ut, Ilbero egestas.
        </p>
        <p>
          tget mauris tincidunt nunc TaUCIOuS conseduat mauris tells nula
          onaretra neaue. Dure aliquet vol utoat non. eit in dictumst elit. sed
          lobortis conque, teugiat in enim malesuada. Donec dictum, ultrice!
          aenean tempor gravida class orci sit. Suscipit donec, el quam
          fringilla eu quis, elit sapien consequat. Semper facilisis proin
          turpis dapibus tellus. Risus get, pulvinar tortor. Cum id magna.
          faucibus venenatis sed mauris tincidunt viverra rhoncus, ultrices in
          est ullamcorper orc
        </p>
      </div>

      <br />
    </div>
  );
}

export default FencingInfo;
