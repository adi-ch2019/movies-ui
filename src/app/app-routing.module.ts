import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgGridHomeComponent }  from './ag-grid-home/ag-grid-home.component';
import {AboutComponent} from './about/about.component';
import{AgGridDetailsComponent} from '../app/ag-grid-details/ag-grid-details.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'ag-grid-home', component: AgGridHomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'movies/:id',
    component: AgGridDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
