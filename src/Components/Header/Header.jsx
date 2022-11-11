import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './Header.css'

function Header() {
  return (
    <Navbar className="color-navbar" bg="dark" expand="lg">
      <Container>
        <Navbar.Brand className="change-color" href="/">E.B Real Esate</Navbar.Brand>
        <Navbar.Toggle className="change-background" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/apartments">Apartamente</Nav.Link>
            <Nav.Link href="/houses">Shtepia</Nav.Link>
            <Nav.Link href="/properties">Prona</Nav.Link>
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;