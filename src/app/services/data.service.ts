import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import{IMovie} from '../interfaces/IMovie';

import { filter, map, startWith,findIndex, catchError, retry} from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
//private REST_API_SERVER = "https://imdb-api.com/en/API/InTheaters/{API_KEY}";
private REST_API_SERVER = "https://imdb-api.com/en/API/InTheaters/{API_KEY}";


   allData:any;


constructor(private httpClient: HttpClient) {}

handleError(error: HttpErrorResponse) {
  let errorMessage = 'Unknown error!';
  if (error.error instanceof ErrorEvent) {
    // Client-side errors
    errorMessage = `Error: ${error.error.message}`;
  } else {
    // Server-side errors
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  window.alert(errorMessage);
  return throwError(errorMessage);
}

public getAllMovies() {
  //return this.httpClient.get(this.REST_API_SERVER).pipe(catchError(this.handleError));
  //console.log('getAllMovies').pipe(catchError(this.handleError));
  return this.httpClient.get<IMovie[]>("assets/items.json").pipe(retry(3),catchError(this.handleError));
}

public getMovieById(id:string){
  this.allData=this.httpClient.get<IMovie[]>("assets/itemsCollection.json").pipe(retry(3),catchError(this.handleError));;

  const index  = this.allData.pipe(
  map((movie: IMovie[]) => movie.find(p => p.id === id))
);

  const result = this.allData[index];

console.log(this.allData.pipe(
  map((movie: IMovie[]) => movie.find(p => p.id === id))
));
 // return this.rowData.filter((rowData: { id: string; }) => rowData.id === id);
 return this.allData.pipe(
  map((movie: IMovie[]) => movie.find(p => p.id === id))
);
}
}
