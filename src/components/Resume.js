import "../App.css";
import React, { useContext } from 'react';
import { Card, Container, Row, Col, Nav } from "react-bootstrap";
import { List } from 'semantic-ui-react';
import Line from "./Line";
import { VariantContext } from "./Variant";

export const Resume = () => {
	const variant = useContext(VariantContext)

	const name =
		variant === 'regular'
			? (<h1>Julian Lai</h1>)
			: (<h1>oddwes</h1>)

	const contactInfo =
		variant === 'regular' ?
			(
				<React.Fragment>
					<div>
						<b>Phone</b> (778) 682-4384
					</div>
					<div>
						<b>E-mail</b> julianlai.777@gmail.com
					</div>
				</React.Fragment>
			) :
			(
				<React.Fragment>
					<div>
						<b>Telegram</b> @oddwes
					</div>
					<div>
						<b>Discord</b> @oddwes
					</div>
					<div>
						<b>E-mail</b> oddwes3.0@gmail.com
					</div>
				</React.Fragment>
			)

	return (
		<Container>
			{console.log(variant)}
			<Card id='divToPrint' style={{width: '850px', margin: 'auto'}}>
				<Card.Header style={{ color: 'white', backgroundColor: "#30353F" }}>
					{name}
					{contactInfo}
				</Card.Header>
				<Card.Body text="black">
					<Container>
						<h3>Work</h3>
						<Line />
						<Row className="pl-4">
							<Col>
								<p>
									<b>Fullstack Developer </b>(2021 ~ Present)
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
									<b>System Integrations Developer</b>(2017 ~ 2021)
									<br />
									<i>Diff Agency, Montreal, QC</i>
								</p>
								<p className="pl-4">
									<List bulleted>
											<List.Item>Project lead for Sakara Subscriptions, Ontario Cannabis Store Order Processing, Boathouse Store Order Routing</List.Item>
											<List.Item>Shopify integrations with ERPs, WMSs, carrier services</List.Item>
											<List.Item>Automated product catalog management, order processing & reporting</List.Item>
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

export default Resume;