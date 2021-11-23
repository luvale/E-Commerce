import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

//Components
import { NavComponent } from './components/nav/nav.component';
import { SearchComponent } from './components/search/search.component';
import { CardsProductsComponent } from './components/cards-products/cards-products.component';


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    NavComponent,
    SearchComponent,
    CardsProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
