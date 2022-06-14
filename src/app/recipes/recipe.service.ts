
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.module";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
    recipeChange = new Subject<Recipe[]>();
    //    private recipes: Recipe[]= [
    //     new Recipe(
    //         "Tasty Schnitzel", 
    //         "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg",
    //         "A super-tasty Schnitzel - just awesome!", 
    //         [
    //             new Ingredient("Meat", 1),
    //             new Ingredient("French Fries", 20)
    //         ]),
    //     new Recipe(
    //         "Big Fat Burger",
    //         "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg", 
    //         "What else you need to say ? ", 
    //         [
    //             new Ingredient("Buns", 2),
    //             new Ingredient("Meat", 1),
    //             new Ingredient("Tomatoes", 2),
    //             new Ingredient("Salad", 1)
    //         ])
    //   ];

    private recipes: Recipe[] = [];
      constructor(private slService: ShoppingListService){}

      getRecipes(){
          return this.recipes.slice();
      }

      getRecipe(index: number){
          return this.recipes[index];
      }
      
      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }

      addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipeChange.next(this.recipes.slice());
      }

      update(index: number, newRecipe: Recipe){
          this.recipes[index]=newRecipe;
          this.recipeChange.next(this.recipes.slice());

      }
      deleteRecipe(index){
          this.recipes.splice(index, 1);
          this.recipeChange.next(this.recipes.slice());
      }

      setRecipes(recipes: Recipe []){
        this.recipes = recipes;
        this.recipeChange.next(this.recipes.slice());
      }


    
}