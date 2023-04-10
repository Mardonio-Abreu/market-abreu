import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown } from "react-bootstrap";
import logo from "../../logo/logo_250x150.png";
import CartWidget from "../CartWidget/CartWidget.jsx";
import CategoryNav from "../CategoryNav/CategoryNav";

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
            <Nav.Link href="/items">All Products</Nav.Link>
            <CategoryNav />
          </Nav>
          <CartWidget quantity={5} />
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemes;
