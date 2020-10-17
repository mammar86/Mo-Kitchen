namespace Mo_Kitchen.Models
{
    public class Rating
    {
        public int Id { get; set; }
        public int Score { get; set; }
        public int RecipeId { get; set; }
        public int UserId { get; set; }
    }
}