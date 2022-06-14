
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { LoggingServive } from "../logging.service";
import { SharedModule } from "../shared/shared.module";
import { ShoppingListEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";


@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingListEditComponent
    ], 
    imports:[
        FormsModule,
        RouterModule.forChild([
            {path: '', component: ShoppingListComponent}
        ]), 
        SharedModule
    ]
})
export class ShoppingListModule{}