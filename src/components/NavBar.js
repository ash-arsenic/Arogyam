import React from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Arogyam</Navbar.Brand>
        <Nav className="mh-auto">
          <NavDropdown title="Services" id="service-dropdown">
            <NavDropdown.Item href="#teeth-whitening">
              Teeth whitening
            </NavDropdown.Item>
            <NavDropdown.Item href="#gum-treatment">
              Gum Treatment
            </NavDropdown.Item>
            <NavDropdown.Item href="#bone-surgery">
              Bone Surgery
            </NavDropdown.Item>
            <NavDropdown.Item href="#growth-developmet">
              Growth Development
            </NavDropdown.Item>
            <NavDropdown.Item href="#psd">Traumas</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Doctors" id="doctor-dropdown">
            <NavDropdown.Item href="#abhijeet">Abhijeet Arya</NavDropdown.Item>
            <NavDropdown.Item href="#abhishek">Abhishek Arya</NavDropdown.Item>
            <NavDropdown.Item href="#kalpana">Kalpana Arya</NavDropdown.Item>
            <NavDropdown.Item href="#aman">Aman Arya</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/review">Reviews</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
        <Button variant="outline-primary">Book an appointment</Button>
      </Container>
    </Navbar>
  );
};

export default NavBar;
