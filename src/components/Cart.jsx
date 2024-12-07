import React, { useContext } from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { FaTimesCircle } from 'react-icons/fa'; // Import the cross icon for removing items
import { CartContext } from '../components/CartContext'; // Import the CartContext to access cart-related functionality
import '../css/Cart.css'; // Import custom CSS for styling the cart

const Cart = () => {
  // Destructure cart-related functions and data from CartContext
  const { cart, updateQuantity, removeFromCart, calculateTotal } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {/* If the cart is empty, show a message */}
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {/* Iterate over the products in the cart and display them as cards */}
            {cart.map(product => (
              <Card key={product.id} className="cart-item">
                <Row>
                  {/* Display product image */}
                  <Col md={4}>
                    <img src={product.image} alt={product.title} className="cart-item-img" />
                  </Col>

                  {/* Display product details */}
                  <Col md={6}>
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>Price: ${product.price}</Card.Text>
                      <Card.Text>
                        Total: ${(product.price * product.quantity).toFixed(2)} {/* Display total cost for this item */}
                      </Card.Text>

                      {/* Controls for adjusting quantity */}
                      <div className="cart-item-controls">
                        <Button variant="secondary" onClick={() => updateQuantity(product.id, -1)}>-</Button> {/* Decrease quantity */}
                        <span className="cart-item-quantity">{product.quantity}</span> {/* Display current quantity */}
                        <Button variant="secondary" onClick={() => updateQuantity(product.id, 1)}>+</Button> {/* Increase quantity */}
                      </div>
                    </Card.Body>
                  </Col>

                  {/* Button to remove item from cart */}
                  <Col md={2}>
                    <Button className="btncross" variant="danger" onClick={() => removeFromCart(product.id)}>
                      <FaTimesCircle /> {/* Cross icon */}
                    </Button>
                  </Col>
                </Row>
              </Card>
            ))}
          </div>

          {/* Display total price of all items in the cart */}
          <div className="total-price">
            <h4>Total Price: ${calculateTotal()}</h4>
          </div>

          {/* Proceed to payment button */}
          <div className="proceed-button">
            <Button variant="primary" size="lg" className="proceed-btn">
              Proceed to Pay
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
