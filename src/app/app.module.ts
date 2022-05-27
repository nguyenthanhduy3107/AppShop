import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { MenuCategoryComponent } from './menu-category/menu-category.component';
import { PopularProductComponent } from './popular-product/popular-product.component';
import { PopularProductListComponent } from './product/popular-product-list/popular-product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './product/product.service';
import { PopularProductItemComponent } from './product/popular-product-list/popular-product-item/popular-product-item.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    MenuCategoryComponent,
    PopularProductComponent,
    PopularProductListComponent,
    ProductComponent,
    PopularProductItemComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
