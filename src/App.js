import "./App.css";
import React from 'react';
import { Card, Container, Navbar } from "react-bootstrap";


function App() {
  return (
    <Container>
      <Card text="white">
        <Card.Header style={{backgroundColor: "#30353F"}}>
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
        <Card.Body>

        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;
