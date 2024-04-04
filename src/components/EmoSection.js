import React from 'react';
import '../App.css';
import './EmoSection.css';
import MultiActionAreaCard from './Cards';
import AccordionExpandIcon from './EmoAccordion';

function EmoSection() {
  return (
    <div className='emo-container'>
        <div 
          className="phototext">Photo by <a href="https://unsplash.com/@priscilladupreez?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Priscilla Du Preez 🇨🇦</a> on <a href="https://unsplash.com/photos/people-laughing-and-talking-outside-during-daytime-nF8xhLMmg0c?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        </div>
        <h1>SUPPORTING THE MIND</h1>
        <p>
            Mental health constantly gets overlooked in our society. It is only recently that more conversations
            are taking place. Many of us go through traumas like financial strain, family struggles or even 
            losing a loved one, and never take the time to heal or process the situation. 
        </p>
        <p>
            Finding a therapist can be challenging, and you have to make sure it is the right one for you. There 
            are also many tools like journalling and meditation that can be incorporated into everday life. Below
            are a few videos and resources to support your needs.
        </p>
        <h2>MENTAL HEALTH RESOURCES</h2>
        <p1>
            There are many different avenues to get mental health support. Whether you are in active crisis or need
            consistent support, here are links to support you.
        </p1>
        <div className='card-container'> 
        <MultiActionAreaCard imageUrl="/image/calm.JPG"
            altText="Calm App"
            title="Calm App fpr Sleep and Meditation"
            description="This subscription brings you a plethora of personalized tools to help manage stress 
            and anxiety. The three main areas of focus are sleep, stress & anxiety, and mindfulness."
            link="https://www.calm.com/" />
        <MultiActionAreaCard imageUrl="/image/betterhelp.JPG"
            altText="Better Help"
            title="BetterHelp Online Therapy"
            description="This is a great resource for someone who has never tried therapy before! You are able 
            to test out different therapists until you find one you connect with."
            link="https://www.betterhelp.com/online-therapy/"/>
        <MultiActionAreaCard imageUrl="/image/good2talk.JPG"
            altText="Good2Talk"
            title="Good2Talk Helpline"
            description="A immediate phone servcie for post-secondary students that live in Ontario and Nova 
            Scotia. This is a great tool when you need immediate support."
            link="https://good2talk.ca/"/>
        </div>
        <h2>WELLNESS VIDEOS</h2>
         <AccordionExpandIcon />
     </div>   
  );
}

export default EmoSection;

