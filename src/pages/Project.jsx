import React, {useState} from 'react';
import {Row, Container, Col, Card} from 'react-bootstrap';
import day_planner from '../Assets/day-planner.PNG';
import good_spirit from '../Assets/goodspiritsapp.PNG';
import code_quiz from '../Assets/code-quiz.PNG';
import team_profile_generator from '../Assets/team-profile-generator-pix.PNG';
import note_taker from '../Assets/note-taker.PNG';
import burger_handlebars from '../Assets/burgerz-handlebars.PNG';
import empployee_management_system from '../Assets/employee-management-system-pix.PNG';


const projectData = [
    {
      title: 'Day Planner',
      img: day_planner,
      deployed: 'https://binjim2002.github.io/gt-jquery-homework/',
      repo: 'https://github.com/binjim2002/gt-jquery-homework'
    },
    {
      title: 'Good Spirit',
      img: good_spirit,
      deployed:'https://elizaregas.github.io/Good-Spirits/',
      repo: 'https://github.com/binjim2002/Good-Spirits'
    },
    {
      title: 'Code Quiz',
      img: code_quiz,
      deployed:'https://binjim2002.github.io/gt-code-quiz/.',
      repo: 'https://github.com/binjim2002/gt-code-quiz'
    },
    {
      title: 'Team Profile Generator',
      img: team_profile_generator,
      deployed: 'https://drive.google.com/file/d/1Bmpg1UDNRMb3ncYopIj9qFxrwED8pQO_/view',
      repo: 'https://github.com/binjim2002/gt-team-profile-generator'
    },
    {
      title: 'Note Taker',
      img: note_taker,
      deployed:'https://blooming-meadow-23336.herokuapp.com/',
      repo: 'https://github.com/binjim2002/express-notetaker'
    },
    {
      title: 'Burger Handlebars',
      img: burger_handlebars,
      deployed:'https://jimmyz-burgerz.herokuapp.com/',
      repo: 'https://github.com/binjim2002/burger'
    },
    {
      title: 'Employee Management System',
      img: empployee_management_system,
      deployed:'https://drive.google.com/file/d/1SVmxYDJAzMY8A0gTevWcHzXh1ZIDGvO8/view',
      repo: 'https://github.com/binjim2002/employee-management-system'
    }

  ];
    

const Project = () => {
    const [projects, setProjects] = useState(projectData);
    
    return (
        <div>
            <Container>
                <Row>
                    {projects.map(project => (
                        <Col md="4">
                            <Card className="w-100 mt-5">
                                <Card.Img variant="top" src={project.img} />
                                <Card.Body>
                                    <Card.Title>{project.title}</Card.Title>
                                    
                                    <Card.Link href={project.repo}>GitHub</Card.Link>
                                    <Card.Link href={project.deployed}>Visit</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}

                </Row>
            </Container>
        </div>
    );
};

export default Project;