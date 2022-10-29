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
            <div className="recipes-detail-block">
                <h3 className="recipes-detail-title"><Link key={recipe._id} to={{pathname:`/recipes/${recipe._id}`}}>{recipe.name}</Link></h3>
                <hr className="horizontal-line"></hr>
                <img key={recipe._id} src={recipe.pic} alt={recipe.name} className="recipes-details-pic"/>
            </div>
                )}
        </div>
    );
}

export default Read;