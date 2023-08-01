import "./App.css";
import Navbar from "./components/NavBar";
import HomePage from "./views/HomePage";
import CartModal from "./components/HomePage/CartModal";

function App() {
  return (
    <>
      <div className="app">
        <header>
          <Navbar />
        </header>
        <main>
          <HomePage />
        </main>
        <CartModal />
      </div>
    </>
  );
}

export default App;
