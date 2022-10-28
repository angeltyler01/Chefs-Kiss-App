import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import '../App.css';

function Update() {
    const{ id } = useParams();
    const navigate = useNavigate();

    const [recipe, setRecipe] = useState([{
        //name: '',
        //pic: '',
        //instuctions: '',
        //type: '',
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

const navigateBack = () => {
  navigate(-1)
}

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
              pic: recipe.pic,
              instructions: recipe.instructions,
              type: recipe.type,
        };
        axios.put(`http://localhost:5002/recipes/${id}/edit`, updatedRecipe) 
        navigateBack()
    }




    return (
        <div className='updateRecipe-container'>
          <span className='updaterecipe-title'>Create Recipe</span>
        <Form className='update-form'>
      <div className="update-input-name" >
      <Form.Label className='update-input-title' >Recipe Name</Form.Label>
        <input onChange={handleChange} name="name" value={recipe.name} className="form-control" placeholder='Recipe Name' />
      </div>
      <div className="update-input-pic" >
        <Form.Label className='update-input-title' > Recipe Picture</Form.Label>
        <input onChange={handleChange} name="pic" value={recipe.pic} className="form-control" placeholder='valid recipe pic URL' />
      </div>
      <div className="update-input-type" >
      <Form.Label className='update-input-title'> Recipe type</Form.Label>
        <input onChange={handleChange} name="type" value={recipe.type} className="form-control" placeholder='Type' />
      </div>
      <div className="update-input-instructions" >
      <Form.Label className='update-input-title' > Recipe instructions</Form.Label>
      <Form.Control as="textarea" rows={7} onChange={handleChange} name="instructions" value={recipe.instructions} placeholder='Recipe Instructions'/>
      </div>
      <Button onClick={handleClick} className="submit-form-button" variant="primary" type="submit">Submit Recipe</Button>
        </Form>
        </div>
    );
}
export default Update;