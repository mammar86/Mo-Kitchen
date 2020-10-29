
TRUNCATE TABLE "Recipes", "Users" "Ratings" RESTART IDENTITY;

INSERT INTO "Recipes" ("Title", "PhotoURL", "Cuisine","Diet", "ReadyIn","Servings", "UserId","Ingredients", "Steps", "DishType") VALUES
 ('Creamy Chicken and Dumplings', 'https://i1.wp.com/thecraveablekitchen.com/wp-content/uploads/2017/12/Creamy-Chicken-and-Dumplings-Square-1.jpg?fit=550%2C550&ssl=1','American', 'Non-Vegetarian',45, 7, 53,'1/2 cup milk, 2 large eggs, 2 teaspoons baking powder, 1 1/2 cups plus 2 tablespoons all-purpose flour, 1 1/2 teaspoons kosher salt, 5 cups low-sodium chicken stock, 1 cup half-and-half, 1/2 teaspoon freshly ground black pepper, 2 sprigs fresh thyme, 1 bay leaf, 2 cups shredded cooked chicken, such as rotisserie chicken, 2 cups frozen mixed vegetables, such as peas, carrots and corn, 2 tablespoons chopped fresh parsley', 'In a medium bowl, whisk together the milk and eggs. In a separate bowl, sift together the baking powder, 1 1/2 cups of the flour and 1 teaspoon of the salt. Add the dry ingredients to the wet and mix until combined, being careful not to overmix. Set the dumpling batter aside.
In a medium pot, combine the stock, half-and-half, pepper, thyme, bay leaf and remaining 1/2 teaspoon salt and bring to a boil. In a small dish, whisk the remaining 2 tablespoons flour with 1/4 cup water. Whisk the flour mixture into the chicken stock mixture. Add the chicken and mixed vegetables and return to a boil. Using a tablespoon or a small ice cream scoop, drop scoops of the dumpling batter into the boiling liquid. Reduce the heat to a simmer and cook, uncovered, for 10 minutes. Cover and cook an additional 10 minutes. Garnish each serving with fresh parsley.', 'Lunch');
INSERT INTO "Recipes" ("Title", "PhotoURL", "Cuisine","Diet", "ReadyIn","Servings", "UserId", "Ingredients", "Steps", "DishType") VALUES (
  'Asian Grilled Salmon', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/5/14/0/FNK_INDOOR-GRILLED-SALMON-H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1557860284890.jpeg','Asian', 'Pescatarian',34 , 6, 53,'2 tablespoons Dijon mustard, 3 tablespoons good soy sauce, 6 tablespoons good olive oil, 1/2 teaspoon minced garlic', 'Light charcoal briquettes in a grill and brush the grilling rack with oil to keep the salmon from sticking. While the grill is heating, lay the salmon skin side down on a cutting board and cut it crosswise into 4 equal pieces. Whisk together the mustard, soy sauce, olive oil, and garlic in a small bowl. Drizzle half of the marinade onto the salmon and allow it to sit for 10 minutes. Place the salmon skin side down on the hot grill; discard the marinade the fish was sitting in. Grill for 4 to 5 minutes, depending on the thickness of the fish. Turn carefully with a wide spatula and grill for another 4 to 5 minutes. The salmon will be slightly raw in the center, but don't worry; it will keep cooking as it sits.Transfer the fish to a flat plate, skin side down, and spoon the reserved marinade on top. Allow the fish to rest for 10 minutes. Remove the skin and serve warm, at room temperature, or chilled.
', 'Dinner');
-- INSERT INTO "Recipes" ("Title", "PhotoURL", "Cuisine","Diet", "ReadyIn","Servings", "UserId", "Ingredients", "Steps", "DishType") VALUES ('Chocolate Nutella Walnut Cake', 'https://spoonacular.com/recipeImages/639114-556x370.jpg','American', 'Italian',8, 5000, 1,'Carrots, Tomato, Ground beef', 'Cook until it burned. Throw is in the grabage then go order Taco Bell', 'Lunch');

INSERT INTO "Users" ("FullName", "Email") VALUES ('Mohamed Ammar', 'mo@email.com');
INSERT INTO "Users" ("FullName", "Email") VALUES ('Pickles Pickles', 'pickles@gmail.com');
INSERT INTO "Users" ("FullName", "Email") VALUES ('Gavin Stark', 'gavin@gmail.com');

INSERT INTO "Ratings" ("RecipeId", "CreatedAt", "Summary", "Stars", "UserId") VALUES (15, '2020-01-01 14:23:55', 'Yummy Food', 3, 1);
INSERT INTO "Ratings" ("RecipeId", "CreatedAt", "Summary", "Stars", "UserId") VALUES (14, '2020-01-01 18:23:55', 'Mmmmm, good', 4, 2);

