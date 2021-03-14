import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {
//private REST_API_SERVER = "https://imdb-api.com/en/API/InTheaters/{API_KEY}";
private REST_API_SERVER = "https://imdb-api.com/en/API/InTheaters/{API_KEY}";



constructor(private httpClient: HttpClient) {}
public sendGetRequest() {
  return this.httpClient.get(this.REST_API_SERVER);
}
}
