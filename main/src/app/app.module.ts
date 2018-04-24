import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NaviComponent } from './navi/navi.component';
import { OverallSummaryComponent } from './overall-summary/overall-summary.component';
import { DetailedViewComponent } from './detailed-view/detailed-view.component';
import { CreateActionComponent } from './create-action/create-action.component';
import { QualitativeFbComponent } from './qualitative-fb/qualitative-fb.component';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MatButtonModule, MatCheckboxModule, MatTableDataSource, MatTabsModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NaviComponent,
    OverallSummaryComponent,
    DetailedViewComponent,
    CreateActionComponent,
    QualitativeFbComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
