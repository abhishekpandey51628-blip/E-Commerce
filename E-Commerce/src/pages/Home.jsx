import React, { useEffect, useState } from "react";
import "./home.css"
function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/product",{
      credentials:"include",
      method:"GET"
    })
      .then((res) => res.json())
      .then((data) => setProducts(data)) 
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div>
      <h1>All Products</h1>
      <div className="product-grid">
        {products.map((p) => (
          <div key={p._id} className="product-card">
            <img src={p.image} alt={p.name} width="150" />
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
            <p>{p.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
