using Microsoft.EntityFrameworkCore.Migrations;

namespace MoKitchen.Migrations
{
    public partial class updatedPictureProptoPictureURL : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Picture",
                table: "Recipes");

            migrationBuilder.AddColumn<string>(
                name: "PhotoURL",
                table: "Recipes",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PhotoURL",
                table: "Recipes");

            migrationBuilder.AddColumn<string>(
                name: "Picture",
                table: "Recipes",
                type: "text",
                nullable: false,
                defaultValue: "");
        }
    }
}
