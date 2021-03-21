import { Component, OnInit } from '@angular/core';

import {  Router } from '@angular/router';

@Component({
  selector: 'mov-ag-grid-details',
  templateUrl: './ag-grid-details.component.html',
  styleUrls: ['./ag-grid-details.component.scss']
})
export class AgGridDetailsComponent implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit(): void {
  }

}
