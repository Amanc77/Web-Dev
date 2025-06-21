import React from "react";
import Card from "./Card";

function Cards() {
  const products = [
    {
      id: 1,
      title: "Basic Tee",
      price: "$31",
      image:
        "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
      color: "Black",
    },
    {
      id: 2,
      title: "White Tee",
      price: "$35",
      image:
        "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg",
      color: "White",
    },
    {
      id: 3,
      title: "Premium Hoodie",
      price: "$60",
      image:
        "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg",
      color: "Gray",
    },
    {
      id: 4,
      title: "Casual Shirt",
      price: "$45",
      image:
        "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg",
      color: "Blue",
    },
    {
      id: 5,
      title: "Basic Tee",
      price: "$31",
      image:
        "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
      color: "Black",
    },
    {
      id: 6,
      title: "White Tee",
      price: "$35",
      image:
        "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg",
      color: "White",
    },
    {
      id: 7,
      title: "Premium Hoodie",
      price: "$60",
      image:
        "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg",
      color: "Gray",
    },
    {
      id: 8,
      title: "Casual Shirt",
      price: "$45",
      image:
        "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg",
      color: "Blue",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
        {products.map((product, index) => (
          <Card
            key={product.id}
            id={product.id}
            product={product}
            count={index + 1}
          />
        ))}
      </div>
    </div>
  );
}

export default Cards;
