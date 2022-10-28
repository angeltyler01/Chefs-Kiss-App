import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Nav from './components/Nav'
import Homepage from './components/Home'
import Createpage from './components/createRecipe'
import Readpage from './components/readRecipe'
import Updatepage from './components/updateRecipe'
import Aboutpage from './components/About'
import Recipeview from './components/recipeview'



function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Nav />
            <Routes>
            <Route path='/' element={
                    <Homepage />
                } />
                <Route path='/recipes' element={
                    <Readpage />
                } />
                <Route path='/recipes/:id' element= {<Recipeview /> } />
                <Route path='/recipes/new' element={
                    <Createpage />
                } />
                <Route path='/recipes/:id/edit' element={
                    <Updatepage />
                } />
                <Route path='/about' element={
                    <Aboutpage />
                } />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
