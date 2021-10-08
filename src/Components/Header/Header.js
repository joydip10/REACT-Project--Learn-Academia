import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
const Header = () => {
    const history = useHistory();

    const handleHome = () => {
        history.push('/home');
    }

    const handleAbout = () => {
        history.push('/about');
    }

    const handleOpp = () => {
        history.push('/opportunities');
    }

    const handleServices = () => {
        history.push('/services');
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link onClick={handleHome}>Home</Nav.Link>
                        <Nav.Link onClick={handleServices}>Services</Nav.Link>
                        <Nav.Link onClick={handleAbout}>About Us</Nav.Link>
                        <Nav.Link onClick={handleOpp}>Opportunities</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;