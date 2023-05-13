import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../logo/logo_250x150.png";
import CartWidget from "../CartWidget/CartWidget.jsx";
import ButtonDark from "../NavbarDropdownButton/NavbarDropdownButton";

function NavigationBar() {
  return (
    <>
      <Navbar bg="primary" variant="light">
        <Container className="d-flex .align-items-start">
          <Navbar.Brand href="/home">
            <img src={logo} />
          </Navbar.Brand>
          <ButtonDark />
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/allItems">All Products</Nav.Link>
          </Nav>
          <CartWidget quantity={5} />
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
