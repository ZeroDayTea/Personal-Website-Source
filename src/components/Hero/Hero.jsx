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
              "I'm Known"
            )}
          </Col>
          <Col>
            <h1 className="hero-title yellow">TL;DR</h1>
            <p align="left">
              High School student, computer science enthusiast, and entrepreneur with a 
              passion for software development, full-stack development, and cybersecurity 
              who has founded and been CEO/VPE of two own companies (S-Corp and LLC). Competitor 
              in a variety of computer science, STEM, and cybersecurity competitions, and 
              winner of several National titles from various esteemed sources. Passionate 
              about learning and creating in order to develop practical business solutions 
              with code and design a brighter future in technology.
            </p>
          </Col>
        </Row>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
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
