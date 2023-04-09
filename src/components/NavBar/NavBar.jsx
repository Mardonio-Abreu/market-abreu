import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../logo/logo_250x150.png";
import CartWidget from "../CartWidget/CartWidget.jsx";

function ColorSchemes() {
  return (
    <>
      <Navbar bg="primary" variant="light">
        <Container className="d-flex .align-items-start">
          <Navbar.Brand href="/home">
            <img src={logo} />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/items">Products</Nav.Link>
          </Nav>
          <CartWidget quantity={5} />
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemes;
