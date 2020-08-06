import React from 'react';
import {useLocation} from 'react-router-dom';
import {Jumbotron, Container} from 'react-bootstrap'

const Banner = ({text}) => {
    let location = useLocation();
    let title = location.pathname.substring(1);
    return (
        <Jumbotron fluid className="bg-dark text-white">
                <Container>
                    <h1>{title.charAt(0).toUpperCase() + title.slice(1)}</h1>
                    <p>
                    {text}
                    </p>
                </Container>
            </Jumbotron>
    );
};

export default Banner;