import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container className={isMobile && 'mobile'}>
        <a href="" className="float">
          <Link to="projects" smooth duration={1000}>
            <i className="fa fa-file icon" />
            <p className="text">My Projects</p>
          </Link>
        </a>
        <h1 className="hero-title">
          <div className={isDesktop ? 'typing' : ''}>
            {title}{' '}
            <span className="text-color-main">{name}</span>
          </div>
          <br />
        </h1>
        <Row xs={1} md={2} lg={12}>
          <Col>
            {subtitle ? (
              <Row id="hero-subtitle">
                <h1 className="hero-title cyan">{`${subtitle[0]} `}</h1>
                <h1 className="hero-title orange">{`${subtitle[1]} `}</h1>
                <h1 className="hero-title pink">{`${subtitle[2]} `}</h1>
                <h1 className="hero-title purple">...</h1>
              </Row>
            ) : (
              "Nyello! Looks like something didn't work :( Try reloading the page or trying again at another time"
            )}
          </Col>
          <Col>
            <h1 className="hero-title yellow">TL;DR</h1>
            <br></br>
            <p align="left" style={{fontSize: 17}}>
              Student, computer science enthusiast, and researcher with a 
              passion for development, cybersecurity, and physics who has helped launch and 
              been VPE of own company. Competitor in a variety of computer science, STEM, and 
              cybersecurity competitions, and winner of several National titles from various 
              esteemed sources. Passionate about learning and creating in order to develop 
              a brighter future in technology.
            </p>
          </Col>
        </Row>
        <Fade left={isDesktop} bottom={isMobile} duration={500} delay={500} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={500}>
                {cta || 'Know more'}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
