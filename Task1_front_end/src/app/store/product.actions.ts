// src/app/state/product.actions.ts
import { createAction, props } from '@ngrx/store';
import { Product } from '../product.model';

export const loadProducts = createAction('[Product List] Load Products');

export const loadProductsSuccess = createAction(
  '[Product List] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Product List] Load Products Failure',
  props<{ error: any }>()
);

export const addProduct = createAction(
  '[Add Product] Add Product',
  props<{ product: Product }>()
);

export const addProductSuccess = createAction(
  '[Add Product] Add Product Success',
  props<{ product: Product }>()
);

export const addProductFailure = createAction(
  '[Add Product] Add Product Failure',
  props<{ error: any }>()
);
