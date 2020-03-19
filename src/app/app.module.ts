import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { PeopleService } from "./service/people.service";

import { AppComponent } from './app.component';
import { MenuComponent } from './commun/menu/menu.component';
import { AccueilComponent } from './front/accueil/accueil.component';
import { PeopleComponent } from './front/people/people.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: "", component: AccueilComponent }]),
    HttpClientModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})

export class AppModule { }
