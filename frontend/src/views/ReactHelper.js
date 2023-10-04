import React from 'react';
import {Row, Col, Container} from 'react-bootstrap'
import TechniqueCard from '../components/TechniqueCard/TechniqueCard';
import Title from '../components/Title/Title'
import "../styles/styles.css"

const ReactHelper = () => {
  return (
    <div className="reactHelperPage" style={{ height: '100vh' }}>
      <Title title="React Technique / Component List"/>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} sm={12} md={12} lg={4} x1={3}><TechniqueCard cardTitle="Containers" cardText="..."/></Col>
          <Col xs={12} sm={12} md={12} lg={4} x1={3}><TechniqueCard cardTitle="SplitScreens" cardText="..."/></Col>
        </Row>
      </Container>
    </div>
  );
};
  
export default ReactHelper;