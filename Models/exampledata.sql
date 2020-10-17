TRUNCATE TABLE "Users";

INSERT INTO "Users" ("FullName", "Email") VALUES ('Mohamed Ammar', 'mo@email.com');
INSERT INTO "Users" ("FullName", "Email") VALUES ('Pickles Pickles', 'pickles@gmail.com');
INSERT INTO "Users" ("FullName", "Email") VALUES ('Gavin Stark', 'gavin@gmail.com');


TRUNCATE TABLE "Recipes";

INSERT INTO "Recipes" ("Title", "Picture", "Cuisine","Diet", "PrepTime","Servings", "CookingTime","UserId","Ingredients", "Steps", "DishType") VALUES ('Bananas Foster Ice Cream', 'https://spoonacular.com/recipeImages/634237-556x370.jpg','Creole', 'Vegetarian','4500',2, 5000, 3,'Carrots, Tomato, Ground beef', 'Cook until it burned. Throw is in the grabage then go order Taco Bell', 'Lunch');
INSERT INTO "Recipes" ("Title", "Picture", "Cuisine","Diet", "PrepTime","Servings", "CookingTime","UserId", "Ingredients", "Steps", "DishType") VALUES ('Vanilla Coconut Snowball Cupcakes', 'https://spoonacular.com/recipeImages/664306-556x370.jpg','American', 'Vegetarian','4500',13, 5000, 2,'Carrots, Tomato, Ground beef', 'Cook until it burned. Throw is in the grabage then go order Taco Bell', 'Lunch');
INSERT INTO "Recipes" ("Title", "Picture", "Cuisine","Diet", "PrepTime","Servings", "CookingTime","UserId", "Ingredients", "Steps", "DishType") VALUES ('Chocolate Nutella Walnut Cake', 'https://spoonacular.com/recipeImages/639114-556x370.jpg','American', 'Italian','3600',8, 5000, 1,'Carrots, Tomato, Ground beef', 'Cook until it burned. Throw is in the grabage then go order Taco Bell', 'Lunch');
