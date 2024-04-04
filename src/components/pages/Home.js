import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import HomeSection from '../HomeSection';
import Footer from '../Footer';
import BottomBar from '../BottomBar';

function Home() {
  return (
    <>
      <HeroSection />
      <HomeSection />
      <BottomBar />
      <Footer />
    </>
  );
}

export default Home;