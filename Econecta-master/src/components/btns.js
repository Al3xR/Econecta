import React from 'react';

export const BigBtnBlack = (props) => {
  return (
    <div className="bigBtn backColorBlack anim2">
       <a className="widthFull  heightFull layout-column layout-align-center-center" href={props.link}>
          <p className="color3 anim2 fontSizeMedium">{props.name}</p>
       </a>
    </div>
  );
};

export const BigBtnColor2 = (props) => {
  return (
    <div className="bigBtn backColor2 anim2">
       <a className="widthFull  heightFull layout-column layout-align-center-center" href={props.link}>
          <p className="colorBlack anim2 fontSizeMedium">{props.name}</p>
       </a>
    </div>
  );
};

