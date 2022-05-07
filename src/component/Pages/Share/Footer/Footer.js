import React from 'react';
import './Footer.css'

const Footer = () => {
  const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='footer-area text-center'>
            <p><small> COPYRIGHT &copy;  {year}, DESIGNED BY NISHAN DAS </small></p>
        </footer>
    );
};

export default Footer;