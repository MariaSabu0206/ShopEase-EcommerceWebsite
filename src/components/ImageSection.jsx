import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import '../css/ImageSection.css';
import jewelryImg from '../assets/homejewelrycard.jpg';
import electronicsImg from '../assets/homeelectronicscard.avif';
import menImg from '../assets/homemencard.jpg';
import womenImg from '../assets/homewomencard.jpg';

const ImageSection = () => {
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  // Array of images and their respective alt texts
  const images = [
    { src: electronicsImg, alt: 'electronics' },
    { src: menImg, alt: "men's clothing" },
    { src: womenImg, alt: "women's clothing" },
    { src: jewelryImg, alt: 'jewelery' }
  ];

  // Handle the 'Shop Now' button click to navigate to the respective category
  const handleShopNow = (category) => {
    navigate(`/shop/${category}`); // Navigate to the Shop page with the specific category
  };

  return (
    <div className="image-section">
      {images.map((image, index) => (
        <div className="image-card" key={index}>
          <img src={image.src} alt={image.alt} className="image" /> {/* Display image */}
          <div className="card-content">
            <button
              className="shop-now-button"
              onClick={() => handleShopNow(image.alt)} // Trigger navigation with the category
            >
              Shop Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageSection;
