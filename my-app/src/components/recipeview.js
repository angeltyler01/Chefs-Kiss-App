import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Link, useParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function ViewRecipe() {
    const{ id } = useParams();
    const navigate = useNavigate();
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
        <div className="Recipe-view-page">
            <div className='recipe-view-details'>
            <h1 className='recipe-view-name'>{recipe.name}</h1>
            <img className='recipe-view-img' src={recipe.pic}></img>
            <p className='recipe-view-instructions'>{recipe.instructions}</p>
            </div>
            <Link key={recipe._id} to={{pathname:`/recipes/${recipe._id}/edit`}}><Button variant="outline-warning" className='recipe-view-button'>Edit Recipe</Button></Link>
            <a href='/recipes'><Button variant="outline-warning" className='recipe-view-button' onClick={() => {deleteRecipe(id)}}>Delete Recipe</Button></a>
            <Button className='recipe-view-button' variant="outline-warning" onClick={() => navigate(-1)}>Go Back</Button>
        </div>
    )
}
    
export default ViewRecipe;
