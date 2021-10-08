import React from 'react';
import { Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faAddressBook,faBicycle } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
    const homeIcon= <Link to="/home"><FontAwesomeIcon icon={faHome} size="lg" style={{color:'black'}}/></Link>;
    const adressIcon= <Link to="/about"><FontAwesomeIcon icon={faAddressBook} size="lg" style={{color:'black'}} /></Link>;
    const bicycleIcon=<Link to="/services"><FontAwesomeIcon icon={faBicycle} size="lg" style={{color:'black'}}/></Link>;

    return (
        <div>
            <Alert variant='dark' className="footer-design">
                {homeIcon} {adressIcon} {bicycleIcon}
            </Alert>
        </div>
    );
};


export default Footer;