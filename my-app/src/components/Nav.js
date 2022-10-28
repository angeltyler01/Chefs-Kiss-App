import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navigation() {
  return (
    <div className='nav-bar'>
      <Navbar>
        <Container>
          <div className="brand-name">
          <Navbar.Brand href="http://localhost:3000/">Chef's Kiss 💋</Navbar.Brand>
          </div>
          <Nav className="me-auto">
            <div className="home-button">
            <Nav.Link href="http://localhost:3000/">Home</Nav.Link>
            </div>
            <div className="my-recipes">
              <Nav.Link href="http://localhost:3000/recipes">My Recipes</Nav.Link>
            </div>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="http://localhost:3000/recipes/new"> Create a Recipe
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