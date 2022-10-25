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
    const fetchid = (req.params.id)
    Recipe.findOne(({id:fetchid}), function(err, recipe) {
        if(err) {
            console.log('err')
        }
        res.send(recipe)
    })
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
