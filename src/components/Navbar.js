import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
   const [click, setClick] = useState(false);
   const [button, setButton] = useState(true);

   const handleClick = () => setClick(!click);
   const closeMobileMenu = () => setClick(false);

   const showButton = () => {
    if(window.innerWidth <= 960) {
        setButton(false);
    } else {
        setButton(true);
    }
   };

   useEffect(() => { showButton();}, []);

   window.addEventListener('resize', showButton);


   return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/react-website-802' className='navbar-logo' onClick={closeMobileMenu}>
                    RESOLVE 
                    <i class="fa-solid fa-leaf"></i>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fa-solid fa-xmark' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}> 
                     <li className='nav-item'>
                        <Link to='/react-website-802' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li> 
                    <li className='nav-item'>
                        <Link to='/emotional' className='nav-links' onClick={closeMobileMenu}>
                            Emotional
                        </Link>
                    </li>  
                    <li className='nav-item'>
                        <Link to='/physical' className='nav-links' onClick={closeMobileMenu}>
                            Physical
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sustenance' className='nav-links' onClick={closeMobileMenu}>
                            Sustenance
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact-us' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Contact Us
                        </Link>
                    </li>  
                </ul>
                {button && <Button destination='/contact-us' buttonStyle='btn--outline'>CONTACT US</Button>}
            </div>
        </nav> 
    </>
  );
}

export default Navbar