import React, { Component } from "react";
import Counter from "./counter";
import EmptyCart from "./EmptyCart";
import { findDOMNode } from "react-dom";

const menuImg = require("../assets/images/icons/lnr-menu.svg");
const cartImg = require("../assets/images/icons/lnr-cart.svg");
const crossImg = require("../assets/images/icons/lnr-cross.svg");
const logo = require("../assets/images/icons/logo.jpg");

class Menu extends Component {
  openMenu = () => {
    document.getElementById("menuMobile").style.right = "0px";
    document.getElementById("ham").style.display = "none";
    document.getElementById("cross").style.display = "flex";
    this.closeCart();
  };
  closeMenu = () => {
    document.getElementById("menuMobile").style.right = "-5000px";
    document.getElementById("ham").style.display = "flex";
    document.getElementById("cross").style.display = "none";
  };

  openCart = () => {
    document.getElementById("cartMenu").classList.add("open");
    document.getElementById("closeCart").style.display = "initial";
    document.getElementById("openCart").style.display = "none";

    this.closeMenu();
  };
  closeCart = () => {
    document.getElementById("cartMenu").classList.remove("open");
    document.getElementById("closeCart").style.display = "none";
    document.getElementById("openCart").style.display = "initial";
  };

  constructor(props) {
    super(props);
    this.state = {
      showCart: false,
      cart: this.props.cartItems,
      mobileSearch: false,
    };
  }
  handleCart(e) {
    e.preventDefault();
    this.setState({
      showCart: !this.state.showCart,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  handleMobileSearch(e) {
    e.preventDefault();
    this.setState({
      mobileSearch: true,
    });
  }
  handleSearchNav(e) {
    e.preventDefault();
    this.setState(
      {
        mobileSearch: false,
      },
      function () {
        this.refs.searchBox.value = "";
        this.props.handleMobileSearch();
      }
    );
  }
  componentDidMount() {}

  render() {
    let cartItems;
    cartItems = this.state.cart.map((product) => {
      return (
        <div className="cart-item layout-row widthFull" key={product.name}>
          <img className="product-image" src={product.image} />
          <div className="product-info">
            <p className="product-name fontSizeSmall">{product.name}</p>
            <p className="product-price fontSizeXSmall">$ {product.price}</p>
          </div>
          <div className="product-total">
            <p className="quantity fontSizeSmall textRight">
              {product.quantity} {product.quantity > 1 ? "Nos." : "No."}{" "}
            </p>
            <p className="amount fontSizeXSmall textRight">
              $ {product.quantity * product.price}
            </p>
          </div>
          <a
            className="product-remove layout-column layout-align-center-center"
            href="#"
            onClick={this.props.removeProduct.bind(this, product.id)}
          >
            <p className="color1">×</p>
          </a>
        </div>
      );
    });

    let view;
    if (cartItems.length <= 0) {
      view = <EmptyCart />;
    } else {
      view = cartItems;
    }
    let temp1 = JSON.stringify(this.state.cart);
    localStorage.setItem("cartLocal", temp1);
    console.log("updated");
    return (
      <div className="menu zMax container">
        <div className="topRow fullContent backColorBlack layout-column layout-align-center-center">
          <p className="colorWhite textCenter fontSizeMedium textUpper">
            El primer MarketPlace enfocado en mejorar la calidad de vida de
            México{" "}
          </p>
        </div>
        <div className="bottomRow backColorWhite fullContent relative">
          <div className="titleHolder heightFull layout-column layout-align-center-start">
            <img src={logo} width="80" height="50" />
          </div>
          <div className="optionsHolder marginAuto alignCenter heightFull layout-row layout-align-space-between-center">
            <a href="/">
              <p className="option color1 fontSizeMedium">Inicio</p>
            </a>
            <a href="/productos">
              <p className="option color1 fontSizeMedium">Catálogo</p>
            </a>
            <a href="/nosotros">
              <p className="option color1 fontSizeMedium">Nosotros</p>
            </a>
            <a href="/contacto">
              <p className="option color1 fontSizeMedium">Contacto</p>
            </a>
          </div>

          <div className="iconsHolder alignRightPad alignTop alignBottom heightFull marginAuto layout-row layout-align-space-between-center">
            <a onClick={this.openCart} className="cart relative" id="openCart">
              <img src={cartImg} className="size30" />
              <p className="cartCount alignTop alignRight">
                {this.props.totalItems}
              </p>
            </a>
            <a
              onClick={this.closeCart}
              className="cart relative"
              id="closeCart"
            >
              <img src={cartImg} className="size30" />
              <p className="cartCount alignTop alignRight">
                {this.props.totalItems}
              </p>
            </a>
            <div className="menuControl">
              <a id="ham" className="ham" onClick={this.openMenu}>
                <img src={menuImg} className="size40" />
              </a>
              <a id="cross" className="cross" onClick={this.closeMenu}>
                <img src={crossImg} className="size40" />
              </a>
            </div>
          </div>
        </div>

        <div
          className="cartMenu alignRightPad backColorWhite anim2"
          id="cartMenu"
        >
          <div className="scrollHolder scroll scrollBlack">{view}</div>
          <div className="action-block widthFull layout-column layout-align-start-center">
            <button
              type="button"
              className={this.state.cart.length > 0 ? " " : "disabled"}
            >
              <a
                href="/checkout"
                className="alignCenter heightFull widthFull z1"
              ></a>
              PAGAR <strong>${this.props.total}</strong>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
