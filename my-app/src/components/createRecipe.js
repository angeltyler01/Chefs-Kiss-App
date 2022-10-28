import Form from './Formcreate'

function createRecipe() {
    return (
        <div className='create-Recipe-page'>
            <h1 className="create-title">Share Your Recipes!</h1>
            <hr className="horizontal-line"></hr>
            <Form />
        </div>
    )
}
export default createRecipe;