import { Component, OnInit } from '@angular/core';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import  MoviesJson  from '../../assets/items.json';
import { DataService } from '../services/data.service';
@Component({
  selector: 'mov-ag-grid-home',
  templateUrl: './ag-grid-home.component.html',
  styleUrls: ['./ag-grid-home.component.scss']
})
export class AgGridHomeComponent implements OnInit {

  columnDefs = [
    { field: "title" ,resizable: true, sortable: true, filter: true },
    { field: "releaseState" , resizable: true },
    { field: "genres" , resizable: true,  filter: true },
    { field: "contentRating" , resizable: true,  filter: true }
  ];
  movie: any[] = MoviesJson.items;
  public items: any[] = MoviesJson.items;

  //constructor(private dataService: DataService) {}
  constructor() {}
  ngOnInit() {
    // this.dataService.sendGetRequest().subscribe((data: any[]) => {
    //   console.log(Object.values(data) );
    //   this.items = Object.values(data)[0];
    // });
  }

}
