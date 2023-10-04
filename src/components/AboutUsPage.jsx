import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from '../assets/collection.jpg'
import imgTwo from '../assets/jordanxnike.jpg'

function AboutUsPage() {
  return (
    <>
      <style>
        {`
          .firstDiv {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: space-between;
            margin: 3rem auto;
          }
          .imgSize {
            height: 20rem;
          }
          .picOne {
            object-fit: cover;
          }
        `}
      </style>

    <h1 className='text-center m-3'>About Us</h1>
    <div className='firstDiv'>
    <p className='w-50 float-left p-4'>At Flash Bot our passion is clothing, shoes, and accessories. We know how frustrating it can be the day a pair of sneaker, shirt, or hoodie you want, drops and you checkout the second the item releases. You worked lightning fast to checkout as quick as possible just so that, once you press on the proceed payment button, you receive a notification that the item is no longer in stock! All of your hard work for nothing. You've been waiting for this release day weeks before. Imagining yourself with that item. it's just not fair.</p>
    <Card style={{ width: '50%' }}>
      <Card.Img className='imgSize' variant="top" src={img} />
    </Card>
    </div>

    <div className='firstDiv'>
    <Card className='float-left w-50'>
      <Card.Img className='imgSize picOne' variant="top" src={imgTwo} />
    </Card>
    <p className='w-50 float-right p-4'>So, We've created a solution. a group of developers and myself have created a self checkout Bot that'll allow you to checkout withing 5 seconds, maximizing your possibilities of hitting that pair or item at least once guaranteed! Don't pay re-sell price for anything, instead pay half that price for our services and get what you want. My team provides 24/7 customer service support through email. Now you might think this is a scam but, I promise you it is not. Feel free to email us if you have any questions. </p>
    </div>
    </>
  );
}

export default AboutUsPage;
