import React, { useState } from "react";

const Task3 = () => {
  const [product, setProduct] = useState({
    name: "Laptop",
    price: 45000,
    stock: 10
  });

  // Update Price
  const updatePrice = () => {
    setProduct({
      ...product,
      price: 50000
    });
  };

  // Add Brand
  const addBrand = () => {
    setProduct({
      ...product,
      brand: "Dell"
    });
  };

  return (
    <div className="py-8 bg-blue-100 flex flex-col justify-center items-center gap-5 min-h-[420px] rounded-xl">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center text-black mb-2">
        PRODUCT DETAILS
      </h1>

      {/* Card */}
      <div className="bg-white w-80 p-6 rounded-2xl shadow-lg flex flex-col items-center gap-5">
        {/* Product Details */}
        <div className="flex flex-col gap-2.5 text-center">
          <h2 className="text-xl font-bold text-gray-700">
            Name: {product.name}
          </h2>

          <h2 className="text-xl font-bold text-gray-700">
            Price: ₹{product.price}
          </h2>

          <h2 className="text-xl font-bold text-gray-700">
            Stock: {product.stock}
          </h2>

          {product.brand && (
            <h2 className="text-xl font-bold text-emerald-600">
              Brand: {product.brand}
            </h2>
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 justify-center items-center">
          <button
            onClick={updatePrice}
            className="bg-green-500 text-white py-2 px-3.5 rounded-lg font-semibold hover:bg-green-600 transition-all cursor-pointer shadow-xs active:scale-95"
          >
            UPDATE PRICE
          </button>

          <button
            onClick={addBrand}
            className="bg-blue-500 text-white py-2 px-3.5 rounded-lg font-semibold hover:bg-blue-600 transition-all cursor-pointer shadow-xs active:scale-95"
          >
            ADD BRAND
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task3;
