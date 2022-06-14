import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[appPlaceholder]'
})
export class Placeholderdirective{
    constructor(public viewContainerRef: ViewContainerRef){}
}