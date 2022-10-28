
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
            <div className="recipe-detail-block"  style={{'display': 'inline-block', 'width': '30vw'}}>
                <h3>
                <Link key={recipe._id} to={{pathname:`/recipes/${recipe._id}`}}>{recipe.name}</Link>
                </h3>
                <img key={recipe._id} src={recipe.picture} alt={recipe.name} className="recipe-pic"/>
            </div>
                )}
        </div>
    );
}

export default Read;