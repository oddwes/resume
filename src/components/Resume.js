import React from 'react';
import { Card } from "react-bootstrap";
import { Education } from "./Educations";
import { SchoolProjects } from "./SchoolProjects";
import { Technologies } from "./Technologies";
import { Work } from "./Work";

import '../stylesheets/Resume.css'
import "../App.css";
import { Header } from './Header';

export const Resume = () => {
	return (
		<div>
			<Card id='divToPrint' style={{width: '950px', margin: 'auto'}}>
				<Card.Header style={{ color: 'white', backgroundColor: "#30353F" }}>
					<Header />
				</Card.Header>
				<Card.Body text="black">
					<Work />
					<br />
					<Education />
					<br/>
					<SchoolProjects />
					<br />
					<Technologies />
				</Card.Body>
			</Card>
			<br />
		</div>
	)
}

export default Resume;