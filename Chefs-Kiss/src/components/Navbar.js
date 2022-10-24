import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import CreateRecipe from "../pages/Create-Recipe";
import SingleRecipeView from "../pages/SingleRecipeView";

function Navb() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Chefs Kiss</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav >
              <Nav.Link href="/Recipes">Recipes</Nav.Link>
              <Nav.Link href="/Create-Recipe">Create a Recipe!</Nav.Link>
              <Nav.Link href="/SingleRecipeView">Single Recipe View</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Recipes" element={<Recipes />} />
        <Route path="/Create-Recipe" element={<CreateRecipe />} />
        <Route path="/SingleRecipeView" element={<SingleRecipeView />} />
      </Routes>
    </Router>
  );
}

export default Navb;
