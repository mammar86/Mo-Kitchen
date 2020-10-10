using Microsoft.EntityFrameworkCore.Migrations;

namespace MoKitchen.Migrations
{
    public partial class AddedTitleField : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Title",
                table: "Recipes",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Title",
                table: "Recipes");
        }
    }
}
