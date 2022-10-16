import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navigation() {
  return (
    <div className='nav-bar'>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="http://localhost:3000/home">Chef's kiss</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="http://localhost:3000/home">Home</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="http://localhost:3000/read">My Recipes</NavDropdown.Item>
              <NavDropdown.Item href="http://localhost:3000/create"> Create a Recipe
              </NavDropdown.Item>
              <NavDropdown.Item href="http://localhost:3000/About">
                About Us
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;