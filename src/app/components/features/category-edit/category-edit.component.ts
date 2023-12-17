import { Subscription } from 'rxjs';
import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service';
import { Category } from 'src/app/models/category/category';
import { UpdateCategoryRequest } from 'src/app/models/category/update-category-request';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnDestroy{
  public id: string|null = null;
  public category?:Category;

  private $params? : Subscription;
  private $getCategory? : Subscription;
  private $updateCategory? : Subscription; 
  private $deleteCategory? : Subscription; 

  constructor(private route: ActivatedRoute, private categoryService: CategoryService, private router: Router) {
    this.$params = this.route.paramMap.subscribe({
      next: (params) => {
        console.log(params)
        this.id = params.get('id');
        if (this.id) {
          this.$getCategory = categoryService.getCategory(this.id).subscribe({
            next: (category) => {
              this.category = category;
            }
          })
        }
      }
    })
  }

  onSubmitForm() {
    if (this.category?.name && this.category?.urlHandle)
    {
      const updateCategory: UpdateCategoryRequest = {
        name: this.category.name,
        urlHandle: this.category.urlHandle
      }

      this.$updateCategory = this.categoryService.updateCategory(this.id!, updateCategory).subscribe({
        next: () => {
          this.router.navigateByUrl('/admin/category');
        }
      })
    }
  }

  onDelete():void {
    if (confirm('Are you sure to delete this category?'))
    {
      if (this.id) {
      this.$deleteCategory = this.categoryService.deleteCategory(this.id)
        .subscribe({
          next: () => {
            this.router.navigateByUrl('/admin/category');
          }
        })
    }
    }
  }

  ngOnDestroy(): void {
    this.$params?.unsubscribe();
    this.$getCategory?.unsubscribe();
    this.$updateCategory?.unsubscribe();
    this.$deleteCategory?.unsubscribe();
  }
}
