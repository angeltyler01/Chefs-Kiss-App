import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react';
import { useState } from 'react';
import axios from 'axios'




function CreateRecipeForm() {
    const [input, setInput] = useState({
        name: "",
        picture: "",
        instructions: "",
        type: ""
    })


    function handleChange(event) {
        const {name, value} = event.target;

        setInput(prevInput => {
            return{
                ...prevInput,
                [name]: value
            }
        }) 
    }

    function handleClick(event) {
        event.preventDefault();
        const newRecipe = {
              name: input.name,
              picture: input.picture,
              instructions: input.instructions,
              type: input.type,
        };
        axios.post('http://localhost:5002/recipes/new', newRecipe) 
    }

    return(
        <div className='createForm'>
            <Form>
      <div className="form-group" >
      <Form.Label > Recipe Name</Form.Label>
        <input onChange={handleChange} name="name" value={input.name} className="form-control" placeholder='Required' />
      </div>
      <div className="form-group" >
        <Form.Label > Recipe Picture</Form.Label>
        <input onChange={handleChange} name="picture" value={input.picture} className="form-control" placeholder='Required' />
      </div>
      <div className="form-group" >
      <Form.Label > Recipe instructions</Form.Label>
        <input onChange={handleChange} name="instructions" value={input.instructions} className="form-control" placeholder='Required' />
      </div>
      <div className="form-group" >
      <Form.Label > Recipe type</Form.Label>
        <input onChange={handleChange} name="type" value={input.type} className="form-control" placeholder='Required' />
      </div>
      <a href='/'>   
      <Button onClick={handleClick}  variant="primary" type="submit">submit</Button>
      </a>
            </Form>
        </div>
    )
}
export default CreateRecipeForm;