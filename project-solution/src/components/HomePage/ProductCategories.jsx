import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setProduct } from "../../store/productSlice";

function ProductCategories() {
  const [categories, setCategories] = useState([]);
  const [categorySelected, setCategorySelected] = useState();

  const dispatch = useDispatch();

  const fetchAPI = () => {
    axios.get("https://fakestoreapi.com/products/categories").then((res) => {
      setCategories(res.data);
    });
  };

  const select = (category) => {
    setCategorySelected(category);
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => {
        dispatch(setProduct(res.data));
      });
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div className="d-flex flex-column my-4">
      <div className="bg-light mt-0">
        <div className="bg-white">
          <h4>Categories</h4>
          <div className="d-flex gap-4">
            {categories.map((category) => (
              <div className="d-flex align-items-center" key={category}>
                <button
                  type="button"
                  className={`btn ${
                    categorySelected == category
                      ? "btn-dark btn"
                      : "btn-outline-dark btn"
                  }`}
                  onClick={() => select(category)}
                  // style={showCart.newButton}
                >
                  {category}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCategories;
