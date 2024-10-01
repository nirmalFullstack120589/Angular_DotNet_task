// src/app/services/product.service.ts
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  http = inject(HttpClient);

  /**
   * Get products list
   * @returns Products list
   */
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.baseUrl}/GetProducts`);
  }

  /**
   * Create a new product
   * @param product - product payload to add
   * @returns 
   */
  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${environment.baseUrl}/CreateProduct`, product);
  }
}
