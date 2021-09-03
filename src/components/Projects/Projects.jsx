import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);
  const splitArr = (arr, len) => {
    const chunks = [];
    let i = 0;
    const n = arr.length;
    while (i < n) {
      chunks.push(arr.slice(i, (i += len)));
    }
    return chunks;
  };
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
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="My Companies" />
          <Row xs={1} md={2} lg={2}>
                <Col className="col">
                  <div className="post-module">
                    <div className="thumbnail">
                      <div className="date">
                        <div className="day">2021</div>
                      </div>
                      <div className="category">Data Analytics</div>
                      <ProjectImg alt="Dupper Analytics Logo" filename="dupperanalytics.jpg" />
                    </div>
                    <div className="post-content">
                      <div className="post-meta">
                        <h1 className="title">Dupper Analytics</h1>
                        <h2 className="sub_title">
                        Co-Founder and Vice President of Engineering
                        </h2>
                      </div>
                      <div className="description">
                        <p>
                          Developed and distributed the Dupper Analytics Cloud-Based Solutions product which performs 
                          data collection, storage, and analytics for small and medium size busineeses in order to 
                          help them compete and succeed in an increasingly data-driven world.
                        </p>
                        <a href="http://dupperanalytics.com/" target="_blank">Learn More</a>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="col">
                  <div className="post-module">
                    <div className="thumbnail">
                      <div className="date">
                        <div className="day">2020</div>
                      </div>
                      <div className="category">{'Social Networks & Entertainment'}</div>
                      <ProjectImg alt="Cygnel Studios Logo" filename="cygnelogo.jpg" />
                    </div>
                    <div className="post-content">
                      <div className="post-meta">
                        <h1 className="title">Cygnel Studios</h1>
                        <h2 className="sub_title">
                          Founder and CEO
                        </h2>
                      </div>
                      <div className="description">
                        <p>
                          Developed several pieces of software and application including BirbChat, a secure modern 
                          messaging application with a comforting aesthetic, CompSci Lumin, a social connections 
                          platform to help students connect with computer science opportunities near them and learn
                          more about computer science, as well as two games on Steam.
                        </p>
                        <a href="http://dupperanalytics.com/" target="_blank">Learn More</a>
                      </div>
                    </div>
                  </div>
                </Col>
          </Row>
        </div>
      </Container>
      <br></br>
      <br></br>
      <br></br>
      <Container>
        <div className="project-wrapper">
          <Title title="Projects Portfolio" />
          <Row xs={1} md={2} lg={3}>
            {projects.map((project) => {
              const { img, year, title, cat, sub, text, url } = project;
              return (
                <Col className="col">
                  <div className="post-module">
                    <div className="thumbnail">
                      <div className="date">
                        <div className="day">{year}</div>
                      </div>
                      <div className="category">{cat}</div>
                      <ProjectImg alt="pen" filename={img} />
                    </div>
                    <div className="post-content">
                      <div className="post-meta">
                        <h1 className="title">{title}</h1>
                        <h2 className="sub_title">{sub}</h2>
                      </div>
                      <div className="description">
                        <p>{text}</p>
                        <a href={url} target="_blank">Learn More</a>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
