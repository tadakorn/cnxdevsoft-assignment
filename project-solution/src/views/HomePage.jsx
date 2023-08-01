import CarouselProduct from "../components/HomePage/CarouselProduct";
import RecommendProductList from "../components/HomePage/RecommendProductList";

function HomePage() {
  const style = {
    marginTop: "4rem",
  };
  return (
    <div style={style}>
      <CarouselProduct />
      <RecommendProductList />
    </div>
  );
}

export default HomePage;
