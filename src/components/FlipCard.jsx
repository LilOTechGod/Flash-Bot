import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { ShieldCheckIcon, ThumbsupIcon, NumberIcon } from '@primer/octicons-react';


function FlipCard() {
  return (
    <>

    <style type="text/css">
        {`
          .card {
            padding: 10px;
          }
          .info {
            margin-bottom: 5rem;
          }
          .icon {
            margin: auto;
          }
        `}
    </style>

    <CardGroup className='info'>
      <Card>
        <ThumbsupIcon size={150} className='icon' />
        <Card.Body>
          <Card.Title>Reliable</Card.Title>
          <Card.Text>
            Be at ease knowing that you'll get what you want! Don't worry about missing out on the next drop.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 1 month ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <ShieldCheckIcon size={150} className='icon'/>
        <Card.Body>
          <Card.Title>Safe & Secure</Card.Title>
          <Card.Text>
            Your in control, so don't worry about your personal information being leaked or malicious users accessing your account.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 1 month ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <NumberIcon size={150} className='icon'/>
        <Card.Body>
          <Card.Title>Easy to Use</Card.Title>
          <Card.Text>
            We'll provide you with step by step instructions on how to use the bot. 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 1 month ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </>
  );
}

export default FlipCard;
