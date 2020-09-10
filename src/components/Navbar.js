import React, { Component } from 'react'
import etudesLogo from '../assets/logo-horizontal.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGuitar } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
        return (
            <div className="nav">
                <img className="etudes-logo" alt="etudes-co-logo" src={etudesLogo}></img>          
                <button type="button" className="record-btn">
                  <FontAwesomeIcon className="fa-3x record-icon" icon={faGuitar} />
                </button>      
            </div>
        )
}

export default Navbar
