import React, { Component } from "react";
import Card from "./Card";
import Detail from "./Detail";
import ProductList from "./ProductList";
import { connect } from "react-redux";
class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-success text-center mt-3">Bài tập giỏ hàng</h1>
        <h4
          className="text-danger text-right"
          data-toggle="modal"
          data-target="#gioHangModal"
        >
          Giỏ hàng ()
        </h4>
        <Card />
        <ProductList />
       {this.props.selectedProduct != null ? <Detail />: ''} 
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    selectedProduct: state.product.selectedProduct,
  };
};

export default connect(mapStateToProps)(Home);
