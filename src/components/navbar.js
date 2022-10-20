import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'





function DefNav () {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <Navbar sticky="top" />
        <Navbar.Brand href="/">Chefs Kiss</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#breakfast">Breakfast</Nav.Link>
            <Nav.Link href="#lunch">Lunch</Nav.Link>
            <Nav.Link href="#dinner">Dinner</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
            <NavDropdown.Item href="create">Create</NavDropdown.Item>
              <NavDropdown.Item href="about">About</NavDropdown.Item>
              <NavDropdown.Item href="#contact">
                Contact
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default DefNav;