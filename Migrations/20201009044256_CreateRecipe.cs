using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace MoKitchen.Migrations
{
    public partial class CreateRecipe : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Recipes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    PreparationTime = table.Column<string>(nullable: true),
                    Diet = table.Column<string>(nullable: true),
                    Serving = table.Column<int>(nullable: false),
                    SourceName = table.Column<string>(nullable: true),
                    Instructions = table.Column<string>(nullable: true),
                    Cuisine = table.Column<string>(nullable: true),
                    Occasion = table.Column<string>(nullable: true),
                    Rating = table.Column<string>(nullable: true),
                    DishType = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Recipes", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Recipes");
        }
    }
}
