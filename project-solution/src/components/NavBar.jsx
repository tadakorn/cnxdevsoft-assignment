import { useSelector } from "react-redux";
import { useMemo } from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const carts = useSelector((state) => state.product.cart);
  const cartCount = useMemo(() => {
    return carts.length;
  }, [carts]);

  const style = {
    navbar: {
      backgroundColor: "#f53d2d",
      height: "4rem",
    },
    navbarBrand: {
      color: "white",
    },
    cartContainer: {
      padding: "10px 0",
    },
    cartContainers: {
      margin: "0 0 0 5px",
      outline: "0",
      backgroundColor: "initial",
    },
    shopingCart: {
      fill: "currentColor",
      width: "26px",
      height: "26px",
      cursor: "pointer",
      color: "#fff",
      stroke: "#fff",
      fontSize: "1.0625rem",
      marginRight: "0.625rem",
    },
    showItemNumber: {
      top: "-0.6875rem",
      left: "-1.25rem",
      borderRadius: "2.75rem",
      minWidth: "0.6875rem",
      lineHeight: "1.2em",
      padding: "0 0 0.3125rem",
      height: "1.1rem",
      width: "1.5rem",
      border: ".125rem solid var(--brand-primary-color,#ee4d2d)",
      color: "var(--brand-primary-color,#ee4d2d)",
      backgroundColor: "#fff",
      marginRight: "-.875rem",
      fontSize: "11px",
    },
  };
  return (
    <>
      <nav className="navbar fixed-top" style={style.navbar}>
        <div className="container">
          <a className="navbar-brand" href="#" style={style.navbarBrand}>
            <img
              className="m-1"
              src={Logo}
              alt="Logo"
              width="32"
              height="32"
            ></img>
            <span>Ecommerce</span>
          </a>

          <div className="position-relative">
            <div className="d-block">
              <div style={style.cartContainer}>
                <a
                  href="#"
                  className="d-flex align-items-center position-relative overflow-visible text-decoration-none"
                  style={style.cartContainers}
                  data-bs-toggle="modal"
                  data-bs-target="#cartModal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    //   stroke-width="1.5"
                    stroke="currentColor"
                    className=" position-relative"
                    style={style.shopingCart}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                  <div
                    className="position-relative text-center "
                    style={style.showItemNumber}
                  >
                    {cartCount}
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
