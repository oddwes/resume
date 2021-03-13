import "./App.css";
import React from 'react';
import { Card, Container, Row, Col } from "react-bootstrap";
import { List } from 'semantic-ui-react';

import Line from "./Line";

function App() {
  return (
    <Container style={{ padding: '20px' }}>
      <Card>
        <Card.Header style={{ color: 'white', backgroundColor: "#30353F" }}>
          <h1>Julian Lai</h1>
          <h3>An enthusiastic developer looking for his next project to obsess over</h3>
          <div>
            <b>Phone</b> (514) 962-4384
          </div>
          <div>
            <b>E-mail</b> julianlai.777@gmail.com
          </div>
          <div>
            <b>Linkedin</b> linkedin.com/in/julian-lai-06223795
          </div>
        </Card.Header>
        <Card.Body text="black">
          <Container>
            <h3>Work</h3>
            <Line />
            <Row>
              <Col sm={2} className="centered">
                <b>2017-11 ~ Current</b>
              </Col>
              <Col>
                <p>
                  <b>System Integrations Developer</b><br />
                  <i>Diff Agency, Montreal, QC</i>
                </p>
                <p className="pl-4">
                  <List bulleted>
                    <List.Item>Design and development of custom middleware integrating Shopify with ERPs, WMSs, carrier services</List.Item>
                    <List.Item>Design and development of user-friendly admin dashboards which include job scheduling, product management, order processing, reporting</List.Item>
                    <List.Item>Developed ramp-up project to familiarize new developers with common integration business requirements and tech stack</List.Item>
                    <List.Item>Technologies: Ruby on Rails, Postgresql, AWS, Ansible, Capistrano, Git</List.Item>
                  </List>
                </p>
              </Col>
            </Row>
            <Row className="py-4">
              <Col sm={2} className="centered">
                <b>2015-09 ~ 2017-10</b>
              </Col>
              <Col>
                <p>
                  <b>Java developer</b><br />
                  <i>123Certification, Montreal, QC</i>
                </p>
                <p className="pl-4">
                  <List bulleted>
                    <List.Item>Welding simulator (Arc+)</List.Item>
                    <List.Item>3D visual tracking system integration with calibration module</List.Item>
                    <List.Item>Visual tracking system integration. Tracking calibration module</List.Item>
                    <List.Item>Setup of SVN and Jenkins servers</List.Item>
                    <List.Item>Technologies: Java, Jenkins, SVN</List.Item>
                  </List>
                </p>
              </Col>
            </Row>
          </Container>
          <Container>
            <h3>Personal Projects</h3>
            <Line />
            <Container className="pl-4">
              <p>
                <b>Resume Webpage</b><br />
              </p>
              <p className="pb-4 pl-2">
                <List bulleted>
                  <List.Item>Technologies: React, Docker, Kubernetes, Gitlab CI/CD</List.Item>
                </List>
              </p>
            </Container>
          </Container>
          <Container>
            <h3>Education</h3>
            <Line />
            <Row>
              <Col sm={2} className="centered">
                <b>2011-09 ~ 2016-04</b>
              </Col>
              <Col>
                <b>Bachelar of Engineering (Computer Engineering)</b><br />
                <i>Concordia University</i>
              </Col>
            </Row>
            <Row className="py-4">
              <Col sm={2} className="centered">
                <b>2009-09 ~ 2011-04</b>
              </Col>
              <Col>
                <b>Bachelor of Science: Pure and Applied Sciences</b><br />
                <i>Marianopolis College</i>
              </Col>
            </Row>
          </Container>
          <Container>
            <h3>School Projects</h3>
            <Line />
            <Row>
              <Col sm={2} className="centered">
                <b>2014-09 ~ 2015-03</b>
              </Col>
              <Col>
                <b>Orchestr8 - Capstone Project</b><br />
                Musical interpreter, music sheet generator and robotic piano player
              </Col>
            </Row>
            <Row className="py-4">
              <Col sm={2} className="centered">
                <b>2013-09 ~ 2013-12</b>
              </Col>
              <Col>
                <b>"Sumo" Robot</b><br />
                Atmega8 microcontroller, edge detection and opponent tracking
              </Col>
            </Row>
          </Container>
          <Container>
            <h3>Technologies</h3>
            <Line />
            <div className="pl-4">
              Ruby on Rails, React, NodeJS<br />
              Docker, Kubernetes, AWS, Ansible, Git<br />
              Mac, Linux, Windows
            </div>
          </Container>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default App;
