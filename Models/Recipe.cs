namespace Mo_Kitchen.Models
{
    public class Recipe
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string PreparationTime { get; set; }
        public string Diet { get; set; }
        public int Serving { get; set; }
        public string SourceName { get; set; }
        public string Photo { get; set; }
        public string Instructions { get; set; }
        public string Cuisine { get; set; }
        public string Occasion { get; set; }
        public string Rating { get; set; }
        public string DishType { get; set; }

    }
}