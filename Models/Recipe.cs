using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Mo_Kitchen.Models
{
    public class Recipe
    {
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public int ReadyIn { get; set; }
        public string Diet { get; set; }
        [Required]
        public int Servings { get; set; }
        public int UserId { get; set; }
        [Required]
        public string PhotoURL { get; set; }
        [Required]
        public string Steps { get; set; }
        public string Cuisine { get; set; }
        public string DishType { get; set; }
        [Required]
        public string Ingredients { get; set; }
        public List<Rating> Ratings { get; set; }
    }
}
