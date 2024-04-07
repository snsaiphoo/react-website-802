import React from 'react';
import './HomeSection.css';

function HomeSection() {
  return (
    <>
      <div className='home-container'>
        <h1 class="center-heading">OUR MISSION</h1>
      <div class="text-container">
        <div className="right-content">
            <img src='/react-website-802/image/stressfree.jpg' alt="Happy Woman on the beach." className="responsive-img" style={{ maxWidth: '400px'}} />
            <div className="text-overlay">Photo by <a href="https://unsplash.com/@fuuj?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Fuu J</a> on <a href="https://unsplash.com/photos/woman-spreading-her-arms-r2nJPbEYuSQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></div>
        </div>
        <p>
            Many of us go through stressful situations and don't stop to catch our breath. We tend to just move on so long as we are
            able to wake up and carry out our responsibilities. It is very true that our day-to-day lives can be a large obstacle in 
            dealing with stress. Our society has made us more focused on working to keep up with the cost of living, rather than 
            supporting our bodies to live a good quality life. 
            
            This website is meant to be a safe space to learn simple techniques to reduce stress. Each page provides something different.
            One to support the mind, one to support the physical body, and one to support your internal body. These would be mental health,
            exercise, and diet. Your body shows up for you everyday, time to return the favor. Find links to the pages below.
        </p>
      </div>
       
        <div 
          className="citationtext">Photo by <a href="https://unsplash.com/@nightcoder?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Yuriy Kovalev</a> on <a href="https://unsplash.com/photos/mountain-covering-with-clouds-nN1HSDtKdlw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        </div>
      </div>
    </>
  );
}

export default HomeSection;