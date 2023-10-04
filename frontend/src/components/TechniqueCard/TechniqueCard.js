import Card from 'react-bootstrap/Card'
import "../../styles/styles.css";

const TechniqueCard = (children) => {
  const {cardTitle, cardText} = children;
  return (
    <Card className='customCard mb-3'>
      <Card.Body>
        <Card.Title className='customCardTitle'>{cardTitle}</Card.Title>
        <Card.Text>
          {cardText}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default TechniqueCard;