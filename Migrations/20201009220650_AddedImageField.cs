using Microsoft.EntityFrameworkCore.Migrations;

namespace MoKitchen.Migrations
{
    public partial class AddedImageField : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Photo",
                table: "Recipes",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Photo",
                table: "Recipes");
        }
    }
}
