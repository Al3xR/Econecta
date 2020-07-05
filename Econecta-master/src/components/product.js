import React, { Component } from "react";
import Counter from "./counter";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdded: false,
      selectedProduct: {},
      quantityCounter: 1,
    };
  }
  addToCart(image, name, price, id, quantity, description) {
    let tempInput = document.getElementById("counter" + id);
    quantity = parseInt(tempInput.value);

    this.setState(
      {
        selectedProduct: {
          image: image,
          name: name,
          price: price,
          id: id,
          quantity: quantity,
          description: description,
        },
      },
      function () {
        this.props.addToCart(this.state.selectedProduct);
      }
    );
    this.setState(
      {
        isAdded: true,
      },
      function () {
        setTimeout(() => {
          this.setState({
            isAdded: false,
          });
          document.getElementById("counter" + id).value = "1";
        }, 1000);
      }
    );
  }

  render() {
    let image = this.props.image;
    let name = this.props.name;
    let price = this.props.price;
    let id = this.props.id;
    let description = this.props.description;
    let quantity = this.state.quantityCounter;
    return (
      <div className="product backColorWhite anim2 relative">
        <div className="product-image">
          <img
            className="widthFull"
            src={this.props.image}
            alt={this.props.name}
          />
        </div>
        <h4 className="product-name textCenter">{this.props.name}</h4>
        <div className="descriptionContainer">
          <p className="product-price textCenter">{this.props.description}</p>

          <p className="product-price textCenter">
            <b>${this.props.price}</b>
          </p>
        </div>
        <div className="alignBottom agregarHolder">
          <Counter
            productQuantity={quantity}
            updateQuantity={this.props.updateQuantity}
            inputId={id}
          />
          <div className="product-action backColorWhite">
            <button
              className={!this.state.isAdded ? "" : "added"}
              type="button"
              onClick={this.addToCart.bind(
                this,
                image,
                name,
                price,
                id,
                quantity
              )}
            >
              {!this.state.isAdded ? "AGREGAR" : "✔ LISTO"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
