import { Component, OnInit } from '@angular/core';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { ButtonRenderComponent } from './button-render/button-render.component';
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
    { field: "contentRating" , resizable: true,  filter: true },
    {  headerName: '',
    cellRenderer: 'buttonRender',
    cellRendererParams: {
      onClick: this.onBtnClick1.bind(this),
      label:'Show Details'
    }
  }

  ];
  public rowData: any;
  rowDataClicked1 = {};
  frameworkComponents: any;

  constructor(private dataService: DataService, private router: Router) {
    this.frameworkComponents = {
      buttonRender: ButtonRenderComponent
    }
  }
  ngOnInit() {
    this.dataService.sendGetRequest().subscribe((data: any[]) => {
     // console.log(Object.values(data) );
      this.rowData = Object.values(data)[0];
    });
  }
  onBtnClick1(e: { rowData: {}; }) {
    this.rowDataClicked1 = e.rowData;
   //console.log(e.rowData);
    this.router.navigate(['/movies/'+e.rowData+'']);
  }
}
