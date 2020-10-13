import React from 'react';

export function AddRecipe() {
  return (
    <><nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><a href="/">Home</a></li>
      <li className="breadcrumb-item active">Add Recipe</li>
    </ol>
  </nav>
    <section className="add-recipe-page">
      <div className="form-container">
      
      <form className="add" action="post">
      <h2>Add Recipe</h2>

<div className="form-items">
  <label htmlFor="RecipeName">Recipe Name:</label>
  <input type="text" id="recipeName" name="firstName"></input>
</div>
<div className="form-items">
  <label htmlFor="prepTime">Prep Time:</label>
  <input type="text" id="prepTime" name="prepTime"></input>
</div>
<div className="form-items">
  <label htmlFor="cookingTime">Cooking Time:</label>
  <input type="text" id="cookingTime" name="cookingTime"></input>
</div>

<div className="form-items">
  <label htmlFor="serving">Serving:</label>
  <input type="text" id="serving" name="serving"></input>
</div>
<div className="form-items">
  <label htmlFor="serving">Select Image:</label>
  <input type="file" id="browseImage" name="browseImage"></input>
</div>

<div className="form-items">
  <label className="ingredients-title" htmlFor="serving">Ingredients</label>
  <label htmlFor="Ingredients">Ingredient1</label>
  <input type="Text" className="ingredients" name="ingredients"></input>
  <label htmlFor="Ingredients">Ingredient1</label>
  <input type="Text" className="ingredients" name="ingredients"></input>
  <label htmlFor="Ingredients">Ingredient1</label>
  <input type="Text" className="ingredients" name="ingredients"></input>
  <label htmlFor="Ingredients">Ingredient1</label>
  <input type="Text" className="ingredients" name="ingredients"></input>
  <label htmlFor="Ingredients">Ingredient1</label>
  <input type="Text" className="ingredients" name="ingredients"></input>
 
</div>

<h4>steps</h4>

<div className="form-items">

<div className='cooking-steps1'>
  <label htmlFor="steps">step</label>
  <textarea></textarea>
  <label htmlFor="steps">step</label>
  <textarea></textarea>
  
  <label htmlFor="steps">step</label>
  <textarea></textarea>
  
  <label>step</label>
  <textarea></textarea>
  
  <label htmlFor="steps">step</label>
  <textarea></textarea>
  </div>
  
</div>





<button type="submit" className="btn btn-outline-success btn-block">Submit</button>





</form>

      </div>
    </section>


    </>
  );
}
