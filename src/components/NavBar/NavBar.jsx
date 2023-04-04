import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../logo/logo_250x150.png";
import CartWidget from "../CartWidget/CartWidget.jsx";

function ColorSchemes() {
  return (
    <>
      <Navbar bg="primary" variant="light">
        <Container>
          <Navbar.Brand href="/home">
            <img src={logo} />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/products">
              <h3>Products</h3>
            </Nav.Link>
            <CartWidget quantity={5} />
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default ColorSchemes;
