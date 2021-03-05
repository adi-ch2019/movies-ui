import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Movie } from './movies';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _baseURL = "http://localhost:1999/Movies";

  constructor(private http:HttpClient){}
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      console.log("Client-side errors");
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      console.log("Server-side errors");
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public sendGetRequest(){
    console.log("sendGetRequest");
    return this.http.get<Movie[]>(this._baseURL).pipe(catchError(this.handleError));
  }
  getMovieById(id:string){
    return this.http.get<Movie>(this._baseURL+"/"+id).pipe(catchError(this.handleError));
  }
}
