import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Menu from "./components/menu";
import MenuMobile from "./components/menuMobile";
import Footer from "./components/footer";
import Home from "./components/home";
import Products from "./components/products";
import AboutUs from "./components/aboutUs";
import Contact from "./components/contact";
import Checkout from "./components/checkout";

import "./App.css";

const whatsIcon = require("./assets/images/icons/whatsapp.png");

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      cart: [],
      totalItems: 0,
      totalAmount: 0,
      term: "",
      category: "",
      cartBounce: false,
      quantity: 1,
      quickViewProduct: {},
      modalActive: false,
    };

    this.socket = new WebSocket("ws://mirestaurante.website:8000/ws/connect/");

    this.handleSearch = this.handleSearch.bind(this);
    this.handleMobileSearch = this.handleMobileSearch.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.sumTotalItems = this.sumTotalItems.bind(this);
    this.sumTotalAmount = this.sumTotalAmount.bind(this);
    this.checkProduct = this.checkProduct.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.handleRemoveProduct = this.handleRemoveProduct.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  // Fetch Initial Set of Products from external API
  getProducts() {
    axios
      .get("http://mirestaurante.website:8000/api/dishes")
      .then((response) => {
        console.log(response.data);
        this.setState({
          products: response.data,
        });
      });

    let url =
      "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json";
    axios.get(url).then((response) => {
      // console.log(response.data);
    });
  }
  componentWillMount() {
    this.getProducts();
    let temp = JSON.parse(localStorage.getItem("cartLocal"));
    if (temp != null && temp.length > 0) {
      this.state.cart = JSON.parse(localStorage.getItem("cartLocal"));
      this.sumTotalItems(this.state.cart);
      this.sumTotalAmount(this.state.cart);
    }
  }

  componentDidMount() {
    this.socket.onopen = function (event) {
      console.log("conectado");
    };
  }
  // Search by Keyword
  handleSearch(event) {
    this.setState({ term: event.target.value });
  }
  // Mobile Search Reset
  handleMobileSearch() {
    this.setState({ term: "" });
  }
  // Filter by Category
  handleCategory(event) {
    this.setState({ category: event.target.value });
    // console.log(this.state.category);
  }
  // Add to Cart
  handleAddToCart(selectedProducts) {
    let cartItem = this.state.cart;
    let productID = selectedProducts.id;
    let productQty = selectedProducts.quantity;
    if (this.checkProduct(productID)) {
      // console.log("hi");
      let index = cartItem.findIndex((x) => x.id == productID);
      cartItem[index].quantity =
        Number(cartItem[index].quantity) + Number(productQty);
      this.setState({
        cart: cartItem,
      });
    } else {
      cartItem.push(selectedProducts);
    }
    this.setState({
      cart: cartItem,
      cartBounce: true,
    });
    setTimeout(
      function () {
        this.setState({
          cartBounce: false,
          quantity: 1,
        });
        // console.log(this.state.quantity);
        // console.log(this.state.cart);
      }.bind(this),
      1000
    );
    this.sumTotalItems(this.state.cart);
    this.sumTotalAmount(this.state.cart);
  }
  handleRemoveProduct(id, e) {
    let cart = this.state.cart;
    let index = cart.findIndex((x) => x.id == id);
    cart.splice(index, 1);
    this.setState({
      cart: cart,
    });
    this.sumTotalItems(this.state.cart);
    this.sumTotalAmount(this.state.cart);

    e.preventDefault();
  }
  checkProduct(productID) {
    let cart = this.state.cart;
    return cart.some(function (item) {
      return item.id === productID;
    });
  }
  sumTotalItems() {
    let total = 0;
    let cart = this.state.cart;
    total = cart.length;
    this.setState({
      totalItems: total,
    });
  }
  sumTotalAmount() {
    let total = 0;
    let cart = this.state.cart;
    for (var i = 0; i < cart.length; i++) {
      total += cart[i].price * parseInt(cart[i].quantity);
    }
    this.setState({
      totalAmount: total,
    });
  }

  //Reset Quantity
  updateQuantity(qty) {
    // console.log("quantity added...");
    this.setState({
      quantity: qty,
    });
  }
  // Open Modal
  openModal(product) {
    this.setState({
      quickViewProduct: product,
      modalActive: true,
    });
  }
  // Close Modal
  closeModal() {
    this.setState({
      modalActive: false,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="whatsApp alignLeftPad z4">
          <a
            className="widthFull size40 heightFull layout-column layout-align-center-center"
            href="https://api.whatsapp.com/send?phone=5219983228470&text=Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n,%20por%20favor."
          >
            <img className="size40" src={whatsIcon} />
          </a>
        </div>

        <MenuMobile />
        <Menu
          cartBounce={this.state.cartBounce}
          total={this.state.totalAmount}
          totalItems={this.state.totalItems}
          cartItems={this.state.cart}
          removeProduct={this.handleRemoveProduct}
          handleSearch={this.handleSearch}
          handleMobileSearch={this.handleMobileSearch}
          handleCategory={this.handleCategory}
          categoryTerm={this.state.category}
          updateQuantity={this.updateQuantity}
          productQuantity={this.state.moq}
        />
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/productos">
              <Products
                productsList={this.state.products}
                searchTerm={this.state.term}
                addToCart={this.handleAddToCart}
                productQuantity={this.state.quantity}
                updateQuantity={this.updateQuantity}
                openModal={this.openModal}
                handleSearch={this.handleSearch}
                handleMobileSearch={this.handleMobileSearch}
              />
            </Route>
            <Route path="/nosotros">
              <AboutUs />
            </Route>
            <Route path="/contacto">
              <Contact />
            </Route>
            <Route path="/checkout">
              <Checkout
                removeProduct={this.handleRemoveProduct}
                cartItems={this.state.cart}
              />
            </Route>
            <Route path="/*">
              <Home />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}
export default App;
