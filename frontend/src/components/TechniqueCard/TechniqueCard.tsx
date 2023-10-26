import React from 'react';
import Card from 'react-bootstrap/Card';
import '../../styles/styles.css';

interface TechniqueCardProps {
  cardTitle: string;
  cardText: string;
}
function TechniqueCard(props: TechniqueCardProps) {
  return (
    <Card className="customCard mb-3">
      <Card.Body>
        <Card.Title className="customCardTitle">{props.cardTitle}</Card.Title>
        <Card.Text>
          {props.cardText}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default TechniqueCard;
