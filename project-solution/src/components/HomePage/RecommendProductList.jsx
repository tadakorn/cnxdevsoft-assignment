import ProductList from "../HomePage/ProductList";
function RecommendProductList() {
  const products = {
    productContainer: {
      boxShadow: "0 1px 1px 0 rgba(0,0,0,.05)",
    },
    productTitle: {
      padding: "0.9375rem 2.875rem",
      flex: "0 0 auto",
      height: "3.75rem",
      fontSize: "1rem",
      fontWeight: "500",
      color: "#ee4d2d",
      boxSizing: "border-box",
      userSelect: "none",
    },
    productTitles: {
      height: "0.25rem",
      backgroundColor: "#ee4d2d",
      transition: "opacity .3s",
      bottom: "0",
      left: "0",
    },
    productTitles1: {
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      color: "#ee4d2d",
    },
  };
  return (
    <div>
      <div className="d-flex " style={products.productContainer}>
        <div
          className="position-relative w-100 d-flex align-items-center justify-content-center"
          style={products.productTitle}
        >
          <div
            className="position-absolute w-100"
            style={products.productTitles}
          ></div>

          <div
            className="overflow-hidden d-flex position-relative text-uppercase align-items-center"
            style={products.productTitles1}
          >
            <span>PRODUCT All</span>
          </div>
        </div>
      </div>
      <div className="bg-light mt-0"></div>
      <ProductList />
    </div>
  );
}

export default RecommendProductList;
