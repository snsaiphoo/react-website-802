import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './EmoAccordion.css'; 
import YoutubeEmbed from '../YoutubeEmbed';


export default function AccordionExpandIcon() {
  return (
    <div className='container'>
      <Accordion className="custom-accordion">
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography style={{ fontFamily: 'Trebuchet MS', fontSize: '16px', fontWeight: 'bold' }}>5 Minute Mediation</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="video-container">
           <YoutubeEmbed embedId="inpok4MKVLM" width={350} height={205} className='video1' />
           </div>
           <Typography style={{ fontFamily: 'Trebuchet MS', fontSize: '14px', margin: 10}}>
            This is a 5 minute meditation from Goodful. This will help ease your mind and destress. Listen along 
            and take a breather.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="custom-accordion">
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography style={{ fontFamily: 'Trebuchet MS', fontSize: '16px', fontWeight: 'bold' }}>Journalling for Anxiety</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="video-container">
           <YoutubeEmbed embedId="7CcZ7gyFXv0" width={350} height={205} className='video2' />
           </div>
           <Typography style={{ fontFamily: 'Trebuchet MS', fontSize: '14px', margin: 10}}>
            I have personally seen a lot of benefits from journalling, and this video is an introduction on how 
            you can also get started in journalling to relieve stress.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="custom-accordion">
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography style={{ fontFamily: 'Trebuchet MS', fontSize: '16px', fontWeight: 'bold' }}>Guided Mediation</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="video-container">
            <YoutubeEmbed embedId="0zFlD5LFe9o" width={350} height={205} className='video3' />
            </div>
            <Typography style={{ fontFamily: 'Trebuchet MS', fontSize: '14px', margin: 10}}>
            This is a longer guided mediation by Joan Borysenko. Invigorate your body and foster a
             sense of tranquility right now through this guided meditation.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}