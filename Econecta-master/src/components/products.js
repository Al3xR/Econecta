import React, { Component } from "react";
import NoResults from "./NoResults";
import LoadingProducts from "./loadingProducts";
import Product from "./product";
import PageBanner from "./pageBanner";
import { BigBtnBlack, BigBtnColor2 } from "./btns";

class Products extends Component {
  constructor(props) {
    super(props);
  }
  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    let productsData;
    let term = this.props.searchTerm;
    let x;

    function searchingFor(term) {
      return function (x) {
        return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
      };
    }
    productsData = this.props.productsList
      .filter(searchingFor(term))
      .map((product) => {
        return (
          <Product
            key={product.url}
            price={product.price}
            name={product.name}
            name={product.name}
            description={product.description}
            image={"http://mirestaurante.website:8000" + product.images_urls}
            id={product.url}
            description={product.description}
            addToCart={this.props.addToCart}
            productQuantity={this.props.productQuantity}
            updateQuantity={this.props.updateQuantity}
          />
        );
      });
    // Empty and Loading States
    let view;
    if (productsData.length <= 0 && !term) {
      view = <LoadingProducts />;
    } else if (productsData.length <= 0 && term) {
      view = <NoResults />;
    } else {
      view = productsData;
    }

    //
    return (
      <div className="generalHolder products">
        <PageBanner title="Nuestro Menú" />
        <div className="section1 container backColorGray padBottom40">
          <div className="content layout-row layout-wrap layout-align-start-center">
            <div className="search widthFull layout-column layout-align-center-center padTop40 padBottom10">
              <form action="#" method="get">
                <input
                  type="search"
                  placeholder="Busca el producto que quieras."
                  className="search-keyword"
                  onChange={this.props.handleSearch}
                />
              </form>
            </div>

            {view}
          </div>
        </div>
      </div>
      //end general holder
    );
  }
}

export default Products;
