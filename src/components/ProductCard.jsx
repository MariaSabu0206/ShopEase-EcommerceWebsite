import React, { useContext } from 'react'; // Import React and useContext
import { Card, Button } from 'react-bootstrap'; // Import Card and Button from react-bootstrap
import { FaStar } from 'react-icons/fa'; // Import the FaStar icon for ratings
import { CartContext } from '../components/CartContext'; // Import CartContext to access cart functions
import '../css/ProductCard.css'; // Import custom CSS for styling

const ProductCard = ({ product }) => {
  const { title, image, price, rating, id } = product;  // Destructure product properties (title, image, price, rating, id)
  const { addToCart } = useContext(CartContext); // Access the addToCart function from the CartContext

  // Function to render the stars based on product rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar key={i} color={i < Math.round(rating.rate) ? 'gold' : 'gray'} />  // Display gold for rated stars, gray for non-rated stars
      );
    }
    return stars;
  };

  return (
    <Card className="product-card" id={id}> {/* Card for displaying the product */}
      <Card.Img className="product-img" variant="top" src={image} alt={title} /> {/* Display product image */}
      <Card.Body>
        <Card.Title>{title}</Card.Title> {/* Display product title */}
        <div className="product-rating">{renderStars(rating)}</div> {/* Display rating as stars */}
        <div className="product-price">Price: <strong>${price}</strong></div> {/* Display price */}
        <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button> {/* Button to add the product to the cart */}
      </Card.Body>
    </Card>
  );
};

export default ProductCard;  // Export the ProductCard component
