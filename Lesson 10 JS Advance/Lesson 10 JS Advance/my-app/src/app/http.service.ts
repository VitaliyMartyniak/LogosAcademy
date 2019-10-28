import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpClientModule} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient) {
  }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getTodos() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
