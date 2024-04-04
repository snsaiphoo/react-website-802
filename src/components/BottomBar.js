import React from 'react';
import './BottomBar.css';
import { Button } from './Button';

function BottomBar() {
  return (
    <>
       <div className='bottom-container'>
      <div className='home-btns'>
            <Button className='btns' destination='/emotional' buttonStyle='btn--outline'buttonSize='btn--large'>
              EMOTIONAL
            </Button>
            <Button className='btns' destination='/physical' buttonStyle='btn--outline'buttonSize='btn--large'>
              PHYSICAL
            </Button>
            <Button className='btns' destination='/sustenance' buttonStyle='btn--outline'buttonSize='btn--large'>
              SUSTENANCE
            </Button>
        </div>
      </div> 
    </>
  );
}

export default BottomBar;