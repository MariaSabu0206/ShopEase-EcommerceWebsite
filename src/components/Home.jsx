import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams for dynamic routing
import Banner from './Banner';
import ImageSection from './ImageSection';

const Home = () => {
  const { category } = useParams();  // Get the dynamic category from the URL

  return (
    <div>
      <Banner/>  {/* Render the Banner component */}
      <ImageSection category={category}/> {/* Pass category as a prop to ImageSection */}
    </div>
  );
};

export default Home;
