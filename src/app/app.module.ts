import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { StarsComponent } from './components/stars/stars.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductsPageComponent,
    ProductDetailPageComponent,
    AdminPageComponent,
    FooterComponent,
    HeaderComponent,
    GalleryComponent,
    StarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
