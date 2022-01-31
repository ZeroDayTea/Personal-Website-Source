import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';

const Contact = () => {
  return (
    <section id="contact">
      <Container>
        <Title title="Awards and Certifications" />
        <div className="contact-wrapper">
            <Fade bottom duration={1000} delay={800} distance="30px">
              <Row xs={1} md={1}>
                <Col>
                  <ul>
                    <li>
                      <div className="info info-text">
                        <h4>Cybersecurity</h4>
                        <div className="hr" />
                        <ul>
                          <li>
                            <p>Platinum Division National Semifinalist CyberPatriot</p>
                          </li>
                          <li>
                            <p><a href="https://www.nationalcyberscholarship.org/winners-2021" target="_blank" style={{color: 'pink'}}>"National Cyber Scholar With Honors"</a> from National Cyber Scholarship Foundation</p>
                          </li>
                          <li>
                            <p>9th Place CMU PicoCTF (Team Captain)</p>
                          </li>
                          <li>
                            <p>3rd Place National redpwnCTF</p>
                          </li>
                          <li>
                            <p>3rd Place National NACTF</p>
                          </li>
                          <li>
                            <p>5th Place National HSCTF</p>
                          </li>
                        </ul>
                      </div>
                    </li>
                    
                    <li>
                      <div className="info info-text">
                        <h4>TSA</h4>
                        <div className="hr" />
                        <ul>
                          <li>
                            <p>3rd Place National, Cybersecurity</p>
                          </li>
                          <li>
                            <p>Top 10 National, Video Game Design</p>
                          </li>
                          <li>
                            <p>2nd Place State, Technology Bowl </p>
                          </li>
                          <li>
                            <p>3rd Place State, Video Game Design </p>
                          </li>
                          <li>
                            <p>3rd Place State, Webmaster </p>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <div className="info info-text">
                          <h4>Science Olympiad</h4>
                          <div className="hr" />
                          <ul>
                            <li>
                              <p>2nd Place State, Detector building</p>
                            </li>
                            <li>
                              <p>2nd Place State, Herpetology</p>
                            </li>
                            <li>
                              <p>3rd Place State, Astronomy</p>
                            </li>
                            <li>
                              <p>5th Place State, Circuits</p>
                            </li>
                            <li>
                              <p>2nd Place Regionals, Herpetology</p>
                            </li>
                            <li>
                              <p>3rd Place Regionals, Circuits</p>
                            </li>
                            <li>
                              <p>6th Place Regionals, Astronomy</p>
                            </li>
                          </ul>
                      </div>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Fade>
        </div>
      </Container>


      <Container>
        <Title title="Contact" />
        <div className="contact-wrapper">
          <Fade bottom duration={1000} delay={800} distance="30px">
            <Row xs={1} md={1}>
              <Col>
                <ul>
                  <li>
                    <div className="info info-text">
                      <h4>Feel free to contact me!</h4>
                      <div className="hr" />
                    </div>
                  </li>
                  <li>
                    <i className="fa fa-phone" />
                    <div className="info">
                      <h4 className="">Phone</h4>
                      <span>
                        <a className="" href="tel:+1-7204477515">
                          +1 720-448-7515
                        </a>
                      </span>
                    </div>
                  </li>
                  <li>
                    <i className="fa fa-envelope" />
                    <div className="info">
                      <h4>Email</h4>
                      <span>
                        <a href="mailto:patrick.dobranowski@gmail.com">
                          patrick.dobranowski@gmail.com
                        </a>
                        <br></br>
                        <a href="mailto:patrick@dupperanalytics.com">
                          patrick@dupperanalytics.com
                        </a>
                      </span>
                    </div>
                  </li>
                  <li>
                    <i className="fa fa-compass" />
                    <div className="info">
                      <h4>Location</h4>
                      <span>
                        <a>Castle Pines, Colorado</a>
                      </span>
                    </div>
                  </li>
                </ul>
              </Col>
            </Row>
          </Fade>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
