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

router.put('/recipes/:id/edit', (req, res) => {
    const id = req.params.id;
    const newName = req.body.name;
    const newPic = req.body.pic;
    const newInstructions = req.body.instructions;
    const newType = req.body.type
    Recipe.findById(id, (error, updateRecipe) =>{
       updateRecipe.name = newName;
       updateRecipe.pic = newPic;
       updateRecipe.instructions = newInstructions;
       updateRecipe.type = newType;
        updateRecipe.save()
    });
    res.send('well done')
}) 

router.delete('/recipes/:id', (req, res) => {
    const deleteId = (req.params.id)
    Recipe.findByIdAndDelete(deleteId).exec()
})
    module.exports = router;
