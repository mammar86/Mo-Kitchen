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
    // All of these routes will be at the base URL:     /api/Ratings
    // That is what "api/[controller]" means below. It uses the name of the controller
    // in this case RatingsController to determine the URL
    [Route("api/[controller]")]
    [ApiController]
    public class RatingsController : ControllerBase
    {
        // This is the variable you use to have access to your database
        private readonly DatabaseContext _context;

        // Constructor that recives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public RatingsController(DatabaseContext context)
        {
            _context = context;
        }

        // POST: api/Ratings
        //
        // Creates a new rating in the database.
        //
        // The `body` of the request is parsed and then made available to us as a Rating
        // variable named rating. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Rating POCO class. This represents the
        // new values for the record.
        //
        [HttpPost]
        public async Task<ActionResult<Rating>> PostRating(Rating rating)
        {
            // Indicate to the database context we want to add this new record
            _context.Ratings.Add(rating);
            await _context.SaveChangesAsync();

            // Return a response that indicates the object was created (status code `201`) and some additional
            // headers with details of the newly created object.
            return CreatedAtAction("GetRating", new { id = rating.Id }, rating);
        }

    }
}
