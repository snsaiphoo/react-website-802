import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './Accordion.css'; 
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
          <Typography style={{ fontFamily: 'Trebuchet MS', fontSize: '16px', fontWeight: 'bold' }}>20 min Full Body Stretch</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="video-container">
           <YoutubeEmbed embedId="sTANio_2E0Q" width={350} height={205} className='video1' />
           </div>
           <Typography style={{ fontFamily: 'Trebuchet MS', fontSize: '14px', margin: 10}}>
            This is a beginner video stretch routine by the Youtuber MadFit. This stretch requires no equipment, only a mat to sit on.
            There is a lot of focus on breathing techniques. Follow or listen along to start feeling relaxed.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="custom-accordion">
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography style={{ fontFamily: 'Trebuchet MS', fontSize: '16px', fontWeight: 'bold' }}>10 Minute Yoga Stretch</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="video-container">
           <YoutubeEmbed embedId="8TuRYV71Rgo" width={350} height={205} className='video2' />
           </div>
           <Typography style={{ fontFamily: 'Trebuchet MS', fontSize: '14px', margin: 10}}>
            This is a 10 minute yoga stretching exercise that is meant to help focus your mind, and tune out the 
            stresses of the day. This is also a no equipment routine.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="custom-accordion">
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography style={{ fontFamily: 'Trebuchet MS', fontSize: '16px', fontWeight: 'bold' }}>Stress Relief Breathing</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="video-container">
            <YoutubeEmbed embedId="odADwWzHR24" width={350} height={205} className='video3' />
            </div>
            <Typography style={{ fontFamily: 'Trebuchet MS', fontSize: '14px', margin: 10}}>
            This video reviews a couple of different breathing exercises to lower stress and anxiety. Follow along with 
            the video and see if you can incorporate these into your life. 
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}