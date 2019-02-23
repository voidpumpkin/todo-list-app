import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TodoListService {

  constructor(private http: HttpClient) { }

  getTodoList(){
    return this.http
    .get('http://www.patogusauksas.lt:8090/todoList')
    .toPromise()
    .catch((error: any) => {
      console.log('getTodoList catch error');
    });
  }

  archiveTodoItem(id){
    return this.http
    .put('http://www.patogusauksas.lt:8090/archiveTodoListItem/' + id, null)
    .toPromise()
    .catch((error: any) => {
      console.log('archiveTodoItem catch error');
    });
  }

  addNewTodoItem(todoItemText: String){
    return this.http
    .post('http://www.patogusauksas.lt:8090/todoListItem/',todoItemText)
    .toPromise()
    .catch((error: any) => {
      console.log('addNewTodoItem catch error');
    });
  }
}
