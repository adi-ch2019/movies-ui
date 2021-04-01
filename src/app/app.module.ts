import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridHomeComponent } from './ag-grid-home/ag-grid-home.component';
import { AboutComponent } from './about/about.component';
import { AgGridModule } from 'ag-grid-angular';
import { AgGridDetailsComponent } from './ag-grid-details/ag-grid-details.component';
import { HttpClientModule } from '@angular/common/http';

import { MovieReducer } from './store/moves.reducer';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MoviesEffects } from './store/movies.effects';
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
    AgGridModule.withComponents([]),
    HttpClientModule,
    StoreModule.forRoot({applicationState: MovieReducer}),

    EffectsModule.forRoot([MoviesEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
