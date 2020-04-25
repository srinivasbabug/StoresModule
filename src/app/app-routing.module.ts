import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/general/home/home.component';
import { ContactComponent } from './modules/general/contact/contact.component';
import { AboutComponent } from './modules/general/about/about.component';
import { ProductComponent } from './modules/general/product/product/product.component';
import { ProductlistComponent } from './modules/general/product/product/productlist/productlist.component';
import { ProductdetailComponent } from './modules/general/product/product/productdetail/productdetail.component';
import { ProductformComponent } from './modules/general/product/product/productform/productform.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'home', component: HomeComponent},
  {path: 'product',
          children: [
              {path: '', component: ProductComponent},
              {path: 'detail', component: ProductdetailComponent},
              {path: ':id', component: ProductlistComponent},
              {path: ':id/edit', component: ProductformComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
