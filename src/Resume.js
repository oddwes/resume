import "./App.css";
import React from 'react';
import { Card, Container, Row, Col } from "react-bootstrap";
import { List } from 'semantic-ui-react';
import Line from "./Line";

class Resume extends React.Component {
	render() {
		return (
			<Container>
				<br />
				<Card>
					<Card.Header style={{ color: 'white', backgroundColor: "#30353F" }}>
						<h1>oddwes</h1>
						<h3>An enthusiastic developer looking for his next project to obsess over</h3>
						<div>
							<b>Phone</b> (778) 682-4384
						</div>
						<div>
							<b>E-mail</b> oddwes3.0@gmail.com
						</div>
					</Card.Header>
					<Card.Body text="black">
						<Container>
							<h3>Work</h3>
							<Line />
							<Row className="pb-4">
								<Col sm={2} className="centered">
									<b>2021 ~ Present</b>
								</Col>
								<Col>
									<p>
										<b>Senior Ruby Developer</b><br />
										<i>Jane.app, Vancouver, BC</i>
									</p>
									<p className="pl-4">
										<List bulleted>
											<List.Item>Project lead for Waitlist Notifications, Late Cancellation Fees and Group Profiles</List.Item>
											<List.Item>Jane intern program mentor</List.Item>
										</List>
									</p>
								</Col>
							</Row>
							<Row className="pb-4">
								<Col sm={2} className="centered">
									<b>2017 ~ 2021</b>
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
							<Row className="pb-4">
								<Col sm={2} className="centered">
									<b>2015 ~ 2017</b>
								</Col>
								<Col>
									<p>
										<b>Java Developer</b><br />
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
							<h3>Education</h3>
							<Line />
							<Row>
								<Col sm={2} className="centered">
									<b>2024</b>
								</Col>
								<Col>
									<b>Learn Solidity & Etherem Dev Bootcamp</b><br />
									<i>Alchemy University</i>
								</Col>
							</Row>
							<br />
							<Row>
								<Col sm={2} className="centered">
									<b>2011 ~ 2016</b>
								</Col>
								<Col>
									<b>Bachelor of Engineering (Computer Engineering)</b><br />
									<i>Concordia University</i>
								</Col>
							</Row>
							<Row className="py-4">
								<Col sm={2} className="centered">
									<b>2009~ 2011</b>
								</Col>
								<Col>
									<b>Bachelor of Science (Pure and Applied Sciences)</b><br />
									<i>Marianopolis College</i>
								</Col>
							</Row>
						</Container>
						<Container>
							<h3>School Projects</h3>
							<Line />
							<Row>
								<Col sm={2} className="centered">
									<b>2014 ~ 2015</b>
								</Col>
								<Col>
									<b>Orchestr8 - Capstone Project</b><br />
									Musical interpreter, music sheet generator and robotic piano player
								</Col>
							</Row>
							<Row className="py-4">
								<Col sm={2} className="centered">
									<b>2013 ~ 2013</b>
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
								Ruby on Rails, React, NodeJS, Python, Solidity<br />
								Docker, Kubernetes, AWS, Ansible, Git<br />
								Mac, Linux, Windows
							</div>
						</Container>
					</Card.Body>
				</Card>
				<br />
			</Container>
		)
	}
}

export default Resume;