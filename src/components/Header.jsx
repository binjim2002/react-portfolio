import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
    return (
        <Navbar bg="light">
            <Navbar.Brand href={`${process.env.PUBLIC_URL}/`}>Jimmy B. Kazadi</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav></Nav>
                <Nav >
                    <LinkContainer to="/contact">
                        <Nav.Link href={`${process.env.PUBLIC_URL}/contact`}>Contact</Nav.Link>
                    </LinkContainer>   
                    <LinkContainer to="/project">
                        <Nav.Link href={`${process.env.PUBLIC_URL}/project`}>Project</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/resume">
                        <Nav.Link href={`${process.env.PUBLIC_URL}/resume`}>Resume</Nav.Link>
                    </LinkContainer>
                   
                    
                </Nav>
            </Navbar.Collapse>
            
        </Navbar>
       
    );
};

export default Header;