import { CategoryService } from './../../../services/category/category.service';
import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddCategoryRequest } from 'src/app/models/category/add-category-request';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnDestroy {
  private addCategory$?: Subscription ;

  public model: AddCategoryRequest = {
    name: '',
    urlHandle: ''
  };

  constructor(private categoryService: CategoryService, private router: Router) {}

  onSubmitForm() {
      this.addCategory$ = this.categoryService.addCategory(this.model).subscribe({
        next: () => {
          this.router.navigate(['/admin/category']);
        }, // ถ้าสำเร็จ จะทำอะไรต่อ

      });
  }

  ngOnDestroy(): void {
    this.addCategory$?.unsubscribe();
  }
}
