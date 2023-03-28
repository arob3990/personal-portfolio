import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

import seattle from '../../Assets/seattle-skyline.jpg'


export default function About() {
  return (
    <Container>
      <h1>About Me</h1>
     
      <img
          src={seattle} alt="seattle-skyline"
          height={350}
          width={800}
          className = 'homepage-img'
        />
      
      <p>
        Hi there! My name is Alex Robertson and I'm a current full-stack web development student based in Seattle, Wa.
        My website contains examples of my work in my Portfolio page as well as a link to my most current resume.
        Feel free to contact me for more information or access my LinkedIn or Github pages by clicking the links below.
      </p>
    </Container>
  );
}
