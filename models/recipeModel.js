const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    name: {type: String, require: true },
    pic: {type: String, require: false, default: 'http://placekitten.com/350/350'},
    instructions: { type: String, require: true},
    type: { type: String, require: false,}
})
const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;