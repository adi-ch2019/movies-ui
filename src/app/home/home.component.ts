import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'mov-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  columnDefs = [

    { field: 'Poster', cellRenderer :ImageFormatterComponent},
    { field: 'Poster',  cellRenderer: (params: { value: string; }) => {
      // put the value in bold
      return '<img src=\"{{'+ params.value +'}}\">';
  }},
    { field: 'Poster',resizable: true },
    { field: 'Title',resizable: true, sortable: true, filter: true },
    { field: 'listingType',resizable: true },
    { field: 'imdbRating',resizable: true },
    { field: 'Language',resizable: true, filter: true },
    { field: 'Location',resizable: true, filter: true }


];

rowData: any;
errorMessage:any;

  constructor(private dataService: DataService) { }

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
