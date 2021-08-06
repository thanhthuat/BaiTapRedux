import React, { Component } from "react";
import ProductItem from "./ProductItem";
import { connect } from "react-redux";

class ProductList extends Component {
  renderProducts = () => {
    return this.props.products.map((item) => {
      return <ProductItem key={item.id} product={item} />;
    });
  };
  render() {
    return <div className="row">{this.renderProducts()}</div>;
  }
}
const mapStatetoProps = (state) => {
  return {
    products: state.product.products,
  };
};
export default connect(mapStatetoProps)(ProductList);
