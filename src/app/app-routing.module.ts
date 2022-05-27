import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductStartComponent } from './product/product-start/product-start.component';
import { ProductComponent } from './product/product.component';
import { Product } from './product/product.model';

const routes: Routes = [
  {path:"" , redirectTo: '/product',pathMatch:'full'},
  {path:"product", component: ProductComponent,children:[
    {path:'', component:ProductStartComponent},
    {path:':id', component:ProductDetailComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
