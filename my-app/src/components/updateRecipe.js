import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios'

function Update() {
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

    function handleChange(event) {
        const {name, value} = event.target;

        setRecipe(prevInput => {
            return{
                ...prevInput,
                [name]: value
            }
        }) 
    }
    function handleClick(event) {
        event.preventDefault();
        const updatedRecipe = {
              name: recipe.name,
              picture: recipe.picture,
              instructions: recipe.instructions,
              type: recipe.type,
        };
        
        axios.put(`http://localhost:5002/recipes/${id}/edit`, updatedRecipe) 
    }




    return (
        <div>
        <Form>
      <div className="form-group" >
      <Form.Label > Recipe Name</Form.Label>
        <input onChange={handleChange} name="name" value={recipe.name} className="form-control" placeholder='Required' />
      </div>
      <div className="form-group" >
        <Form.Label > Recipe Picture</Form.Label>
        <input onChange={handleChange} name="picture" value={recipe.picture} className="form-control" placeholder='Required' />
      </div>
      <div className="form-group" >
      <Form.Label > Recipe instructions</Form.Label>
        <input onChange={handleChange} name="instructions" value={recipe.instructions} className="form-control" placeholder='Required' />
      </div>
      <div className="form-group" >
      <Form.Label > Recipe type</Form.Label>
        <input onChange={handleChange} name="type" value={recipe.type} className="form-control" placeholder='Required' />
      </div>
            </Form>
      <Link to="/recipes">
      <Button onClick={handleClick} variant="primary" type="submit">submit</Button>
      </Link>
        </div>
    );
}
export default Update;