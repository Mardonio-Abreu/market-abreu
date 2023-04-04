import Figure from "react-bootstrap/Figure";
import van from "../../logo/1280px-2600_van.jpg";

function Home() {
  return (
    <Figure>
      <Figure.Image width={171} height={180} alt="171x180" src={van} />
      <Figure.Caption>
        El nombre de la revista viene del descubrimiento de phreaker en 1960,
        que la transmisión de un tono de 2600 hertz ( el cual pudo ser
        perfectamente producido con un silbato de plástico regalado en el cereal
        de Cap'n Crunch; descubierto por los amigos de John Draper) sobre una
        conexión troncal de larga distancia tuvo acceso a " modo operador" y
        permitió al usuario explorar aspectos del sistema del teléfono que no
        eran posible acceder de otra manera. La revista fue nombrada por David
        Ruderman, quien fue cofundador de la revista junto con su amigo de la
        universidad, Eric Corley. Fue publicada por primera vez en 1984,
        coincidiendo con el libro con el mismo nombre y el rompimiento de AT&T.
        3 años después Ruderman terminó su participación directa con la revista.
      </Figure.Caption>
    </Figure>
  );
}

export default Home;
