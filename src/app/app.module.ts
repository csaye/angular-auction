import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuctionMaterialModule } from './auction-material/auction-material.module';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { StarsComponent } from './stars/stars.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    SearchComponent,
    StarsComponent,
    ProductItemComponent,
    ProductDetailComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuctionMaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
