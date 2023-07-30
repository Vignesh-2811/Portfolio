import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import ecom from '../../Assets/Projects/E-Commerce.jpg';
import tsa from '../../Assets/Projects/tsa.jpg';
import filmfusion from '../../Assets/Projects/film-fusion.png';
import random from '../../Assets/Projects/random.png';
import fdfsc from '../../Assets/Projects/fdfsc.jpg';
import tmt from '../../Assets/Projects/tmt.svg';

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          My Recent <strong className='purple'>Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={tmt}
              isBlog={false}
              title='Take My Tickets'
              description='TakeMyTickets is a web app that aims to revolutionize the ticket buying and selling experience.
•A Go-to platform for people to buy and sell tickets to events, concerts, games, and more. By providing a seamless, secure,
and user-friendly platform.'
              demoLink='https://www.takemytickets.co.in/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={filmfusion}
              isBlog={false}
              title='Film Fusion'
              description='A stunning video streaming site with React and Tailwind CSS, offering seamless video playback and responsive design. Users can search, explore categories, and personalize their experience through authentication and playlist creation.'
              ghLink='https://github.com/Vignesh-2811/Film-Fusion'
              demoLink='https://filmfusion.netlify.app'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title='E-Commerce Web Application'
              description='By combining PHP, MySQL, and Bootstrap, this e-commerce website project provides a robust and user-friendly platform for online shopping. It facilitates product discovery, seamless shopping experiences, and efficient order management for both users and administrators.'
              ghLink='https://github.com/Vignesh-2811/Ecommerce-Website'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={fdfsc}
              isBlog={false}
              title='Fight Detection from Surveillance Cameras'
              description='A specific application for detecting fights from surveillance cameras in public areas, prisons, etc., to get violent incidents under control quickly to reduce casualties.'
              ghLink='https://github.com/Vignesh-2811/fight-detection-from-surveillance-cameras'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={tsa}
              isBlog={false}
              title='Twitter Sentiment Analysis'
              description='A sentiment analysis tool that analyzes the sentiment (positive, negative, or neutral) of tweets related to a specific Twitter handle. It utilizes the Tweepy API, a Python library for accessing the Twitter API, to gather tweets and perform sentiment analysis.'
              ghLink='https://github.com/Vignesh-2811/TSAnalysis'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={random}
              isBlog={false}
              title='Random Quote Machine'
              description='Get inspired with the random quote machine, generating motivational quotes at the click of a button. Discover wisdom effortlessly as the random quote machine presents thought-provoking quotes randomly. Instantly access a collection of inspirational quotes with the random quote machine, fueling inspiration in a single click.'
              ghLink='https://github.com/Vignesh-2811/Random-Quote-Machine'
              demoLink='https://vignesh-2811.github.io/Random-Quote-Machine/'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
