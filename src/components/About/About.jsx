import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import ProjectImg from '../Image/ProjectImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, img2, img3, paragraphOne, paragraphTwo, resume } = about;
  const aboutArr = ['Avid competitor in many STEM competitions and hackathons including:', <br />,'• Captain of a CTF team that placed 9th Nationally in Carnegie Mellon\'s PicoCTF',<br />,'• Founder, President, and Captain of a Platinum Division ranked team in CyberPatriot',<br />,'• National "Scholar with Honors" scholarship receiver for 10th place at the National Cyber Scholarship Foundation Cybersecurity Competition',<br />,'• 3rd place finalist ranking at Technology Student’s Association Nationals',<br />,'• Top 3 finalist ranking in State-Level Science Olympiad (3x)',<br />,'• Gold Division Level USACO member',<br />,'• avid Speech and Debate enthusiast'];

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
                  {aboutArr}
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
      <Container className="mt-5">
        <Title title="My Interests" />
        <div className="cards-wrapper">
          <Row xs={1} md={3} className="container">
            <div className="card">
              <div className={isDesktop ? 'face face1' : 'mobile-face'}>
                <div className="content">
                  <img
                    alt="content"
                    src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true"
                  />
                  <h3>Design</h3>
                </div>
              </div>
              <div className={isDesktop ? 'face face2' : 'mobile-face mobile-face2'}>
                <div className="content">
                  <p>
                    Designed products and services and managed projects for two own startups and 
                    designed many other apps and pieces of software to help lead a vision of a future in 
                    technology
                  </p>
                </div>
              </div>
            </div>
            <div className="card active">
              <div className={isDesktop ? 'face face1' : 'mobile-face'}>
                <div className="content">
                  <img
                    alt="content"
                    src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true"
                  />
                  <h3>Code</h3>
                </div>
              </div>
              <div className={isDesktop ? 'face face2' : 'mobile-face mobile-face2'}>
                <div className="content">
                  <p>
                    Experience with programming and using several languages including C#, Python, Java, C++, Javascript, PHP, 
                    CSS, SQL, HTML, and currently learning C and Rust. Using code to help people as well as create 
                    a better future for our world.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className={isDesktop ? 'face face1' : 'mobile-face'}>
                <div className="content">
                  <img
                    alt="content"
                    src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true"
                  />
                  <h3>Launch</h3>
                </div>
              </div>
              <div className={isDesktop ? 'face face2' : 'mobile-face mobile-face2'}>
                <div className="content">
                  <p>
                    Successfully launched several commercially successful apps, software applications, websites, and open-source projects 
                    while still in High School. Experience with managing projects, finances, testing, and 
                    deploying applications.
                  </p>
                </div>
              </div>
            </div>
          </Row>
        </div>
      </Container>
      <Container className="mt-5">
        <Title title="My Interests" />
        <div className="cards-wrapper">
          <Row xs={1} md={3} className="container">
            <div className="card active">
              <div className={isDesktop ? 'face face1' : 'mobile-face'}>
                <div className="content">
                  <img
                    alt="logo"
                    src="https://github.com/ZeroDayTea/Personal-Website-Source/blob/main/src/images/dupperanalyticsfulllogo.jpg?raw=true"
                  />
                  <h3>Dupper Analytics</h3>
                  <br></br>
                  <h4>Co-Founder and Vice President of Engineering</h4>
                </div>
              </div>
              <div className={isDesktop ? 'face face2' : 'mobile-face mobile-face2'}>
                <div className="content">
                  <p>
                    Developed and distributed the Dupper Analytics Cloud-Based Solutions product which performs 
                    data collection, storage, and analytics for small and medium size busineeses in order to 
                    help them compete and succeed in an increasingly data-driven world.
                  </p>
                </div>
              </div>
            </div>
            <div className="card active">
              <div className={isDesktop ? 'face face1' : 'mobile-face'}>
                <div className="content">
                  <img
                    alt="logo"
                    src="https://github.com/ZeroDayTea/Personal-Website-Source/blob/main/src/images/connect.jpg?raw=true"
                  />
                  <h3>Cygnel Studios</h3>
                  <br></br>
                  <h4>Founder and CEO</h4>
                </div>
              </div>
              <div className={isDesktop ? 'face face2' : 'mobile-face mobile-face2'}>
                <div className="content">
                  <p>
                    Developed several pieces of software and application including BirbChat, a secure modern 
                    messaging application with a comforting aesthetic, CompSci Lumin, a social connections 
                    platform to help students connect with computer science opportunities near them and learn
                    more about computer science, as well as two games on Steam.
                  </p>
                </div>
              </div>
            </div>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default About;
