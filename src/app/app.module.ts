import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CategoriesListComponent } from './components/features/categories-list/categories-list.component';
import { CategoryAddComponent } from './components/features/category-add/category-add.component';
import { CategoryEditComponent } from './components/features/category-edit/category-edit.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CategoriesListComponent,
    CategoryAddComponent,
    CategoryEditComponent
  ], // declear component
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent] // บอกว่าให้เริ่มที่ AppComponent
})
export class AppModule { }
