import React, { createContext, useState, useEffect } from 'react';
import { db, auth } from './Firebase'; // Import Firestore database and Firebase authentication
import { doc, setDoc, getDoc } from 'firebase/firestore'; // Firestore methods for document operations

export const CartContext = createContext(); // Create a context for managing cart state

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // State to hold the cart items

  // Fetch the user's cart from Firestore when the authentication state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userCartRef = doc(db, 'carts', user.uid); // Reference to the user's cart in Firestore
        const docSnap = await getDoc(userCartRef); // Fetch the document from Firestore

        if (docSnap.exists()) {
          setCart(docSnap.data().items || []); // Load cart items if they exist
        } else {
          // If no cart exists, create an empty cart for the user in Firestore
          await setDoc(userCartRef, { items: [] });
          setCart([]); // Set an empty cart in state
        }
      } else {
        setCart([]); // Clear the cart when the user logs out
      }
    });

    return () => unsubscribe(); // Clean up the listener when the component unmounts
  }, []);

  // Save the cart to Firestore whenever it changes
  useEffect(() => {
    const saveCartToFirestore = async () => {
      const user = auth.currentUser; // Get the currently authenticated user
      if (user) {
        const userCartRef = doc(db, 'carts', user.uid); // Reference to the user's cart in Firestore
        await setDoc(userCartRef, { items: cart }); // Save the updated cart to Firestore
      }
    };

    saveCartToFirestore(); // Call the function to save the cart
  }, [cart]); // Run the effect whenever the cart state changes

  // Add a product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const productIndex = updatedCart.findIndex((item) => item.id === product.id); // Check if the product is already in the cart

      if (productIndex > -1) {
        updatedCart[productIndex].quantity += 1; // If the product exists, increment its quantity
      } else {
        updatedCart.push({ ...product, quantity: 1 }); // If the product doesn't exist, add it to the cart with quantity 1
      }

      return updatedCart; // Return the updated cart
    });
  };

  // Remove a product from the cart by its ID
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId)); // Filter out the product to be removed
  };

  // Update the quantity of a product in the cart
  const updateQuantity = (id, increment) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + increment } : item // Update quantity if IDs match
        )
        .filter((item) => item.quantity > 0) // Remove items with quantity <= 0
    );
  };

  // Calculate the total price of all items in the cart
  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0) // Multiply price by quantity for each item and sum up
      .toFixed(2); // Round to two decimal places
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        calculateTotal,
      }}
    >
      {children} {/* Render children components wrapped in the context */}
    </CartContext.Provider>
  );
};
