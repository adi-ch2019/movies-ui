import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import{IMovie} from '../interfaces/IMovie';

import { filter, map, startWith,findIndex} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
//private REST_API_SERVER = "http://imdb-api.com/en/API/InTheaters/{API_KEY}";
private REST_API_SERVER = "https://imdb-api.com/en/API/InTheaters/{API_KEY}";


   allData:any;


constructor(private httpClient: HttpClient) {}
public sendGetRequest() {
  //return this.httpClient.get(this.REST_API_SERVER);
  //console.log('sendGetRequest');
  this.allData=this.httpClient.get<any>("assets/items.json");
  return this.httpClient.get<any>("assets/items.json");
}

public getMovieById(id:string){
  this.allData=this.httpClient.get<any[]>("assets/itemsCollection.json");

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
