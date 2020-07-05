import React from "react";
import { BigBtnColor2 } from "./btns";

export const HomeSection = (props) => {
  return (
    <div className="homeSection normal container ">
      <div className="fullContent contentNoPad layout-row layout-wrap">
        <div className="widthHalf col col1 backCenter backCover"></div>
        <div className="widthHalf backColorWhite col col2 layout-column layout-align-center-center padLeft40 padRight40">
          <h2 className="fontSizeXXBig color1 textCenter textUpper">
            {props.title}
          </h2>
          <p className="fontSizeMedium padTop40 padBottom60 textCenter">
            {props.text}
          </p>

          <BigBtnColor2 name="¡VER PRODUCTOS!" link="/productos" />
        </div>
      </div>
    </div>
  );
};

export const InfoSection = (props) => {
  return (
    <div className="homeSection inverted container ">
      <div className="fullContent contentNoPad layout-row layout-wrap">
        <div className="widthHalf col col1 mobile backCenter backCover"></div>

        <div className="widthHalf backColorWhite col col2 layout-column layout-align-center-center padLeft40 padRight40">
          <p className="fontSizeMedium padTop40 padBottom10 textJustify">
            {props.text1}
          </p>
          <p className="fontSizeMedium padTop10 padBottom60 textJustify">
            {props.text2}
          </p>
        </div>
        <div className="widthHalf col col1 normal backCenter backCover"></div>
      </div>
    </div>
  );
};

export default HomeSection;
