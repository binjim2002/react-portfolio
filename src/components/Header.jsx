import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

const Header = () => {
    return (
        <Navbar bg="light">
            <Navbar.Brand href={`${process.env.PUBLIC_URL}/`}>Jimmy B. Kazadi</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav></Nav>
                <Nav >
                    <Nav.Link href={`${process.env.PUBLIC_URL}/contact`}>Contact</Nav.Link>
                    <Nav.Link href={`${process.env.PUBLIC_URL}/project`}>Project</Nav.Link>
                    <Nav.Link href={`${process.env.PUBLIC_URL}/resume`}>Resume</Nav.Link>

                    
                </Nav>
            </Navbar.Collapse>
            
        </Navbar>
       
    );
};

export default Header;