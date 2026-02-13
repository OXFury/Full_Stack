import ProductCard from "./components/ProductCard.jsx";
import "./App.css";

function App() {
  return (
    <div className="app">
      <ProductCard
        name="Green Tea"
        price="₹199"
        image="https://via.placeholder.com/200"
        inStock={true}
      />

      <ProductCard
        name="Herbal Shampoo"
        price="₹349"
        image="https://via.placeholder.com/200"
        inStock={false}
      />
    </div>
  );
}

export default App;
