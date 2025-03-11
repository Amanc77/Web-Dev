import React, { useState, useEffect } from "react";
import Axios from "axios";
import Nav from "../Components/Nav";

function App() {
  const [products, setProducts] = useState([]);

  const apiKey = "https://fakestoreapi.com/products";

  const getProducts = () => {
    Axios.get(apiKey)
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-600">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
