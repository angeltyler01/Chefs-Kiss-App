import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Chefs Kiss</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#breakfast">Breakfast</Nav.Link>
            <Nav.Link href="#lunch">Lunch</Nav.Link>
            <Nav.Link href="#dinner">Dinner</Nav.Link>
            <Nav.Link href="#dessert">Dessert</Nav.Link>
            <Nav.Link href="#favorites">Favorites</Nav.Link>
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

export default BasicExample;