import BasicExample from "../components/navbar";

function edit_form () {
    return (
        <BasicExample>
            <main>
                <h1>Edit Recipe</h1>
                <form method="POST" action={`/recipes`}>
                    <div>
                        <label htmlFor="name">Recipe Name</label>
                        <input name='name' value={data.recipe.name} required></input>
                    </div>
                    <div>
                        <label htmlFor="pic">Recipe Picture</label>
                        <input name='pic' value={data.recipe.pic} required></input>
                    </div>
                    <div>
                        <label htmlFor= "instructions">Recipe instructions</label>
                        <input name='instructions' value={data.recipe.instructions} required></input>
                    </div>
                    <div>
                        <label htmlFor= "type">Recipe Type</label>
                        <input name='type' value={data.recipe.type} required></input>
                    </div>
                </form>
            </main>

        </BasicExample>
        
    )
}

module.exports = edit_form