import { useLocation } from 'react-router-dom'; // Import useLocation to access the URL location
import { Card, Button } from 'react-bootstrap'; // Import Card and Button components from react-bootstrap
import { FaStar } from 'react-icons/fa'; // Import star icon for ratings
import '../css/Product.css'; // Import custom CSS for styling
import { useContext } from 'react'; // Import useContext to access the CartContext
import { CartContext } from './CartContext'; // Import the CartContext

const Product = () => {
  const location = useLocation(); // Get the current location (URL) of the page
  console.log('Location:', location); // Log the current location for debugging

  const { addToCart } = useContext(CartContext); // Access the addToCart function from CartContext
  const searchParams = new URLSearchParams(location.search); // Create URLSearchParams to parse query parameters
  const product = JSON.parse(searchParams.get('product')); // Parse the product object from the query string
  console.log("Product from query params:", product);  // Log the product data for debugging

  // If the product is not found, show a "Product not found!" message
  if (!product) {
    return <div style={{height:"60vh"}}><h1>Product not found!</h1></div>;
  }

  const { title, image, price, rating } = product; // Destructure the product data

  // Function to render the stars based on product rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar key={i} color={i < Math.round(rating.rate) ? 'gold' : 'gray'} /> // Display gold for rated stars, gray for non-rated
      );
    }
    return stars;
  };

  return (
    <div className="product-container">
      {/* Product card displaying product details */}
      <Card className="product-card">
        <Card.Img className="product-img" variant="top" src={image} alt={title} /> {/* Display product image */}
        <Card.Body>
          <Card.Title>{title}</Card.Title> {/* Display product title */}
          <div className="product-rating">{renderStars(rating)}</div> {/* Render stars based on rating */}
          <div className="product-price">Price: <strong>${price}</strong></div> {/* Display product price */}
          <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button> {/* Add to cart button */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
