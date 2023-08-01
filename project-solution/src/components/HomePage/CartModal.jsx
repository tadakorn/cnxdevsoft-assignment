import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCartByOne,
  removeFromCart,
  checkout,
} from "../../store/productSlice";

function CartModal() {
  //การแปลงค่า redux ให้กลายเป็นตัวแปรใน Components
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.product.cart);

  const totalPrice = useMemo(() => {
    let sum = 0;
    carts.forEach((item) => {
      sum += item.price * item.count;
    });
    return sum.toFixed(2);
  }, [carts]);

  const style = {
    modalImage: {
      height: "4rem",
      width: "4rem",
    },
    titlePrice: {
      fontSize: "16px",
      fontWeight: "700",
      color: "#888",
    },
    quantityButton: {
      width: "32px",
      height: "32px",
      border: "1px solid rgba(0,0,0,.09)",
      transition: "background-color .1s cubic-bezier(.4,0,.6,1)",
      lineHeight: "1",
      letterSpacing: "0",
      fontSize: ".875rem",
      fontWeight: "300",
      outline: "none",
    },
    quantityIcon: {
      fontSize: "10px",
      width: "10px",
      height: " 10px",
      fill: "currentColor",
    },
    quantityInput: {
      width: "50px",
      height: "32px",
      fontSize: "16px",
      fontWeight: "400",
      boxSizing: "border-box",
      borderRadius: "0",
      outline: "none",
      border: "1px solid rgba(0,0,0,.09)",
    },
  };
  return (
    <div
      className="modal fade"
      id="cartModal"
      tabIndex="-1"
      aria-labelledby="cartModalLabel"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-scrollable modal-xl"
        style={style.modals}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="cartModalLabel">
              Shopping Cart
            </h1>
          </div>

          <div className="modal-body">
            <table className="table table-borderless ">
              <thead>
                <tr>
                  <th className="fw-normal">Product</th>
                  <th></th>
                  <th style={style.titlePrice} className="text-center fw-light">
                    Unit Price
                  </th>
                  <th style={style.titlePrice} className="text-center fw-light">
                    Quantity
                  </th>
                  <th style={style.titlePrice} className="text-center fw-light">
                    Total Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {carts.map((cart) => (
                  <tr key={cart.id} className="align-middle">
                    <td>
                      <img src={cart.image} style={style.modalImage} />
                    </td>
                    <td className="fw-normal">{cart.title}</td>
                    <td className="text-center fw-normal">${cart.price}</td>
                    <td>
                      <div className="d-flex flex-column align-items-center justify-content-center ">
                        <div className="d-flex align-items-center text-black">
                          <button
                            type="button"
                            className="d-flex align-items-center justify-content-center bg-transparent"
                            style={style.quantityButton}
                            onClick={() => dispatch(removeFromCartByOne(cart))}
                          >
                            <svg
                              enableBackground="new 0 0 10 10"
                              viewBox="0 0 10 10"
                              x="0"
                              y="0"
                              className="overflow-hidden d-inline-block position-relative flex-shrink-0 bg-transparent"
                              style={style.quantityIcon}
                            >
                              <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"></polygon>
                            </svg>
                          </button>

                          <div
                            className="d-flex align-items-center justify-content-center bg-transparent"
                            style={style.quantityInput}
                          >
                            {cart.count}
                          </div>
                          <button
                            type="button"
                            className="d-flex align-items-center justify-content-center bg-transparent"
                            style={style.quantityButton}
                            onClick={() => dispatch(addToCart(cart))}
                          >
                            <svg
                              enableBackground="new 0 0 10 10"
                              viewBox="0 0 10 10"
                              x="0"
                              y="0"
                              className="overflow-hidden d-inline-block position-relative flex-shrink-0 bg-transparent"
                              style={style.quantityIcon}
                            >
                              <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"></polygon>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </td>
                    <td style={style.totalPrice} className="text-center">
                      ${(cart.price * cart.count).toFixed(2)}
                    </td>
                    <td>
                      <div className="d-flex flex-column align-items-center justify-content-center ">
                        <button
                          type="button"
                          className="d-flex align-items-center justify-content-center bg-transparent "
                          style={style.quantityButton}
                          onClick={() => dispatch(removeFromCart(cart))}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>

                    {/* <td>
                    <div>index : {i}</div>
                    <pre>{JSON.stringify(cart, null, 2)}</pre>
                  </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="modal-footer justify-content-between">
            <button
              type="button"
              className="btn btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <div className="d-flex align-items-center gap-2">
              <div>Total Price : ${totalPrice}</div>
              <button
                type="button"
                className={`btn btn-success ${
                  carts.length == 0 ? "disabled" : ""
                }`}
                data-bs-dismiss="modal"
                onClick={() => dispatch(checkout())}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
