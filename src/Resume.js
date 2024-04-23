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
				<Card id='divToPrint'>
					<Card.Header style={{ color: 'white', backgroundColor: "#30353F" }}>
						<h1>Julian Lai</h1>
						<h3>An enthusiastic developer looking for his next project to obsess over</h3>
						<div>
							<b>Phone</b> (778) 682-4384
						</div>
						<div>
							<b>E-mail</b> julianlai.777@gmail.com
						</div>
					</Card.Header>
					<Card.Body text="black">
						<Container>
							<h3>Work</h3>
							<Line />
							<Row className="pl-4">
								<Col>
									<p>
										<b>Senior Fullstack Developer </b>(2021 ~ Present)
										<br />
										<i>Jane.app, Vancouver, BC</i><br />
									</p>
									<p className="pl-4">
										<List bulleted>
											<List.Item>Project lead for Waitlist Notifications, Late Cancellation Fees and Group Profiles</List.Item>
											<List.Item>Jane intern program mentor</List.Item>
											<List.Item>Technologies: Ruby on Rails, React, Typescript, Docker, Postgresql, Git</List.Item>
										</List>
									</p>
								</Col>
							</Row>
							<br/>
							<Row className="pl-4">
								<Col>
									<p>
										<b>System Integrations Developer & Team Lead </b>(2017 ~ 2021)
										<br />
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
							<br/>
							<Row className="pl-4">
								<Col>
									<p>
										<b>Java Developer </b>(2015 ~ 2017)
										<br />
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
							<br/>
						</Container>
						<Container>
							<h3>Education</h3>
							<Line />
							<div className="pl-4">
								<List bulleted>
									<List.Item>
										<b>Learn Solidity & Etherem Dev Bootcamp</b><br />
										<i>Alchemy University</i>
									</List.Item>
									<List.Item>
										<b>Bachelor of Engineering (Computer Engineering)</b><br />
										<i>Concordia University</i>
									</List.Item>
									<List.Item>
										<b>Bachelor of Science (Pure and Applied Sciences)</b><br />
										<i>Marianopolis College</i>
									</List.Item>
								</List>
							</div>
							<br/>
						</Container>
						<Container>
							<h3>School Projects</h3>
							<Line />
							<div className="pl-4">
								<List bulleted>
										<List.Item>
											<b>Orchestr8 - Capstone Project</b><br />
											Musical interpreter, music sheet generator and robotic piano player
										</List.Item>
										<List.Item>
											<b>"Sumo" Robot</b><br />
											Atmega8 microcontroller, edge detection and opponent tracking
										</List.Item>
									</List>
							</div>
							<br/>
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