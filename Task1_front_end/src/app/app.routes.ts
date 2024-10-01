import { Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

// Define the application routes
export const routes: Routes = [
    { path: '', component: ProductListComponent },
    { path: 'terms-and-conditions', component: PrivacyPolicyComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
