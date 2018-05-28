import {Component, OnInit } from '@angular/core'
import { PersonsService } from './persons.service';
import { Person } from '../models/person';




@Component({  
    selector : 'persons-list', 
    templateUrl : './persons-list.component.html',
    styleUrls : ['./persons-list.component.css']

})
export class PersonsList { 

    private persons : Person [] = [];
    private defaultAge = "Unknown";
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
              this.processPesonListToDisplay();          
            }
          );
    }
  
    private processPesonListToDisplay(){
        this.persons.forEach(p => {
            if(p){
                if(!p.age){
                    p.age = this.defaultAge;
                }else{
                    if(this.isEighteenPlus(p.age)){
                        p.eighteenPlus = true;
                    }
                }
               
            }
        })
    }

    private isEighteenPlus(age){
        return parseInt(age) > 18;

    }

    public removePerson(person){
        if(!person || !this.persons.length){
            return;
        }
        let index = this.persons.indexOf(person);
        if(index > -1){
            this.persons.splice(index, 1);
        }

    }

 

}