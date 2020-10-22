using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Mo_Kitchen.Models;

namespace Mo_Kitchen.Controllers
{
    // All of these routes will be at the base URL:     /api/Recipes
    // That is what "api/[controller]" means below. It uses the name of the controller
    // in this case RecipesController to determine the URL
    [Route("api/[controller]")]
    [ApiController]
    public class RecipesController : ControllerBase
    {
        // This is the variable you use to have access to your database
        private readonly DatabaseContext _context;

        // Constructor that recives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public RecipesController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Recipes
        //
        // Returns a list of all your Recipes
        //
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Recipe>>> GetRecipes(string filter)
        {
            if (filter == null)
            {
                return await _context.Recipes.OrderBy(recipe => recipe.Title).Include(recipe => recipe.Ratings).ToListAsync();
            }
            else
            {
                return await _context.Recipes.OrderBy(recipe => recipe.Title).Where(recipe => recipe.Title.Contains(filter)).Include(recipe => recipe.Ratings).ToListAsync();

            }
            // Uses the database context in `_context` to request all of the Recipes, sort
            // them by row id and return them as a JSON array.

        }

        // GET: api/Recipes/5
        //
        // Fetches and returns a specific recipe by finding it by id. The id is specified in the
        // URL. In the sample URL above it is the `5`.  The "{id}" in the [HttpGet("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpGet("{id}")]
        public async Task<ActionResult<Recipe>> GetRecipe(int id)
        {
            // Find the recipe in the database using `FindAsync` to look it up by id
            var recipe = await _context.Recipes.Include(recipe => recipe.Ratings).Where(recipe => recipe.Id == id).FirstOrDefaultAsync();


            // If we didn't find anything, we receive a `null` in return
            if (recipe == null)
            {
                // Return a `404` response to the client indicating we could not find a recipe with this id
                return NotFound();
            }

            //  Return the recipe as a JSON object.
            return recipe;
        }

        // PUT: api/Recipes/5
        //
        // Update an individual recipe with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpPut("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        // In addition the `body` of the request is parsed and then made available to us as a Recipe
        // variable named recipe. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Recipe POCO class. This represents the
        // new values for the record.
        //
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRecipe(int id, Recipe recipe)
        {
            // If the ID in the URL does not match the ID in the supplied request body, return a bad request
            if (id != recipe.Id)
            {
                return BadRequest();
            }

            // Tell the database to consider everything in recipe to be _updated_ values. When
            // the save happens the database will _replace_ the values in the database with the ones from recipe
            _context.Entry(recipe).State = EntityState.Modified;

            try
            {
                // Try to save these changes.
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Ooops, looks like there was an error, so check to see if the record we were
                // updating no longer exists.
                if (!RecipeExists(id))
                {
                    // If the record we tried to update was already deleted by someone else,
                    // return a `404` not found
                    return NotFound();
                }
                else
                {
                    // Otherwise throw the error back, which will cause the request to fail
                    // and generate an error to the client.
                    throw;
                }
            }

            // return NoContent to indicate the update was done. Alternatively you can use the
            // following to send back a copy of the updated data.
            //
            // return Ok(recipe)
            //
            return NoContent();
        }

        // POST: api/Recipes
        //
        // Creates a new recipe in the database.
        //
        // The `body` of the request is parsed and then made available to us as a Recipe
        // variable named recipe. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Recipe POCO class. This represents the
        // new values for the record.
        //
        [HttpPost]
        public async Task<ActionResult<Recipe>> PostRecipe(Recipe recipe)
        {
            // Indicate to the database context we want to add this new record
            _context.Recipes.Add(recipe);
            await _context.SaveChangesAsync();

            // Return a response that indicates the object was created (status code `201`) and some additional
            // headers with details of the newly created object.
            return CreatedAtAction("GetRecipe", new { id = recipe.Id }, recipe);
        }

        // DELETE: api/Recipes/5
        //
        // Deletes an individual recipe with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpDelete("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRecipe(int id)
        {
            // Find this recipe by looking for the specific id
            var recipe = await _context.Recipes.FindAsync(id);
            if (recipe == null)
            {
                // There wasn't a recipe with that id so return a `404` not found
                return NotFound();
            }

            // Tell the database we want to remove this record
            _context.Recipes.Remove(recipe);

            // Tell the database to perform the deletion
            await _context.SaveChangesAsync();

            // return NoContent to indicate the update was done. Alternatively you can use the
            // following to send back a copy of the deleted data.
            //
            // return Ok(recipe)
            //
            return NoContent();
        }

        // Private helper method that looks up an existing recipe by the supplied id
        private bool RecipeExists(int id)
        {
            return _context.Recipes.Any(recipe => recipe.Id == id);
        }
    }
}
