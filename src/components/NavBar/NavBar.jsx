import { NavbarBrand } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../Cart/CartWidget";

import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link className="link" to="/">
            L & B Impresiones3D
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              className={({ isActive }) =>
                isActive ? "link m-2 text-light" : "link m-2 text-secondary"
              }
              to="/category/mates"
            >
              Mates
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "link m-2 text-light" : "link m-2 text-secondary"
              }
              to="/category/articulated"
            >
              Articulados
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "link m-2 text-light" : "link m-2 text-secondary"
              }
              to="/category/smartphones"
            >
              Celulares
            </NavLink>
            <NavDropdown title="Recursos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Archivos stl
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Programas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Calibraciones
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#cart">
              <CartWidget />
            </Nav.Link>
            <Nav.Link eventKey={2} href="#qty">
              0
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
