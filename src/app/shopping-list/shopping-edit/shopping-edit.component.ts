import { Component,  OnDestroy,  OnInit, ViewChild } from '@angular/core';
import { flush } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.module';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f',{static: false}) slForm : NgForm;
  subscription: Subscription;
  constructor(private shoppingListService: ShoppingListService) { }
  editMode = false;
  editedIndexIndex: number;
  editedItem: Ingredient;
  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
          this.editMode = true;
          this.editedIndexIndex = index;
          this.editedItem = this.shoppingListService.getIngredient(index);
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          })
      }
    );
  }

  onSubmit(form: NgForm){
    const ingrName = form.value.name;
      const ingrAmout = form.value.amount;
      const ingredient = new Ingredient(ingrName, ingrAmout);
    if(this.editMode){
      this.shoppingListService.editIngredient(ingredient, this.editedIndexIndex);
    } else{
          this.shoppingListService.addIngredient(ingredient);
    }  
    
    this.onClear();
  
  }

  onClear(){
    this.editMode = false;
    this.slForm.reset();
  }

  onDelete(){
    if(this.editMode){
      this.shoppingListService.deleteIngredient(this.editedIndexIndex);
      this.onClear();
    }
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
