
import React, { useState, useEffect, } from "react";
import {Link} from 'react-router-dom';



function Read() {
    const [recipes, setRecipes] = useState([{
        name: '',
        picture: '',
        instuctions: '',
        type: '',
    }])

    useEffect(() =>{
        fetch("http://localhost:5002/recipes")
        .then(res => {
            return res.json();
    })
    .then(recipe => { 
        setRecipes(recipe)
    })
},[])

    return (
        <div className="Recipes-view-page">
            {recipes.map(recipe =>
            <div className="recipe-details"  style={{'display': 'inline-block', 'width': '30vw'}}>
                <h2>
                <Link key={recipe._id} to={{pathname:`/recipes/${recipe._id}`, state: { recipe: recipe }}}>{recipe.name}</Link>
          </h2>
                <img key={recipe._id} src={recipe.picture} alt={recipe.name} className="recipe-pic"/>
            </div>
                )}
        </div>
    );
}

export default Read;