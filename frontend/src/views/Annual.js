
import React from 'react';
import { Container, Card, Form, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const AnnualReport = () => {
  return (
    <Container>
      <Row className="justify-content-md-center mb-3">
            <p style={{textAlign: "center", marginBottom: "0"}}>Moderator?</p>
            <Link className="redirectLink line" to="/moderator">Moderator Page</Link>
          </Row>
          <Row className="justify-content-md-center mb-3">
            <p style={{textAlign: "center", marginBottom: "0"}}>Admin?</p>
            <Link className="redirectLink line" to="/admin">Admin Page</Link>
          </Row>
          <Row className="justify-content-md-center mb-3">
            <p style={{textAlign: "center", marginBottom: "0"}}>Want to go to missing page?</p>
            <Link className="redirectLink line" to="/aimsdnmasd">Missing</Link>
          </Row>
    </Container>
  );
};
  
export default AnnualReport;