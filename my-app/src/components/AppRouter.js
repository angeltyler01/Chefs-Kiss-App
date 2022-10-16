import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Homepage from './Home'
import Createpage from './createRecipe'
import Readpage from './readRecipe'
import Updatepage from './updateRecipe'
import Aboutpage from './About'

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={
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
    )
}
export default AppRouter