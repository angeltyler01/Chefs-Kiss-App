import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function ViewRecipe() {
    const{ id } = useParams()
    const [recipe, setRecipe] = useState([{
        name: '',
        picture: '',
        instuctions: '',
        type: '',
    }]) 
    useEffect(() =>{
        fetch(`http://localhost:5002/recipes/${id}`)
        .then(res => {
            return res.json();
    })
    .then(recipeView => {
        setRecipe(recipeView)  
    })
}, [])

const deleteRecipe = (id) => {
    axios.delete(`http://localhost:5002/recipes/${id}`)
}


    
    return (
        <div className="Recipes-view-page">
            <h1>{recipe.name}</h1>
            <Link key={recipe._id} to={{pathname:`/recipes/${recipe._id}/edit`}}><Button>Edit Recipe</Button></Link>
            
            <a href='/recipes'>
            <Button onClick={() => {deleteRecipe(id)}}>Delete Recipe</Button>
            </a>
        </div>
    )
}
    
export default ViewRecipe;