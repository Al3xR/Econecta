import React from "react";
import { BigBtnBlack, BigBtnColor2 } from "./btns";
import Video from "./video";
import { HomeSection, InfoSection } from "./homeSection";
import PageBanner from "./pageBanner";

const video = require("../assets/video/backup_beer.mp4");

const AboutUs = () => {
  return (
    <div className="generalHolder aboutUs">
      <PageBanner title="Nosotros" />

      <InfoSection
        text1="Una empesa 100% mexicana hecha para todos los mexicanos que quieren crear, generar y promover la consciencia ecológica"
        text2=""
      />

      <HomeSection
        title="Una variedad Increíble de productos"
        text="Productos totalmente innovadores y llamativos hechos con excelentes procesos de reciclaje que garantizan productos de calidad"
      />

      <div className="section2 container ">
        <Video video={video} text="¡VENDE TU BASURA!" />
      </div>
    </div>
    //end general holder
  );
};

export default AboutUs;
