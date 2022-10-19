function CreateForm() {
  return (
    <form class="form-items" method="POST" action="/pages">
      <label htmlFor="dish_Name">Dish Name:</label>
      <input class="FormInputs" id="dish_Name" name="dish_Name" required />

      <label htmlFor="picture">Picture:</label>
      <input class="FormInputs" id="picture" name="picture" required />

      <label for="meal">Meal of the day: idk if thats what its called</label>
      <select class="FormInputs" id="meal" name="meal">
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
      </select>

      <label htmlFor="IngridientDirect">Ingridients/Directions:</label>
      <textarea
        rows="13"
        class="FormInputs"
        id="IngridientDirect"
        name="IngridientDirect"
        required
      />
      
      <input type="submit" value="Add Dish" />
    </form>
  );
}

export default CreateForm;
