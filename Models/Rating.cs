using System;

namespace Mo_Kitchen.Models
{
    public class Rating
    {
        public int Id { get; set; }
        public string Summary { get; set; }
        public int Stars { get; set; }
        public DateTime CreatedAt { get; private set; } = DateTime.Now;

        public int RecipeId { get; set; }
        public int UserId { get; set; }
    }
}