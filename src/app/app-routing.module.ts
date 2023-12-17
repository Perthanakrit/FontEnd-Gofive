import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesListComponent } from './components/features/categories-list/categories-list.component';
import { CategoryAddComponent } from './components/features/category-add/category-add.component';
import { CategoryEditComponent } from './components/features/category-edit/category-edit.component';

const routes: Routes = [
  {
    path: 'admin/category', // ถ้าเข้ามาที่ path นี้ให้ไปที่ HeroesComponent
    component: CategoriesListComponent,
    
  },
  {
    path: 'admin/category/add',
    component: CategoryAddComponent
  },
  {
    path: 'admin/category/:id',
    component: CategoryEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
