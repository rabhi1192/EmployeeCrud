import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from '../customer/customer.component';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';

import { SellingComponent } from '../selling/selling.component';
import { AddSellingComponent } from '../add-selling/add-selling.component';
import { SellingDetailsComponent } from '../selling-details/selling-details.component';

const routes: Routes = [
   { 
     path: 'customers', 
     component: CustomerComponent 
   },
   { 
     path: 'customer/add', 
     component: AddCustomerComponent 
   },
   { 
     path: 'customers/:id', 
     component: CustomerDetailsComponent 
   },
   { 
     path: '', 
     redirectTo: 'customers', 
     pathMatch: 'full'
   }, 
   { 
    path: 'sellingDetails', 
    component: SellingComponent 
  },
  { 
    path: 'sellingDetails/add', 
    component: AddSellingComponent 
  },
  { 
    path: 'sellingDetails/:id', 
    component: SellingDetailsComponent 
  },
  { 
    path: '', 
    redirectTo: 'sellingDetails', 
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}