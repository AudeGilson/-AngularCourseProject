
import { Ingredient } from "../shared/ingredient.module";
import { Subject } from "rxjs";

export class ShoppingListService {
    ingredientChange = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ]

      getIngredients(){
          return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient){
          this.ingredients.push(ingredient);
          this.ingredientChange.next(this.ingredients.slice());
      }

      addIngredients(ingredients : Ingredient[]){
        //   for(let ing of ingredients){
        //     this.ingredients.push(ing);
        //   }
        this.ingredients.push(...ingredients);
        this.ingredientChange.next(this.ingredients.slice());
      }

      editIngredient(ingredient: Ingredient, index: number){
        this.ingredients[index] = ingredient;
        this.ingredientChange.next(this.ingredients.slice());
      }

      deleteIngredient(index: number){
        this.ingredients.splice(index, 1);
        this.ingredientChange.next(this.ingredients.slice());
      }

      getIngredient(index: number){
        return this.ingredients[index];
      }






    
}