function CreateForm() {
  return (
    <form class="form-items" method="POST" action="">
      <label htmlFor="name">Name:</label>
      <input id="name" name="name" required />
    
      <label htmlFor="name">Instructions:</label>
      <textarea rows="4" cols="50" id="instructions" name="instructions" required />
    </form>
  );
}

export default CreateForm;
