import React, { Component, PureComponent } from "react";
import { connect } from "react-redux";
import { createAction } from "../store/action";
class Card extends PureComponent {
  handleDecreaseProduct = (id) => {
    this.props.dispatch(createAction("DECREASE_PRODUCT", id));
  };
  handleIncreaseProduct = (id) => {
    this.props.dispatch(createAction("INCREASE_PRODUCT", id));
  };
  handleDeleteProduct = (id) => {
    this.props.dispatch(createAction("DELETE_PRODUCT", id));
  };
  renderProductInCard = () => {
    return this.props.products.map((item) => {
      const { id, name, price, img } = item.product;
      return (
        <tr key={id}>
          <td style={{ width: "12.15%" }}>{id}</td>
          <td style={{ width: "12.15%" }}>
            <img className="w-25" src={img} alt={`Hình ảnh ${name}`} />
          </td>
          <td style={{ width: "12.15%" }}>{name}</td>
          <td style={{ width: "12.15%" }}>
            <button
              onClick={() => this.handleDecreaseProduct(id)}
              style={{ width: 40 }}
              className="btn btn-success mx-2"
            >
              -
            </button>
            <span>
              {item.quantity < 10 ? `0${item.quantity}` : item.quantity}
            </span>
            <button
              onClick={() => this.handleIncreaseProduct(id)}
              style={{ width: 40 }}
              className="btn btn-success mx-2"
            >
              +
            </button>
          </td>
          <td style={{ width: "12.15%" }}>{`${price} $`}</td>
          <td style={{ width: "12.15%" }}>{`${price * item.quantity} $`}</td>
          <td style={{ width: "12.15%" }}>
            <button
              onClick={() => this.handleDeleteProduct(id)}
              className="btn btn-danger"
            >
              Xoá
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div
        className="modal fade"
        id="gioHangModal"
        tabIndex={-1}
        aria-labelledby="gioHangModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="gioHangModalLabel">
                Giỏ hàng
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table text-center">
                <thead>
                  <tr>
                    <th>Mã sản phẩm </th>
                    <th>Hình ảnh</th>
                    <th>Tên sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>{this.renderProductInCard()}</tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProp = (state) => {
  return {
    products: state.product.card,
  };
};
export default connect(mapStateToProp)(Card);
