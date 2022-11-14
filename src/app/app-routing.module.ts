import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';

const routes: Routes = [
  {path:"",component:HomePageComponent},
  {path:"products",component:ProductsPageComponent},
  {path:"admin",component:AdminPageComponent},
  {path:"products/:id",component:ProductDetailPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
