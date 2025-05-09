using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Geonorge.MinSide.Infrastructure.Migrations
{
    public partial class AddShortcuts : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "OrganizationNumber",
                table: "InfoTexts",
                type: "nvarchar(450)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.CreateTable(
                name: "Shortcuts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    Url = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Username = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Shortcuts", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_InfoTexts_OrganizationNumber",
                table: "InfoTexts",
                column: "OrganizationNumber");

            migrationBuilder.CreateIndex(
                name: "IX_Shortcuts_Name_Username",
                table: "Shortcuts",
                columns: new[] { "Name", "Username" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Shortcuts");

            migrationBuilder.DropIndex(
                name: "IX_InfoTexts_OrganizationNumber",
                table: "InfoTexts");

            migrationBuilder.AlterColumn<string>(
                name: "OrganizationNumber",
                table: "InfoTexts",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");
        }
    }
}
