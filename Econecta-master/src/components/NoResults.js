import React, { Component } from "react";

const NoResults = () => {
  return (

    <div className="no-results layout-column layout-align-center-center widthFull">
      <img
        src="https://res.cloudinary.com/sivadass/image/upload/v1494699523/icons/bare-tree.png"
        alt="Empty Tree"
      />
      <h2>No se encontro ningun producto</h2>
      <p>Pruebe una palabra diferente.</p>
    </div>
  );
};

export default NoResults;
