import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, resume } = about;  
  
  const paragraphThree = ['In the past I helped launch Dupper Analytics, acting as its Vice President, writing software to help smaller and medium size businesses across the nation. Since then I have presented to many large tech corporations, hired students, and made entrepreneurship one of my greatest passions. I also hosted two own nationally successful cybersecurity competitions: ', <a href="https://pbjar.net/" target="_blank">PBJarCTF</a>, ' and ', <a href="https://killerqueenctf.org" target="_blank">Killer Queen CTF</a>, '. Designed challenges and administrated the competitions with over 3,000 participants, more than $2,800 dollars in cash prizes, as well as over $65,000 worth in cash from numerous tech company sponsors for cybersecurity education and women who code\n\n You can read some of the articles and blog posts I write ', <a href="https://squ1rrel.dev/author/ZeroDayTea/" target="_blank">here</a>];

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
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne}
                </p>

                <p className="about-wrapper__info-text">
                  {paragraphTwo}
                </p>

                <p className="about-wrapper__info-text">
                  {paragraphThree}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
