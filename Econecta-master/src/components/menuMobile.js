import React from 'react';


const MenuMobile = () => {
  
 
  
  return (
    <div className="menuSmall z5 heightFullvh backColorBlack anim2" id="menuMobile">
        <div className="optionsHolder alignRightPad layout-column layout-align-start-center">
          <a href="/"><p className="option colorWhite fontSizeMedium textRight">Inicio</p></a>
          <a href="/productos"><p className="option colorWhite fontSizeMedium textRight">Nuestro Menú</p></a>
          <a href="/nosotros"><p className="option colorWhite fontSizeMedium textRight">Nosotros</p></a>
          <a href="/contacto"><p className="option colorWhite fontSizeMedium textRight">Contacto</p></a>
        </div>
    </div>

  );
};

export default MenuMobile;