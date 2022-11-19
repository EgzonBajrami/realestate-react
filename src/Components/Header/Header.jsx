import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './Header.css'

function Header() {
  return (
    <Navbar className="color-navbar" bg="dark" expand="lg">
      <Container>
        <Navbar.Brand className="change-color" href="/">E.B Real Estate</Navbar.Brand>
        <Navbar.Toggle className="change-background" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/apartments">Banesa</Nav.Link>
            <Nav.Link href="/houses">Shtepi</Nav.Link>
            <Nav.Link href="/properties">Troje</Nav.Link>
            <Nav.Link href="/lokale">Lokale</Nav.Link>
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;