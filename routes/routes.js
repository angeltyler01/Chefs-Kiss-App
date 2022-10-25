const router = require('express').Router()
const Recipe = require("../models/recipeModel");


router.get('/recipes', (req, res) => {
    Recipe.find()
    .then(FoundRecipe => {
        res.json(FoundRecipe)
        
    })
    .catch(err => {
        console.log("err")
    })
})

router.get('/recipes/:id', (req, res) => {
    Recipe.findById(req.params.id)
    .then(FoundRecipe => {
        res.json(FoundRecipe)
    })
})

router.delete('/recipes/:id', (req, res) => {
    Recipe.findByIdAndDelete(req.params.id)
})

//

router.route("/recipes/new").post((req, res)=>{
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
