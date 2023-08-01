import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setProduct,
  addToCart,
  setSwipeProduct,
  setIsLoading,
} from "../../store/productSlice";
import Spinner from "../Spinner";
import ProductCategories from "./ProductCategories";

function ProductList() {
  //การแปลงค่า redux ให้กลายเป็นตัวแปรใน Components
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.data);
  const isLoading = useSelector((state) => state.product.isLoading);

  const fetchAPI = () => {
    dispatch(setIsLoading(true));
    axios.get("https://fakestoreapi.com/products").then(async (res) => {
      dispatch(setProduct(res.data));
      dispatch(setSwipeProduct(res.data));

      await new Promise((r) => setTimeout(r, 500));
      dispatch(setIsLoading(false));
    });
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const card = {
    cardImage: {
      height: "18rem",
    },
    cardText: {
      fontSize: "12px",
    },
    cardNumber: {
      fontSize: "13px",
      color: "#ee4d2d",
    },
    cardButton: {
      color: "#ee4d2d",
      top: "0",
    },
  };
  return (
    <div className="container">
      <ProductCategories />
      <div className="row row-gap-3">
        {isLoading ? (
          <div className="col-12 text-center">
            <Spinner />
          </div>
        ) : (
          products.map((product) => (
            <div
              className="d-flex col-md-3 col-sm-6 justify-content-center"
              key={product.id}
            >
              <div className="card">
                <img
                  src={product.image}
                  className="card-img-top img-fluid p-5"
                  alt="..."
                  style={card.cardImage}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-semibold">{product.title}</h5>
                  <div className="fw-medium" style={card.cardNumber}>
                    Ratings : {product.rating.rate}
                  </div>
                  <div className="mb-2 fw-medium" style={card.cardNumber}>
                    Price : ${product.price}
                  </div>
                  <div>
                    <p
                      className="mb-2 card-text fw-light"
                      style={card.cardText}
                    >
                      {product.description}
                    </p>
                  </div>

                  <button
                    type="button"
                    className="btn btn-light btn-outline-warning w-100 mt-auto"
                    style={card.cardButton}
                    onClick={() => dispatch(addToCart(product))}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ProductList;
