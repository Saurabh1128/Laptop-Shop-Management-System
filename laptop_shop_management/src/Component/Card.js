import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'bootstrap';


function Cards() {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="Tuf A15.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
  );
}

export default Cards;