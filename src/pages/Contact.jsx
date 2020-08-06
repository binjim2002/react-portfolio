import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Banner from '../components/Banner'

const Contact = () => {
    return (
        <div>
            <Banner text="How to get in touch with me..."/>
            <Container>
                <section className="justify-content-md-center">
                    <p className="text-center"><strong>Email:</strong> <a href="mailto:binjim2002@yahoo.fr">binjim2002@yahoo.fr</a></p>
                    <p className="text-center"><strong>GitHub:</strong> <a href="https://github.com/binjim2002">https://github.com/binjim2002</a></p>
                    <p className="text-center"><strong>Phone:</strong> <a href="phone:+14044384601">404-438-4601</a> </p>
                </section>
            </Container>
        </div>
    );
};

export default Contact;