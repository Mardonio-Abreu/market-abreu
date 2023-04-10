import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown } from "react-bootstrap";
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
            <NavDropdown bg="primary" title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="/hats">Hats</NavDropdown.Item>
              <NavDropdown.Item href="/hoodies">Hoodies</NavDropdown.Item>
              <NavDropdown.Item href="/t-shirts">T-shirts</NavDropdown.Item>
              <NavDropdown.Item href="/totes">Totes</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/items">All products</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget quantity={5} />
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemes;
