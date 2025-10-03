import React from 'react';
import { FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa"; 
import './Footer.css';
function Footer(){
    return(
        <footer className='footer'>
            <h2>Shoping karo khul ke paise lagao khul ke</h2>
            <img src=''/>
          <div className='side1'>
            
                <li><a href="https://google.com">Google</a> <FaGoogle/></li>
                 <li><a href="https://facebook.com">FaceBook</a> <FaFacebook/></li>
                  <li><a href="https://instagram.com">Instagram</a> <FaInstagram/></li>
          

          </div>

        </footer>

    )
}
export default Footer;
