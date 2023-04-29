import Carousel from 'react-bootstrap/Carousel';
import Hero1 from './../assets/Slide1.jpg';
import Hero2 from './../assets/Slide2.jpeg';
import Hero3 from './../assets/Slide3.jpg';

function SlideHero() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Hero1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>SMKN 3 Surabaya</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Hero2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Kerjasama dengan Industri</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Hero3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Jurusan Terbaik</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SlideHero;