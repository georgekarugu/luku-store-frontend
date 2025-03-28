import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import SingleProduct from "../Components/SingleProduct";
import { SearchContext } from "../Contexts/Search/searchProvider";

function Home() {
  const { searchResults, searching } = useContext(SearchContext);

  const products = [
    {
      id: 1,
      name: "HomePod mini",
      price: 239.0,
      description: "Table with air purifier, stained veneer/black",
      rating: 4.5,
      quantity: 1,
      seller: "Luku store",
      reviews: 121,
      image: "/image.jpg",
    },
    {
      id: 2,
      name: "Smart Speaker X",
      price: 199.0,
      description: "Wireless speaker with AI assistant, charcoal gray",
      rating: 4.7,
      quantity: 1,
      reviews: 89,
      image: "shirt.jpg",
    },
    {
      id: 3,
      name: "Smart Speaker X",
      price: 199.0,
      description: "Wireless speaker with AI assistant, charcoal gray",
      rating: 4.7,
      quantity: 1,
      reviews: 89,
      image: "/s.jpg",
    },
    {
      id: 4,
      name: "Smart Speaker X",
      price: 199.0,
      description: "Wireless speaker with AI assistant, charcoal gray",
      rating: 4.7,
      quantity: 1,
      reviews: 89,
      image: "/ss.jpg",
    },
    {
      id: 7,
      name: "Smart Speaker X",
      price: 199.0,
      description: "Wireless speaker with AI assistant, charcoal gray",
      rating: 4.7,
      quantity: 1,
      reviews: 89,
      image: "/ss.jpg",
    },
    {
      id: 8,
      name: "Smart Speaker X",
      price: 199.0,
      description: "Wireless speaker with AI assistant, charcoal gray",
      rating: 4.7,
      quantity: 1,
      reviews: 89,
      image: "/ss.jpg",
    },
    {
      id: 9,
      name: "Smart Speaker X",
      price: 199.0,
      description: "Wireless speaker with AI assistant, charcoal gray",
      rating: 4.7,
      quantity: 1,
      reviews: 89,
      image: "/ss.jpg",
    },
  ];

  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8080/products")
  //     .then((response) => {
  //       setProducts(response.data); // Store products in state
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching products:", error);
  //     });
  // }, []);

  return (
    <>
      {/* Show Hero Section only if not searching */}
      {!searching && (
        <div
          className="relative h-screen w-screen bg-cover bg-center"
          style={{
            backgroundImage: "url('/ss.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "600px",
            width: "100%",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-6">
            <h1 className="text-5xl font-extrabold mb-4">
              Shopping And Departmental Store
            </h1>
            <p className="text-lg max-w-2xl">
              At{" "}
              <span className="font-semibold text-green-400">
                Gransa Pharmaceuticals
              </span>
              , we are committed to providing quality medications, expert
              advice, and personalized care. From prescriptions to wellness
              products, we’re here to support your health journey with
              compassion and expertise.
            </p>
            <button className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full shadow-lg transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      )}

      {/* Display Search Results or Default Products */}
      {searching ? (
        searchResults?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 pt-24">
            {searchResults.map((product) => (
              <SingleProduct key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-red-500 mt-5 pt-24">No products found.</p>
        )
      ) : (
        <>
          {/* Categories Section */}
          <div className="p-4">
            <h2 className="text-4xl font-bold mb-4 mt-4">What's New!</h2>
          </div>

          {/* Default Product Listing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {products.map((product) => (
              <SingleProduct key={product.id} product={product} />
            ))}
          </div>

          
        </>
      )}
    </>
  );
}

export default Home;
