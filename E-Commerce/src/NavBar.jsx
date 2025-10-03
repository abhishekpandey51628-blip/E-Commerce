import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import {useNavigate} from 'react-router-dom';
import signup from './signup'; 
import login from './login';
function NavBar() {
  const [showDialog, setShowDialog] = useState(false);
  //const navigate=useNavigate();

  return (
    <>
      <nav className="navbar">  
        <h2>E-Commerce</h2>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
          
          
          <li>
            <FontAwesomeIcon
              icon={faUser}
              size="lg"
              className="account-icons"
              onClick={() => setShowDialog(true)}
            />
          </li>
        </ul>
      </nav>

      
      {showDialog && (
        <div className="modal-overlay" onClick={() => setShowDialog(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Account</h2>
            <button onClick={()=>window.location.href="/profile"}>Profile</button>
            <button onClick={()=>window.location.href="/login"}>Login</button>
             <button onClick={()=>window.location.href="/signup"}>Signup</button>

            

            <button className="close-btn" onClick={() => setShowDialog(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
