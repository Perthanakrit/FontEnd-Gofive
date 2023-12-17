import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddCategoryRequest } from 'src/app/models/category/add-category-request';
import { Category } from 'src/app/models/category/category';
import { UpdateCategoryRequest } from 'src/app/models/category/update-category-request';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  addCategory(model:AddCategoryRequest) {
    return this.http.post(`${environment.apiBaseUrl}categories`, model);
  }

  getAllCategories() {
    return this.http.get<Category[]>(`${environment.apiBaseUrl}categories`)
  }

  getCategory(id:string) {
    return this.http.get<Category>(`${environment.apiBaseUrl}categories/${id}`)
  }

  updateCategory(id: string, model: UpdateCategoryRequest) {
    return this.http.put<Category>(`${environment.apiBaseUrl}categories/${id}`, model);
  }

  deleteCategory(id: string) {
    return this.http.delete(`${environment.apiBaseUrl}categories/${id}`);
  }

}
