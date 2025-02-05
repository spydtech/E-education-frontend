import React, { useEffect } from 'react';
import Navbar from '../../../../../Navbar';  // Match the import path with the first code
import Footer from '../../../../footer/Footer';  // Match the import path with the first code
import UnitTestingHero from './UnitTestingHero';  // Adjust component name if needed
import UnitTestingCard from './UnitTestingCard';  // Adjust component name if needed
import UnitTestingNavigation from './UnitTestingAbout/UnitTestingNavigation';  // Match the import path
import UnitTestingFoot from './UnitTestingFoot';  // Adjust component name if needed
import UnitTestingCareersOutcomes from './UnitTestingAbout/UnitTestingCareersOutcomes';  // Uncomment if needed

const UnitTesting = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Navbar />
      <UnitTestingHero />
      <UnitTestingCard />
      <UnitTestingNavigation />
      <UnitTestingFoot />
      {/* Uncomment the following line if you need to include it */}
      {/* <UnitTestingCareersOutcomes /> */}
      <Footer />
    </>
  );
};

export default UnitTesting;
