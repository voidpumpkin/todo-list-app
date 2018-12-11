import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArchivedTodoListService {
  
  constructor(private http: HttpClient) { }

  getTodoList(){
    return this.http
    .get('http://localhost:8080/todoList/archived')
    .toPromise()
    .catch((error: any) => {
      console.log('getArchivedTodoList catch error');
    });
  }
}
