import React from 'react';

const Footer = () => {
  
  return (
    <div className="footer z3 container backColorBlack">
      <div className="content topRow layout-row layout-align-center-center layout-wrap">
        <div className="col col1 widthThird layout-row layout-align-center-center">
            <img className="size20" src="https://freesvg.org/img/Gerald-G-Fast-Food-Lunch-Dinner-FF-Menu-7.png" />
            <p className="colorWhite padLeft20">Tu Negocio</p>
        </div>
        <div className="col col2 widthThird layout-row layout-align-center-center">
            <img className="size20" src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2016/png/iconmonstr-whatsapp-1.png&r=77&g=255&b=0" />
            <p className="colorWhite padLeft20">(998) 260 7763</p>
        </div>
        <div className="col col3 widthThird layout-row layout-align-center-center">
            <img className="size20" src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2013/png/iconmonstr-smiley-2.png&r=255&g=255&b=255" />
            <p className="colorWhite padLeft20">#CONSUME_LOCAL</p>
        </div>
      </div>
      <div className="content bottomRow layout-column layout-align-center-center">
           <p className="textCenter colorWhite">Tu negocio ©</p>
      </div>
    </div>

  );
};

export default Footer;