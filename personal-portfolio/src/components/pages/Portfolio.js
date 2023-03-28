import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioItem from '../PortfolioItems/index';
import maze from '../../Assets/maze.jpg';
import notes from '../../Assets/notes.jpg';
import rugby from '../../Assets/rugby.jpg';


export default function Portfolio() {
  return (
    <Container fluid className='portfolio-section'>
      <Container>
        <h1 className='portfolio-heading'>My Personal Portfolio</h1>
        <p style ={{color: 'white' }}>
          Below you can find examples of my work below:
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px'}}>
          <Col md={4} className='portfolio-card'>
            <PortfolioItem
              imgPath={maze}
              title='Text Editor'
              description='Progressive Web Application to Edit Text'
              ghLink='https://github.com/arob3990/pwa-text-editor'
              />
          </Col>
          <Col md={4} className='portfolio-card'>
            <PortfolioItem
              imgPath={notes}
              title='Notes Application'
              description='Online Note Taking Application'
              ghLink='https://github.com/arob3990/Notes-Application'
              />
          </Col>
          <Col md={4} className='portfolio-card'>
            <PortfolioItem
              imgPath={rugby}
              title='Team Profile Generatior'
              description='Command Line Application to Create a Team'
              ghLink='https://github.com/arob3990/Team-Profile-Generator'
              />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}



