import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './modules/general/about/about.component';
import { HomeComponent } from './modules/general/home/home.component';
import { ContactComponent } from './modules/general/contact/contact.component';
import { ProductComponent } from './modules/general/product/product/product.component';
import { ProductlistComponent } from './modules/general/product/product/productlist/productlist.component';
import { ProductdetailComponent } from './modules/general/product/product/productdetail/productdetail.component';
import { ProductformComponent } from './modules/general/product/product/productform/productform.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    ProductComponent,
    ProductlistComponent,
    ProductdetailComponent,
    ProductformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
