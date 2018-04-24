import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { RatingsComponent } from './ratings/ratings.component';
import { StrengthsComponent } from './strengths/strengths.component';
import { TableComponent } from './table/table.component';
import { DetailPanelComponent } from './detail-panel/detail-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    RatingsComponent,
    StrengthsComponent,
    TableComponent,
    DetailPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
