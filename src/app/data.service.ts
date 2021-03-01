import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _baseURL = "http://localhost:1999/Movies.json";

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
    return this.http.get('http://localhost:1999/Movies').pipe(catchError(this.handleError));
  }

}
