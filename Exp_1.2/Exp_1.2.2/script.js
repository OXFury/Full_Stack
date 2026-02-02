const { useState } = React;

function App() {
    const [sortType, setSortType] = useState("default");

    const products = [
        { id: 1, name: "Smartphone", price: 14999 },
        { id: 2, name: "Headphones", price: 1999 },
        { id: 3, name: "Laptop", price: 55999 },
        { id: 4, name: "Shoes", price: 2999 },
        { id: 5, name: "Watch", price: 4999 },
        { id: 6, name: "Backpack", price: 1299 }
    ];

    const sortedProducts = [...products].sort((a, b) => {
        if (sortType === "low") return a.price - b.price;
        if (sortType === "high") return b.price - a.price;
        return 0;
    });

    return (
        <div>
            <select onChange={(e) => setSortType(e.target.value)}>
                <option value="default">Sort By</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
            </select>

            <div className="products">
                {sortedProducts.map(product => (
                    <div className="card" key={product.id}>
                        <h3>{product.name}</h3>
                        <p className="price">₹{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
