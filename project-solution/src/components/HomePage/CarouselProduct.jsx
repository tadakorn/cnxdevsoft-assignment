import { useSelector } from "react-redux";
import Spinner from "../Spinner";

function CarouselProduct() {
  // redux
  const swipeDatas = useSelector((state) => state.product.swipeData);
  const isLoading = useSelector((state) => state.product.isLoading);

  const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };
  const cardChunks = chunkArray(swipeDatas, 4);

  const style = {
    cardImage: {
      height: "18rem",
    },
    carouselControl: {
      backgroundColor: "#e1e1e1",
      width: "6vh",
      height: "6vh",
      borderRadius: "50%",
      top: "50%",
      transform: "translateY(-50%)",
    },
  };
  return (
    <div className="container py-4">
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <Spinner />
        </div>
      ) : (
        <div id="carouselProduct" className="carousel slide">
          <div className="carousel-inner">
            {cardChunks.map((chunk, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <div className="row justify-content-center">
                  {chunk.map((card, cardIndex) => (
                    <div key={cardIndex} className="col-3">
                      <div className="text-center">
                        <img
                          src={card.image}
                          className="img-fluid"
                          alt="..."
                          style={style.cardImage}
                        ></img>
                      </div>
                      <div className="mt-4 text-center">${card.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselProduct"
            data-bs-slide="prev"
            style={style.carouselControl}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselProduct"
            data-bs-slide="next"
            style={style.carouselControl}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default CarouselProduct;
