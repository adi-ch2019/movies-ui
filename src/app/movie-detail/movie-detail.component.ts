import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../movies';
import { DataService } from '../data.service';

@Component({
  selector: 'mov-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  pageTitle = 'Movie Detail';
  errorMessage = '';
    movie!: Movie;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private service:DataService) { }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    console.log(param);
    if (param) {

      this.getMovie(param);
    }

  }
  getMovie(id: string): void {
    console.log('getmovie'+id);
    this.service.getMovieById(id).subscribe({
      next: (data: Movie) => this.movie = data,
      error: (err: string) => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/home']);
  }

}
