import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Nav from './components/Nav'
import Homepage from './components/Home'
import Createpage from './components/createRecipe'
import Readpage from './components/readRecipe'
import Updatepage from './components/updateRecipe'
import Aboutpage from './components/About'



function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Nav />
            <Routes>
            <Route path='/' element={
                    <Homepage />
                } />
                <Route path='/create' element={
                    <Createpage />
                } />
                <Route path='/read' element={
                    <Readpage />
                } />
                <Route path='/update' element={
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
