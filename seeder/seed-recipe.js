const db = require('../models');

db.recipe.create([{
    name: 'Ratatouille',
    pic: '../my-app/public/Ratatouille.jpg',
    instructions: 'Make the sauce: Heat the olive oil in a 12-inch (30-cm) oven-safe pan over medium-high heat. Sauté the onion, garlic, and bell peppers until soft, about 10 minutes. Season with salt and pepper, then add the crushed tomatoes. Stir until the ingredients are fully incorporated. Remove from heat, then add the basil. Stir once more, then smooth the surface of the sauce with a spatula.',
    type: 'Dinner'
},{
    name: 'Pancake',
    pic: '../my-app/public/pancake.jpg',
    instructions: 'Heat a lightly oiled griddle or pan over medium-high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake; cook until bubbles form and the edges are dry, about 2 to 3 minutes. Flip and cook until browned on the other side. Repeat with remaining batter.',
    type: 'Breakfast'
}])
.then (()=>{
    console.log('success')
    process.exit()
})
.catch(err =>{
    console.log('Failure!', err)
    process.exit()
})