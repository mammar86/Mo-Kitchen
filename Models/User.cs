using System.Collections.Generic;

namespace Mo_Kitchen.Models
{
    public class User
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public List<Recipe> Recipes { get; set; }
    }
}