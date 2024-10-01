import { Component, inject, Inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import * as ProductActions from '../store/product.actions';
import { ProductState } from '../store/product.reducer';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule, MatDialogActions, MatDialogContent, MatDialogTitle, MatDialogClose, MatButtonModule],
  templateUrl: './add-product.component.html',
})
export class AddProductComponent {
  // product form 
  productForm: FormGroup;

  fb = inject(FormBuilder);

  store = inject(Store<{ productState: ProductState }>);

  dialogRef = inject(MatDialogRef<AddProductComponent>);

  constructor() {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.minLength(30)]],
      price: ['', [Validators.required, Validators.min(1)]],
      consent: [false, Validators.requiredTrue],
    });
  }

  /**
   * Add new product 
   * @returns void
   */
  onSubmit(): void {
    if (!this.productForm.valid) {
      this.productForm.markAllAsTouched();
      return;
    }
    const { consent, ...productData } = this.productForm.value;
    this.store.dispatch(ProductActions.addProduct({ product: productData }));
    this.dialogRef.close(true);
  }
}