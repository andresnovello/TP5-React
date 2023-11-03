
import Card from 'react-bootstrap/Card';
import './AboutUs.css';

function AboutUs() {
    return (
        <div>
            <h2 className='aboutUs-title'>About Us</h2>
            <p className='aboutUs-paragraph'>We are a team of passionate individuals who love to create amazing things.</p>
            <div className="aboutUs-container">
                <div className="aboutUs-card">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/images/card1.jpg" />
                        <Card.Body>
                            <Card.Title>Gato 1</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to additional content.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>

                <div className="aboutUs-card">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/images/card2.jpg" />
                        <Card.Body>
                            <Card.Title>Gato 2</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to additional content.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>

                <div className="aboutUs-card">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/images/card3.jpg" />
                        <Card.Body>
                            <Card.Title>Gato 3</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to additional content.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>

            </div>
        </div>

    );
}

export default AboutUs;