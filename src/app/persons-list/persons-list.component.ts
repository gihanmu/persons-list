import {Component, OnInit } from '@angular/core'
import { PersonsService } from './persons.service';




@Component({  
    selector : 'persons-list', 
    templateUrl : './persons-list.component.html',
    styleUrls : ['./persons-list.component.css']

})
export class PersonsList { 

    private persons : any [] = [];
    constructor(
        private _personsService : PersonsService
    ){       
       this.loadPersonsList();
        
    }


    
    private loadPersonsList() {
        this._personsService.getPersonsList()
          .subscribe(
            data => {
              this.persons = data;             
            }
          );
      }

 

}