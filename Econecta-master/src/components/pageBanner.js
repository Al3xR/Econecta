import React from "react";
import { BigBtnBlack, BigBtnColor2 } from "./btns";

const PageBanner = (props) => {
  return (
    <div className="pageBanner container backColor3">
      <div className="content heightFull layout-column layout-align-center-center">
        <div className="titleHolder">
          <h2 className="textCenter textUpper fontSizeXBig colorWhite">
            {props.title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
