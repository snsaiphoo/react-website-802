import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './Recipes.css'; 



export default function RecipeExpand() {
  return (
    <div className='container'>
      <Accordion className="custom-accordion">
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography style={{ fontFamily: 'Trebuchet MS', fontSize: '16px', fontWeight: 'bold' }}>Breakfast - Feta, Egg and Olive Pita</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <img src="/react-website-802/image/breakfast.JPG" alt="Feta, Egg and Olive Pita"></img>
           <Typography style={{ fontFamily: 'Trebuchet MS', fontSize: '10px'}}>PHOTO: TED AND CHELSEA CAVANAUGH</Typography>
           <Typography style={{ fontFamily: 'Trebuchet MS', fontSize: '14px', margin: 10}}>
            Here is a simple breakfast recipe that contains anti-inflammatory ingredients. </Typography>
            <Typography style={{ fontFamily: 'Trebuchet MS', fontSize: '15px', margin: 10, fontWeight: 'bold'}}>
            Ingredients: </Typography>
            <ul style={{ fontFamily: 'Trebuchet MS',fontSize: '14px', margin: '10px 0 0 20px' }}>
              <li className='ingredient-list' >2 tablespoons whole-milk plain Greek yogurt</li>
              <li>1/2 whole-wheat pita</li>
              <li>1/4 cup baby arugula</li>
              <li>2 tablespoons halved cherry tomatoes</li>
              <li>1 large egg, poached</li>
              <li>3 pitted Kalamata olives, chopped</li>
              <li>1 tablespoon crumbled feta cheese</li>
              <li>1/4 teaspoon <a href='https://www.bonappetit.com/story/what-is-zaatar'>za'atar</a></li>
            </ul>
            <Typography style={{ fontFamily: 'Trebuchet MS', fontSize: '15px', margin: 10, fontWeight: 'bold'}}>
            Directions: </Typography>
            <Typography style={{ fontFamily: 'Trebuchet MS', fontSize: '14px', margin: 10, fontWeight: 'bold'}}>
            1. Spread yogurt inside pita. Fill the pita with arugula, tomatoes, poached egg, olives and feta. Sprinkle with za'atar.</Typography>
            <p>You can find the full recipe at <a href="https://www.eatingwell.com/recipe/7897310/feta-egg-olive-pita/">eatingwell.com</a></p>
        </AccordionDetails>
      </Accordion>
      <Accordion className="custom-accordion">
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography style={{ fontFamily: 'Trebuchet MS', fontSize: '16px', fontWeight: 'bold' }}>Lunch - Cucumber Chicken Greed Godess Wrap</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <img src="/react-website-802/image/lunch.JPG" alt="Cucumber Chicken Wrap"></img>
           <Typography style={{ fontFamily: 'Trebuchet MS', fontSize: '10px'}}>PHOTO: BRIE PASSANO</Typography>
           <Typography style={{ fontFamily: 'Trebuchet MS', fontSize: '14px', margin: 10}}>
            This is a quick wrap that keeps well when traveling to work or school. It has a good amount of protein and veggies for fiber. </Typography>
            <Typography style={{ fontFamily: 'Trebuchet MS', fontSize: '15px', margin: 10, fontWeight: 'bold'}}>
            Ingredients: </Typography>
            <ul style={{ fontFamily: 'Trebuchet MS',fontSize: '14px', margin: '10px 0 0 20px' }}>
              <li className='ingredient-list' >1 ounce cream cheese</li>
              <li>1/4 medium avocado</li>
              <li>1 teaspoon lemon juice</li>
              <li>1/8 teaspoon salt</li>
              <li>1/8 teaspoon of ground pepper</li>
              <li>2 tablespoons of fresh herbs (dill, basil, oregano, etc.)</li>
              <li>1 whole wheat torilla</li>
              <li>1/4 cup shredded cooked chicken</li>
              <li>2 tablespoons shredded carrort</li>
              <li>6 thin slices cucumber</li>
              <li>1/2 cup of mixed salad greens</li>
            </ul>
            <Typography style={{ fontFamily: 'Trebuchet MS', fontSize: '15px', margin: 10, fontWeight: 'bold'}}>
            Directions: </Typography>
            <Typography style={{ fontFamily: 'Trebuchet MS', fontSize: '14px', margin: 10, fontWeight: 'bold'}}>
            1. Stir cream cheese, avocado, lemon juice, salt and pepper together in a small bowl. Add herbs and stir until well blended. Spread the mixture evenly on tortilla. Top with chicken, carrot, cucumber and greens, then roll up like a burrito.</Typography>
            <p>You can find the full recipe at <a href="https://www.eatingwell.com/recipe/7981798/cucumber-chicken-green-goddess-wrap/">eatingwell.com</a></p>
        </AccordionDetails>
      </Accordion>
      <Accordion className="custom-accordion">
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography style={{ fontFamily: 'Trebuchet MS', fontSize: '16px', fontWeight: 'bold' }}>Dinner - Salmon with Lemon-Herb Orzo & Broccoli</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <img src="/react-website-802/image/dinner.JPG" alt="Salmon with Orzo"></img>
           <Typography style={{ fontFamily: 'Trebuchet MS', fontSize: '10px'}}>PHOTO: JACOB FOX</Typography>
           <Typography style={{ fontFamily: 'Trebuchet MS', fontSize: '14px', margin: 10}}>
            Salmon is a very anti-inflammatory food; it is very easy to digest. Here it is paired with some Lemon Orzo, 
            and veggies for a well balanced dinner.</Typography>
            <Typography style={{ fontFamily: 'Trebuchet MS', fontSize: '15px', margin: 10, fontWeight: 'bold'}}>
            Ingredients: </Typography>
            <ul style={{ fontFamily: 'Trebuchet MS',fontSize: '14px', margin: '10px 0 0 20px' }}>
              <li className='ingredient-list' >1 cup whole wheat orzo</li>
              <li>1/4 medium avocado</li>
              <li>2 cups chopped broccoli </li>
              <li>3 tablespoons extra-virgin olive oil</li>
              <li>1 ¼ pounds skin-on salmon fillet, cut into 4 portions, patted dry</li>
              <li>1/2 teaspoon salt</li>
              <li>4 tablespoons chopped fresh herbs</li>
              <li>2 teaspoons lemon zest</li>
              <li>1 tablespoon lemon juice</li>
            </ul>
            <Typography style={{ fontFamily: 'Trebuchet MS', fontSize: '15px', margin: 10, fontWeight: 'bold'}}>
            Directions: </Typography>
            <Typography style={{ fontFamily: 'Trebuchet MS', fontSize: '14px', margin: 10, fontWeight: 'bold'}}>
            1. Bring 2 quarts water to a boil in a large saucepan. Add orzo and cook according to package directions, adding broccoli for the last minute of cooking. Drain and rinse with cold water.</Typography>
            <Typography style={{ fontFamily: 'Trebuchet MS', fontSize: '14px', margin: 10, fontWeight: 'bold'}}>
            2. Meanwhile, heat 1 1/2 teaspoons oil in a large nonstick skillet over medium-high heat. Sprinkle salmon with 1/4 teaspoon each salt and pepper. Add to the pan, skin-side up, and cook until golden brown, 3 to 5 minutes. Flip and cook until the flesh is opaque, 3 to 5 minutes, depending on thickness.</Typography>
            <Typography style={{ fontFamily: 'Trebuchet MS', fontSize: '14px', margin: 10, fontWeight: 'bold'}}>
                3. Whisk 2 tablespoons oil, herbs, lemon zest, lemon juice and the remaining 1/4 teaspoon each salt and pepper in a medium bowl. Add the orzo and broccoli; stir until combined. </Typography>
            <Typography style={{ fontFamily: 'Trebuchet MS', fontSize: '14px', margin: 10, fontWeight: 'bold'}}>
                4. Serve the orzo mixture with the salmon and drizzle with the remaining 1 1/2 teaspoons oil.</Typography>
            <p>You can find the full recipe at <a href="https://www.eatingwell.com/recipe/7981798/cucumber-chicken-green-goddess-wrap/">eatingwell.com</a></p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}