import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { ButtonRendererComponent } from './renderer/button-renderer.component';
import { Router } from '@angular/router';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
@Component({
  selector: 'mov-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  frameworkComponents: any;
  rowDataClicked1 = {};
  rowData: any;
  errorMessage:any;
  columnDefs = [


    { field: 'Title',resizable: true, sortable: true, filter: true },
    { field: 'listingType',resizable: true },
    { field: 'imdbRating',resizable: true },
    { field: 'Language',resizable: true, filter: true },
    { field: 'Location',resizable: true, filter: true },
    {  headerName: '',
    cellRenderer: 'buttonRenderer',
    cellRendererParams: {
      onClick: this.onBtnClick1.bind(this),
      label:'Show Details'
    }
  },
];



  constructor(private dataService: DataService, private router: Router) {
    this.frameworkComponents = {
      buttonRenderer: ButtonRendererComponent,
    }
  }

  ngOnInit() {
console.log("start");
    this.dataService.sendGetRequest().subscribe({
      next: (data: any) =>{
        this.rowData=data;

      },
      error: (err: any)=>this.errorMessage=err
    }

    )
  }
  onBtnClick1(e: { rowData: {}; }) {
    this.rowDataClicked1 = e.rowData;
    //console.log(e.rowData);
    this.router.navigate(['/movies/'+e.rowData+'']);
  }
}


@Component({
  selector: 'app-image-formatter-cell',
  template: `<img border="0"  src=\"{{ params.value }}\">` })

export class ImageFormatterComponent {
  params: any;
  agInit(params: any){
    this.params = params;
  }
}
