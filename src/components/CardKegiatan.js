import Card from 'react-bootstrap/Card';

function CardKegiatan(props) {
  return (
      <Card>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Text>
            {props.deskripsi}
          </Card.Text>
        </Card.Body>
      </Card>
  );
}

export default CardKegiatan;