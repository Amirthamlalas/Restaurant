import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AddPageComponent } from './add-page/add-page.component';
import { DessertComponent } from './dessert/dessert.component';


const myconst : Routes = [
  {
    path:"",
    component:HomePageComponent
  },
  {
    path:"admin",
    component:AdminPageComponent
  },
  {
    path:"add",
    component:AddPageComponent
  },
  {
    path:"dessert",
    component:DessertComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    AdminPageComponent,
    AddPageComponent,
    DessertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myconst),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
