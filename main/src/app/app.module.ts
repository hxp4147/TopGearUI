import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BannerComponent } from './banner/banner.component';
import { RatingsComponent } from './ratings/ratings.component';
import { StrengthsComponent } from './strengths/strengths.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BannerComponent,
    RatingsComponent,
    StrengthsComponent,
    TableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
