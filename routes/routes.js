const { application } = require("express");
const express = require("express");
const Recipe = require("../models/recipeModel");
const router = express.Router();
const Recipes = require('../models/recipeModel')

router.route("/read").get((req, res) => {
    Recipe.find()
    .then(foundRecipe => res.json(foundRecipe))
});

router.route("/create").post((req, res)=>{
    const name = req.body.name;
    const pic = req.body.picture;
    const instructions = req.body.instructions;
    const type = req.body.type;
    const newRecipe = new Recipe({
        name,
        pic,
        instructions,
        type,
    });
    newRecipe.save();
})

module.exports = router;
