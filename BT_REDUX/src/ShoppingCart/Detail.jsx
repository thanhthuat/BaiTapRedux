import React, { Component } from "react";
import { connect } from "react-redux";
class Detail extends Component {
  render() {
    const { name, img, screen, backCamera, frontCamera, desc } =
      this.props.selectedProduct;
    return (
      <div className="row my-3">
        <div className="col-5">
          <h5>{name ? name : "Tên sản phẩm"}</h5>
          <img
            className="w-75"
            src={img}
            alt={`Hình ảnh ${name ? name : ""}`}
          ></img>
        </div>
        <div className="col-7">
          <h5>Thông tin chi tiết</h5>
          <table className="table">
            <tbody>
              <tr>
                <td className="w-25">Màn hình</td>
                <td className="w-75">{screen}</td>
              </tr>
              <tr>
                <td className="w-25">Camera trước</td>
                <td className="w-75">{frontCamera}</td>
              </tr>
              <tr>
                <td className="w-25">Camera sau</td>
                <td className="w-75">{backCamera}</td>
              </tr>
              <tr>
                <td className="w-25">Mô tả</td>
                <td className="w-75">{desc}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    selectedProduct: state.product.selectedProduct,
  };
};
export default connect(mapStateToProps)(Detail);
