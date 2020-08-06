import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

const Header = () => {
    return (
        <Navbar bg="light">
            <Navbar.Brand href="/">Jimmy B. Kazadi</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav></Nav>
                <Nav >
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    <Nav.Link href="/project">Project</Nav.Link>
                    <Nav.Link href="/resume">Resume</Nav.Link>

                    
                </Nav>
            </Navbar.Collapse>
            
        </Navbar>
       
    );
};

export default Header;