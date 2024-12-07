import React, { useState, useEffect, useRef } from 'react';
import { Form } from 'react-bootstrap';
import '../css/Banner.css';
import { FaSearch } from 'react-icons/fa'; // Import the search icon
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing

const Banner = ({ category }) => {
  const [searchQuery, setSearchQuery] = useState(''); // State to store the user's search query
  const [filteredProducts, setFilteredProducts] = useState([]); // State to store the filtered products based on the search query
  const [products, setProducts] = useState([]); // State to store all fetched products
  const navigate = useNavigate(); // Hook for programmatic navigation
  const searchResultsRef = useRef(null); // Ref for detecting clicks outside the search results

  // Fetch products based on the provided category
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // API URL changes based on whether a category is provided
        const url = category
          ? `https://fakestoreapi.com/products/category/${category}`
          : 'https://fakestoreapi.com/products'; // Fetch all products if no category is provided
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data); // Save the fetched products to the state
        console.log("Fetched products:", data); // Log the fetched data (for debugging purposes)
      } catch (error) {
        console.error("Error fetching products:", error); // Log any errors during the fetch
      }
    };
    fetchProducts();
  }, [category]); // Re-run the fetch whenever the category changes

  // Update the search query when the user types in the input
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter products based on the search query when the search button is clicked
  const handleSearchClick = (event) => {
    event.preventDefault(); // Prevent form submission from reloading the page
    if (searchQuery.length > 0) {
      const results = products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(results); // Update the filtered products
    } else {
      setFilteredProducts([]); // Clear the results if no query is entered
    }
  };

  // Navigate to the product details page when a search result is clicked
  const handleProductClick = (product) => {
    const searchParams = new URLSearchParams();
    searchParams.set('product', JSON.stringify(product)); // Pass product data as a query parameter
    navigate(`/product?${searchParams.toString()}`); // Navigate to the product details page
  };

  // Clear the search results when clicking outside the results list
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchResultsRef.current && !searchResultsRef.current.contains(event.target)) {
        setFilteredProducts([]); // Clear the results
      }
    };

    // Attach and detach the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="banner-container">
      <div className="banner-content">
        <h1 className="banner-title">Welcome to ShopEase!</h1> {/* Banner title */}
        <Form className="search-form">
          <Form.Control
            type="text"
            value={searchQuery} // Bind input value to the search query state
            onChange={handleInputChange} // Update search query on user input
            placeholder="Search your product" // Placeholder text
            className="search-input"
          />
          <button type="submit" className="search-button" onClick={handleSearchClick}>
            <FaSearch /> {/* Render the search icon */}
          </button>
        </Form>

        {/* Display search results if any are found */}
        {filteredProducts.length > 0 && (
          <div className="search-results" ref={searchResultsRef}>
            <ul>
              {filteredProducts.map((product) => (
                <li key={product.id} onClick={() => handleProductClick(product)}>
                  <a href={`#${product.id}`}> {/* Anchor for each product */}
                    {product.title} {/* Display product title */}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
