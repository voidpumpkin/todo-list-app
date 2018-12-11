import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor(private http: HttpClient) { }

  getTodoList(){
    return this.http
    .get('http://localhost:8080/todoList')
    .toPromise()
    .catch((error: any) => {
      console.log('getTodoList catch error');
    });
  }
}
