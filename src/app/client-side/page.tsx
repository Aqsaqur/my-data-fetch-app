
"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

//TYPE DEFINE.....
type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const ClientSide = () => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data: Product[]) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-black-100 to-black-300 flex items-center justify-center py-12 px-6 sm:px-8">
      <div className="w-full max-w-7xl bg-white rounded-xl shadow-xl overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center space-x-2 py-8">
            <FontAwesomeIcon icon={faLinkedin}  className="animate-spin text-4xl text-pink-800" />
            <span className="text-pink-800 text-xl">Loading...</span>
          </div>
        ) : (
          <div className="bg-gradient-to-r from-pink-300 via-pink-300 p-8 text-center rounded-t-lg">
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-wide">
              Client Side Data Fetching
            </h1>
          </div>
        )}
        <div className="p-8">
          {error ? (
            <div className="text-red-500 text-xl text-center">Error: {error}</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {data.length > 0 &&
                data.map((product) => (
                  <div
                    key={product.id}
                    className="bg-black-100 border border-gray-300 p-6 rounded-xl shadow-md hover:shadow-lg transition"
                  >
                    <div className="flex flex-col items-center">
                      {product.image && (
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-48 h-48 object-cover mb-4"
                        />
                      )}
                      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 text-center">
                        {product.title}
                      </h2>
                      <p className="text-xl font-semibold text-brown-600 mb-2">${product.price}</p>
                      <p className="text-sm text-pink-600 mb-2">Category: {product.category}</p>
                      <div className="flex items-center mb-4">
                        <div className="flex text-pink-400">
                          {[...Array(5)].map((_, index) => {
                            const rating = Math.round(product.rating.rate);
                            return (
                              <FontAwesomeIcon icon={faLinkedin} 
                                key={index}
                                className={index < rating ? "text-pink-400" : "text-pink-400"}
                              />
                            );
                          })}
                        </div>
                        <p className="ml-2 text-gray-500">({product.rating.count})</p>
                      </div>
                       <button className="bg-gradient-to-r from-pink-500 to-pink-700 text-white px-6 py-2 rounded-lg hover:opacity-90 transition">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientSide;