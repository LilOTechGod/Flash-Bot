import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import secPic from '../assets/security-574079_640.jpg';

function FlipCard() {
  return (
    <>

    <style type="text/css">
        {`
          .card {
            margin: 20px;
          }
        `}
    </style>

    <CardGroup className='info'>
      <Card>
        <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.JQhsOJu_MkiZ3PMl8ssxuAHaHa?w=160&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
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
        <Card.Img variant="top" src='https://th.bing.com/th/id/OIP.75zOqrmn4x8Oz0BDTpwCkgHaHa?w=193&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7' />
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
        <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.VUuylVxKNF-bhKfn5LL1AQHaHe?w=200&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
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
