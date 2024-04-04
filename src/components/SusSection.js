import '../App.css';
import './SusSection.css';
import RecipeExpand from './Recipes';

function SusSection() {

  return (
    <div className='sus-container'>
        <div className="photo-text">Photo by <a href="https://unsplash.com/@devintavery?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Devin Avery</a> on <a href="https://unsplash.com/photos/green-leafed-plant-BRVqq2uak4E?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></div>
        <h1>SUPPORTING YOUR HEALTH</h1>
        <p>
            The foods we consume also has a direct impact on how our body functions including our hormones. Diet has a direct
            role in affecting our hormones. Studies have shown that chronic stress can lead to an allostatic load on the body,
            which commonly known as burnout. Prolonged stress not only affects mental well-being but also has physical implications, 
            such as compromising the immune system and causing homeostatic dysregulation. This section offers anti-inflammatory 
            recipes that can help not put extra stress on your digestive system. The connection between stress and the gut microbiome 
            is very real, and we need to support our body from the inside and out. 
        </p>
        <h2>ANTI-INFLAMMATORY RECIPES</h2>
        <RecipeExpand />
    </div>
  );
}

export default SusSection;