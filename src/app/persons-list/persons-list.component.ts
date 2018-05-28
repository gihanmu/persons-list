import {Component, OnInit } from '@angular/core'




@Component({  
    selector : 'persons-list', 
    templateUrl : './persons-list.component.html',
    styleUrls : ['./persons-list.component.css']

})
export class PersonsList implements OnInit{
    pageTitle : string = 'Product List';
    imageWidth : number = 50;
    imageMargin :number =2;
    showImage : boolean = false;
    errorMessage : string;

 

    constructor(){       
        // this.listFilter = 'cart';
        
    }


    ngOnInit() : void {
    
      
    }

 

}