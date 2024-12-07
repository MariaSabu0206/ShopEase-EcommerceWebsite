import React, { useContext, useState, useEffect } from 'react'; // Import React hooks
import { Navbar, Nav, NavDropdown, Container, Badge } from 'react-bootstrap'; // Import React Bootstrap components
import { Link, useLocation } from 'react-router-dom'; // Import Link for routing and useLocation to get the current path
import { FaShoppingCart } from 'react-icons/fa'; // Import the shopping cart icon
import { CartContext } from '../components/CartContext'; // Import CartContext to get cart data
import '../css/Header.css'; // Import the CSS file for custom styles

const Header = () => {
  const { cart } = useContext(CartContext); // Access the cart data from CartContext
  const [cartCount, setCartCount] = useState(0); // State to hold the number of items in the cart
  const location = useLocation(); // Get the current location (path) using useLocation

  // Update the cart count whenever the cart changes
  useEffect(() => {
    setCartCount(cart.reduce((total, item) => total + item.quantity, 0)); // Sum up the quantity of items in the cart
  }, [cart]); // Re-run this effect when the cart state changes

  return (
    <Navbar expand="lg" bg="light" variant="light" className="navbar-custom fixed-top">
      <Container>
        {/* Brand Name */}
        <Navbar.Brand className="brand-name">
          <span className="shop-name">ShopEase</span> {/* ShopEase name displayed in the navbar */}
        </Navbar.Brand>
        
        {/* Cart Icon with Badge */}
        <div className="cart-icon-wrapper">
          <Link to="/cart"> {/* Navigate to the cart page when clicked */}
            <FaShoppingCart className="cart-icon" /> {/* Cart icon */}
            <Badge pill bg="danger" className="cart-count">
              {cartCount} {/* Display the current number of items in the cart */}
            </Badge>
          </Link>
        </div>

        {/* Navbar Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="navbar-nav" />
        
        {/* Navbar Links and Dropdown Menus */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home" className="nav-link">
              Home
            </Nav.Link>
            
            {/* Dropdown for different product categories */}
            <NavDropdown title="Shop" id="shop-dropdown" className="nav-link drop-link">
              <NavDropdown.Item as={Link} to="/shop/men's clothing">Men's Clothing</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop/women's clothing">Women's Clothing</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop/electronics">Electronics</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop/jewelery">Jewelry</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">All Products</NavDropdown.Item>
            </NavDropdown>

            {/* Conditional Dropdown for sorting products based on price */}
            {location.pathname.includes('/shop') && (
              <NavDropdown title="Sort by Price" id="sort-by-price-dropdown" className="nav-link drop-link">
                <NavDropdown.Item as={Link} to={`${location.pathname}?sort=high-to-low`}>High to Low</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={`${location.pathname}?sort=low-to-high`}>Low to High</NavDropdown.Item>
              </NavDropdown>
            )}

            {/* Logout link */}
            <Nav.Link as={Link} to="/" className="nav-link">
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
