import React from "react";
import { BigBtnBlack, BigBtnColor2 } from "./btns";
import PageBanner from "./pageBanner";
import EmptyCart from "./EmptyCart";

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: this.props.cartItems,
    };
  }

  render() {
    let cartItems;
    console.log(this.state.cart);
    cartItems = this.state.cart.map((product) => {
      return (
        <div
          className="checkout-item layout-row layout-wrap widthFull"
          key={product.name}
        >
          <div className="col product-image layout-column layout-align-center-start">
            <img src={product.image}></img>
          </div>
          <div className="col product-name layout-column layout-align-center-start">
            <p className="textLeft">{product.name}</p>
          </div>

          <div className="col product-quantity product-quantityMobile layout-column layout-align-center-start">
            <p className="textLeft">
              {product.quantity} {product.quantity > 1 ? "Nos." : "No."}{" "}
            </p>
          </div>

          <div className="col product-price layout-column layout-align-center-start">
            <p className="textLeft">$ {product.price}</p>
          </div>

          <div className="col product-quantity product-quantityNormal layout-column layout-align-center-start">
            <p className="textLeft">
              {product.quantity} {product.quantity > 1 ? "Nos." : "No."}{" "}
            </p>
          </div>

          <div className="col product-amount layout-column layout-align-center-start">
            <p className="textLeft">$ {product.quantity * product.price}</p>
          </div>

          <div className="col product-remove layout-column layout-align-center-center">
            <a
              href="#"
              onClick={this.props.removeProduct.bind(this, product.id)}
            >
              <p className="color1 textRight">×</p>
            </a>
          </div>
        </div>
      );
    });

    let view;
    if (cartItems.length <= 0) {
      view = <EmptyCart />;
    } else {
      view = cartItems;
    }

    return (
      <div className="generalHolder checkout">
        <PageBanner title="Checkout" />

        <div className="section1 container backCenter padTop40 padBottom60">
          <div className="content backColorWhite padTop40 padBottom60">
            <div className="titlesRow layout-row widthFull padBottom20">
              <div className="mobileTitle widthFull">
                <p className="textCenter">Productos</p>
              </div>

              <div className="col product-image">
                <p className="textLeft"></p>
              </div>

              <div className="col product-name">
                <p className="textLeft">Nombre</p>
              </div>
              <div className="col product-price">
                <p className="textLeft">Precio</p>
              </div>

              <div className="col product-quantity">
                <p className="textLeft"> Cantidad </p>
              </div>

              <div className="col product-amount">
                <p className="textLeft">Subtotal</p>
              </div>

              <div className="col product-remove">
                <p className="textLeft"></p>
              </div>
            </div>
            {view}
          </div>
        </div>
      </div>
      //end general holder
    );
  }
}

export default Checkout;
