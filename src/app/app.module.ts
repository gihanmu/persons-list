import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PersonsList } from './persons-list/persons-list.component';
import { PersonsService } from './persons-list/persons.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    PersonsList
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [PersonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
