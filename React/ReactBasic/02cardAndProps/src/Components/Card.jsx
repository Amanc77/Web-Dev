import React from "react";

function Card({ product, count, id }) {
  if (!product) return null;

  return (
    <div className=" w-[260px] h-[360px]   m-5 bg-white text-gray-900 rounded-lg shadow-md overflow-hidden   transition hover:shadow-lg">
      <div className="w-full h-64 bg-cover object-cover">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:opacity-90"
        />
      </div>

      <div className="p-4 bg-gray-500">
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="text-sm text-gray-500">{product.color}</p>

        <div className="mt-3 flex justify-between items-center">
          <span className="text-xl font-bold">{product.price}</span>
          <span className="text-sm text-gray-600">#{id}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
