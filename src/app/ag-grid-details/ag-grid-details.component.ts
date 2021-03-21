import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import {DataService} from '../services/data.service';

import {IMovie} from '../interfaces/IMovie';

@Component({
  selector: 'mov-ag-grid-details',
  templateUrl: './ag-grid-details.component.html',
  styleUrls: ['./ag-grid-details.component.scss']
})
export class AgGridDetailsComponent implements OnInit {
  movie!: IMovie;
  errorMessage:any;
  constructor( private route: ActivatedRoute,
    private router: Router,
    private service:DataService) { }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
   // console.log(param);
    if (param) {

      this.getMovie(param);
    }
  }
  getMovie(id: string): void {
   // console.log('getmovie'+id);
    this.service.getMovieById(id).subscribe({
      next: (data: IMovie) => this.movie = data,
      error: (err: string) => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/ag-grid-home']);
  }

}
