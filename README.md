# ShopEase: An E-Commerce Website

ShopEase is a modern and responsive e-commerce platform built using React. It features user authentication, dynamic product display, and a seamless shopping cart experience.

## Features

- User login and registration system (Firebase authentication).
- Home page with search functionality.
- Shop page with category-based product fetching from an API.
- Sorting of Products based on Price value
- Cart page with quantity management and total price calculation.
- Fully responsive design using React Bootstrap.
- Navigation using React Router.

## Project Setup

Follow the steps below to set up and run this project locally on your system:

1. Prerequisites
Ensure you have the following installed:
   - Node.js (v16 or above) and npm.
   - Git.
2. Clone the Repository
     Clone the repository to your local system using Git :
 `git clone https://github.com/MariaSabu0206/ShopEase-EcommerceWebsite.git`
3. Navigate to the Project Folder
Move into the cloned project directory:

       cd ShopEase
5. Install Dependencies
Install all the necessary packages using npm:

       npm install
   
7. Firebase Configuration
   
     1. Go to Firebase Console and create a new project.
     2. Enable Authentication and set up Email/Password sign-in.
     3. Go to Project Settings > Your Apps and get the Firebase configuration details.
     4. Create a .env file in the root of the project and add the following:
        
                                        REACT_APP_FIREBASE_API_KEY=your-api-key
                                        REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
                                        REACT_APP_FIREBASE_PROJECT_ID=your-project-id
                                        REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
                                        REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
                                        REACT_APP_FIREBASE_APP_ID=your-app-id
 8. Run the Application
    
     Start the development server:
    
        npm start
The app will be available at `http://localhost:3000` in your browser.

## Dependencies

  This project uses the following major libraries:

  - React (Frontend Framework)
  - React Router (Navigation)
  - React Bootstrap (Responsive Styling)
  - Firebase (Authentication)
  - Axios (API Requests)
  - Install all dependencies using npm install.

 ## How to Use
- Login or Register: The user must log in or register to access the website.
    you can use this dummy email and password to test :
  
    email : shopease@gmail.com
  
    Pass  : shopease
  
- Browse Products: Use the Navbar Shop dropdown or "Shop Now" feature on cards to explore products by category.
- Search Products: Search products by name and navigate to the Product Card
- Add to Cart: Add products to your cart and adjust quantities as needed.
- Remove from Cart: Remove products using cross button
- Proceed to Pay: View the total price and proceed to payment
- Footer has quick links to navigate to Home page and to Shop page displaying all products

  # Live Demo
  
The live project is deployed on Vercel. Check it out here:

       https://shop-ease-ecommerce-website-prts.vercel.app/
