import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1 class="colored-heading">RESOLVE THE UNRESOLVED</h1>
      <p>To reduce stress and heal from within</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          destination='/contact-us'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          CONTACT US
        </Button>
        <div class="small-text">Photo by <a href="https://unsplash.com/@baileyzindel?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Bailey Zindel</a> on <a href="https://unsplash.com/photos/body-of-water-surrounded-by-trees-NRQV-hBF10M?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  </div>
      </div>
    </div>
  );
}

export default HeroSection;