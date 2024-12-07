import React, { useEffect, useState } from 'react'; // Import React, useEffect, useState hooks
import { useParams, useLocation } from 'react-router-dom'; // Import useParams and useLocation for dynamic routing
import ProductCard from './ProductCard'; // Import ProductCard component to render individual products
import '../css/Shop.css' // Import custom CSS for styling

const Shop = () => {
  const { category } = useParams(); // Get category from the URL params
  const [products, setProducts] = useState([]); // State to store fetched products
  const { search } = useLocation(); // Get the search query parameters (like sort)
  const sortType = new URLSearchParams(search).get('sort'); // Extract the sort type (high-to-low or low-to-high) from query

  // Fetch products when category or sort changes
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch products based on the category or fetch all products
        const url = category
          ? `https://fakestoreapi.com/products/category/${category}` // Fetch category-specific products
          : `https://fakestoreapi.com/products`; // Fetch all products if no category
        const response = await fetch(url);
        const data = await response.json(); // Convert response to JSON

        // Sort products based on the sort query if it exists
        if (sortType) {
          sortProducts(data, sortType);
        } else {
          setProducts(data); // Set products if no sort
        }
      } catch (error) {
        console.error('Error fetching products:', error); // Log error if fetching fails
      }
    };
    fetchProducts(); // Call the fetchProducts function
  }, [category, sortType]); // Re-fetch when category or sort changes

  // Function to sort products based on the sortType (high-to-low or low-to-high)
  const sortProducts = (data, sortType) => {
    if (sortType === 'high-to-low') {
      const sortedData = [...data].sort((a, b) => b.price - a.price); // Sort by price from high to low
      setProducts(sortedData); // Update products with sorted data
    } else if (sortType === 'low-to-high') {
      const sortedData = [...data].sort((a, b) => a.price - b.price); // Sort by price from low to high
      setProducts(sortedData); // Update products with sorted data
    }
  };

  return (
    <div className="shopmain">
      {/* Banner displaying category or all products */}
      <div className="shop-banner">
        <h2>{category ? `${category} Products` : `All Products`}</h2> {/* Dynamically change the banner text */}
      </div>

      <div className="product-cards">
        {/* Display loading text if products are still being fetched */}
        {products.length === 0 ? (
          <p>Loading...</p>
        ) : (
          // Map through products and render a ProductCard for each
          products.map((product) => (
            <ProductCard key={product.id} product={product} /> // Pass product data to ProductCard component
          ))
        )}
      </div>
    </div>
  );
};

export default Shop; // Export Shop component
