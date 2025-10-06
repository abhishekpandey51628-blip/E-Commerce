import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

function NavBar() {
  const [showDialog, setShowDialog] = useState(false);
  const navigate = useNavigate(); 

  const handlenavigate=(path)=>{
    navigate(path);
    setShowDialog(false);



  };

  return (
    <>
      <nav className="navbar">  
        <h2>E-Commerce</h2>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>

          {/* <li>
            <button onClick={() => navigate("/signup")} className="nav-btn">Signup</button>
          </li> */}
          
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
            <button onClick={() => handlenavigate("/profile")} >Profile</button>
            <button onClick={() => handlenavigate("/login")}>Login</button>
            <button onClick={() => handlenavigate("/signup")}>Signup</button>
            <button className="close-btn" onClick={() => setShowDialog(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
