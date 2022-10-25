import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useLocation, Link, json } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function ViewRecipe() {
    const location = useLocation()
    console.log(location)
    const [recipe, setRecipe] = useState([{
        name: '',
        picture: '',
        instuctions: '',
        type: '',
    }]) 
    useEffect(() =>{
        fetch(`http://localhost:5002/recipes/${location}`)
        .then(res => {
            return res.json();
    })
    .then(recipe => {
        setRecipe(recipe)
    })
}, [])

    
    return (
        <div className="Recipes-view-page">
            <p>recipe view page</p>
        </div>
    )
}
    
export default ViewRecipe;