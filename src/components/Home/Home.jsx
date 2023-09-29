import { Container, Row, Col } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";
import van from "../../logo/1280px-2600_van.jpg";

function Home() {
  return (
    <Figure className="home">
      <Container>
        <Row>
          <Col xs={12} sm={6} md={4} lg={3} className="mx-auto">
            <Figure.Image alt="Van with 2600 Magazine add" src={van} />
          </Col>

          <Col xs={12} sm={6} md={4} lg={3} className="mx-auto">
            <Figure.Caption>
              El nombre de la revista viene del descubrimiento de phreaker en
              1960, que la transmisión de un tono de 2600 hertz ( el cual pudo
              ser perfectamente producido con un silbato de plástico regalado en
              el cereal de Cap'n Crunch; descubierto por los amigos de John
              Draper) sobre una conexión troncal de larga distancia tuvo acceso
              a " modo operador" y permitió al usuario explorar aspectos del
              sistema del teléfono que no eran posible acceder de otra manera.
              La revista fue nombrada por David Ruderman, quien fue cofundador
              de la revista junto con su amigo de la universidad, Eric Corley.
              Fue publicada por primera vez en 1984, coincidiendo con el libro
              con el mismo nombre y el rompimiento de AT&T. 3 años después
              Ruderman terminó su participación directa con la revista.
            </Figure.Caption>
          </Col>
        </Row>
      </Container>
    </Figure>
  );
}

export default Home;
