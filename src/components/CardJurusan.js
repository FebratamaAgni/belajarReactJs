import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardJurusan(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.jurusan}</Card.Title>
        <Card.Text>
          {props.deskripsi}
        </Card.Text>
        <Button variant="primary">Lihat Jurusan</Button>
      </Card.Body>
    </Card>
  );
}

export default CardJurusan;