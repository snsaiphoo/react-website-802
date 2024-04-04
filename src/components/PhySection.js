import '../App.css';
import './PhySection.css';
import AccordionExpandIcon from './Accordion';

function PhySection() {

  return (
    <div className='phys-container'>
        <div className="photo-text">Photo by <a href="https://unsplash.com/@kikekiks?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">kike vega</a> on <a href="https://unsplash.com/photos/silhouette-photography-of-woman-doing-yoga-F2qh3yjz6Jk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></div>
        <h1>SUPPORTING THE BODY</h1>
        <p>
            Our body can also experience the effects of stress. This can lead to your body functioning on high 
            cortisol, which can break down the body and increase inflammation. Exercising is a valuable tool in
            releasing this inflammation. Even if your workout is 10 minutes in your living room; everyone needs
            to start somewhere. 
        </p>
        <h2>EXERCISES</h2>
        <p>
           There are quick exercises that can be done to relieve stress. A study done at Harvard supports this 
           theory, saying that exercise can reduce the amount of stress hormones in the body. These being 
           cortisol and adrenaline. Below are some exercises: 
        </p>
        <AccordionExpandIcon />
    </div>
  );
}

export default PhySection;
