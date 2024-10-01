import { Component, inject, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as ProductActions from '../store/product.actions';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Product } from '../product.model';
import { ProductState } from '../store/product.reducer';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AddProductComponent } from '../add-product/add-product.component';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { selectAllProducts } from '../store/product.selectors';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,MatDialogModule,MatTableModule,MatButtonModule],
  styleUrls: ['./product-list.component.scss'],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  // dialog reference
  readonly dialog = inject(MatDialog);

  store = inject( Store<{ productState: ProductState }>);

  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  // hold product list
  products$: Observable<Product[]>;

  // product list columns
  productsColumns: string[] = ['name', 'description', 'price', 'createdAt'];

  constructor() {
    this.products$ = this.store.pipe(select(selectAllProducts));
    this.products$.subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  ngOnInit() {
    this.store.dispatch(ProductActions.loadProducts());
  }

  /**
   * Open dialog to add product
   */
  openAddProductDailog(): void {
    const dialogRef = this.dialog.open(AddProductComponent, {
      panelClass: 'custom-dialog-container',
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(ProductActions.loadProducts());
      }
    });
  }
}
