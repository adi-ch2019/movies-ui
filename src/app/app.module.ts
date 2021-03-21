import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridHomeComponent } from './ag-grid-home/ag-grid-home.component';
import { AboutComponent } from './about/about.component';
import { AgGridModule } from 'ag-grid-angular';
import { AgGridDetailsComponent } from './ag-grid-details/ag-grid-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AgGridHomeComponent,
    AboutComponent,
    AgGridDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
