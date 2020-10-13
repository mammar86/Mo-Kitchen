import React from 'react';

export function RecipeDirections() {
  return (
    
    <section className='recipe-directions'>
    <nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="/">Home</a></li>
    <li className="breadcrumb-item active" aria-current="page">Add Recipe</li>
  </ol>
</nav>
   <nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item active" aria-current="page">Home</li>
  </ol>
</nav>
      
      <div className="details">
      <h2>Pumpkin Bread Recipe</h2>
      <p>Rating: ⭐⭐⭐⭐⭐ (63 votes)</p>
      <img src='https://spoonacular.com/recipeImages/664306-556x370.jpg' alt=''></img>
      <ul className="first-list">
        <li>Prep Time: 10 minutes</li>
        <li>Cooking Time: 45 minutes</li>
        <li>Servings: 2</li>
      </ul>
      
      <div className="recipe-steps">

      <h3>Ingredients</h3>

      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>

      </ul>
      </div>
      </div>
    </section>
  );
}
