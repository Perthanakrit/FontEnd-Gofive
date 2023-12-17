import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/models/category/category';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})


export class CategoriesListComponent implements OnInit, OnDestroy {
  // OnInit คือ ตัวที่จะทำงานเมื่อ component ถูกสร้างขึ้นมา และจะทำงานครั้งเดียวเท่านั้น

  public categoies: Category[] = [];

  private getCategories$?: Subscription;

  constructor(private categoryService: CategoryService) { }
  ngOnInit(): void {
    this.getCategories$ = this.categoryService.getAllCategories().subscribe({
      next: (response) => {
        this.categoies = response;
        console.log("this.categories",response);
      }
    })
  }

  ngOnDestroy(): void {
    this.getCategories$?.unsubscribe();
  }
}
