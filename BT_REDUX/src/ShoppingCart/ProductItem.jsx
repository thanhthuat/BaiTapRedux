import React, { Component } from "react";
import { connect } from "react-redux";
import { createAction } from "../store/action";

class ProductItem extends Component {
  handleSelectProduct = (product) => {
    this.props.dispatch(createAction("SELECTED_PRODUCT", product));
  };
  handleAddProductToCard = (product) => {
    this.props.dispatch(createAction("ADD_PRODUCT_TO_CARD", product));
  };
  render() {
    const { name, img } = this.props.product;
    return (
      <div className="col-3">
        <div className="card-body border border-muted">
          <img
            src={img}
            style={{ height: 200 }}
            className="card-img-top"
            alt={`Hình ảnh ${name}`}
          />
          <h5 className="card-title">{name}</h5>
          <button
            className="btn btn-success mr-1"
            onClick={() => this.handleSelectProduct(this.props.product)}
          >
            Chi tiết
          </button>
          <button
            onClick={() => this.handleAddProductToCard(this.props.product)}
            className="btn btn-primary"
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(ProductItem);
