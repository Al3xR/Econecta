import React from "react";
import { BigBtnBlack, BigBtnColor2 } from "./btns";
import Video from "./video";
import HomeSection from "./homeSection";

const video = require("../assets/video/backup_video.mp4");

const Home = () => {
  return (
    <div className="generalHolder home">
      <div className="section1 container containerScreenLimit backCenter">
        <div className="shadow widthFull heightFull z1 alignCenter"></div>

        <div className="content alignCenter marginAuto z2 layout-column layout-align-start-center">
          <div className="titleHolder padTop80">
            <h2 className="textCenter textUpper fontSizeXXXBig color2">
              Genera ingresos a través del reciclaje de tus reciduos!
            </h2>
          </div>

          <div className="btnHolder layout-column layout-align-center-center alignBottomPad marginAuto alignLeftPad alignRightPad">
            <BigBtnBlack name="¡VER CATÁLOGO!" />
          </div>
        </div>
      </div>

      <HomeSection
        title="Una variedad Increíble de productos"
        text="Productos 100% reciclados y recolectados que son parte de tu comunidad"
      />

      <div className="section2 container ">
        <Video video={video} text="¡VENDE TU BASURA!" />
      </div>
    </div>
    //end general holder
  );
};

export default Home;
